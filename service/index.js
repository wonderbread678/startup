const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const DB = require('./database.js');

const authCookieName = 'token';
app.use(cookieParser());

app.use(express.json({ limit: '10mb' }));

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// let entries = [];
// let lists = [];
// let users = [];
// let profiles =[];

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('userName', req.body.userName)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.userName, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ userName: user.userName });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('userName', req.body.userName);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);
      res.send({ userName: user.userName });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
    DB.updateUser(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// get lists
apiRouter.get('/lists/:userName', verifyAuth, async (req, res) => {
  const userName = req.params.userName;
  const userLists = await DB.getLists(userName);
  res.send(userLists.map(l => l.listName));
})

// create list
apiRouter.post('/listName', verifyAuth, async (req, res) => {
    const { listName, userName } = req.body;
    const existing = await DB.getList(userName, listName);
    if (existing) {
        return res.status(400).send({ msg: 'List already exists' });
    }
    
    await DB.createList({ userName, listName})
    const userLists = await DB.getLists(userName);
    res.send(userLists.map(l => l.listName));
});


// Get entries
apiRouter.get('/entryList/:userName', verifyAuth, async (req, res) => {
    const userName = req.params.userName;
    const userEntries = await DB.getEntries(userName);
    res.send(userEntries);
});

// Submit entry
apiRouter.post('/entries', verifyAuth, async (req, res) => {
    console.log("Incoming /api/entries body:", req.body);
    const userName = req.body.userName;
    const newEntry = {
        id: req.body.id,
        userName: req.body.userName,
        title: req.body.title,
        author: req.body.author,
        type: req.body.type,
        rating: req.body.rating,
        list: req.body.list,
        listRank: req.body.listRank,
        comment: req.body.comment,
        image: req.body.image,
        listName: req.body.listName
    }
    await DB.createEntry(newEntry);
    const userEntries = await DB.getEntries(userName);
    res.send(userEntries);
    return;
});

// Update entry
apiRouter.put('/updateEntry/:id', async (req, res) => {
  const entryID = Number(req.params.id);
  const userName = req.body.userName;
  const updated = await DB.updateEntry(userName, entryID, req.body);
  if (!updated){
    return res.status(404).send({ msg: "Invalid entry" });
  }
  res.send(updated);
})

// Delete entry
apiRouter.delete('/deleteEntry/:id', verifyAuth, async (req, res) => {
  const id = Number(req.params.id);
  const userName = req.body.userName;
  const result = await DB. deleteEntry(userName, id);
  if (result.deletedCount === 0){
    return res.status(404).send({ msg: "Entry not found" });
  }
  res.status(200).send({ msg: "Entry deleted" });
});

// Get entry count
apiRouter.get('/entryCount/:userName', verifyAuth, async (req, res) => {
  const userName = req.params.userName;
  const entryCount = await DB.getEntryCount(userName);
  res.send(entryCount);
})

// Get profile
apiRouter.get('/getProfile/:userName', verifyAuth, async (req, res) => {
  const userName = req.params.userName;
  const profile = await DB.getProfile(userName)
  if (!profile){
    res.status(404).send({ msg: "Profile does not exist"});
    return;  
  }
  res.send(profile);
});

// Create profile
apiRouter.post('/createProfile', async (req, res) => {
  const { userName } = req.body;
  const existing = await DB.getProfile(userName);
  if (existing){
    return res.status(400).send({msg: "profile already exists"});
  }
  const newProfile =  {
    userName,
    profilePic: null,
    accountType: 'Public',
    bio: {
        favoriteMedia: '',
        favoritePiece: '',
        currentlyReading: '',
        bioMessage: ''
    }
  }
  await DB.createProfile(newProfile);
  return res.status(201).json(newProfile);
});

// Update profile
apiRouter.put('/updateProfile/:userName', verifyAuth, async (req, res) => {
  const userName = req.params.userName;
  const updatedProfile = await DB.updateProfile(userName, req.body);
  if (!updatedProfile) {
    return res.status(404).send({ msg: "Profile does not exist" });
  }
  res.send(updatedProfile);
});


// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

async function createUser(userName, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    userName: userName,
    password: passwordHash,
    token: uuid.v4(),
  };
  await DB.addUser(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

function updateEntries(newEntry) {
  entries.push(newEntry);
  console.log({entries});
  return entries;
}