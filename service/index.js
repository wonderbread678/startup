const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const authCookieName = 'token';
app.use(cookieParser());

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

let entries = [];
let lists = [];
let users = [];

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('username', req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.username, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ username: user.username });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('username', req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.token);
      res.send({ username: user.username });
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
apiRouter.get('/lists', verifyAuth, (_req, res) => {
  res.send(lists);
})

// create list
apiRouter.post('/listName', verifyAuth, async (req, res) => {
    console.log("starting the post")
    console.log("Incoming listName:", req.body.listName)
    const newList = req.body.listName;
    console.log("going to update")
    updateLists(newList);
    console.log("sending it back")
    res.send(lists);
})

// Update list
apiRouter.put('/updateEntry/:id', (req, res) => {
  const entryID = Number(req.params.id);
  const index = entries.findIndex(entry => entry.id === entryID);
  if (index === -1){
    res.status(404).send({ msg: "Invalid entry"});
    return;  
  }
  entries[index] = {...entries[index], ...req.body};
  res.send(entries[index]);
})

// Get entries
apiRouter.get('/entryList', verifyAuth, (_req, res) => {
    res.send(entries);
});

// Submit entry
apiRouter.post('/entries', verifyAuth, async (req, res) => {
    console.log("Incoming /api/entries body:", req.body);
    const newEntry = {
        id: req.body.id,
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
    entries = updateEntries(newEntry);
    res.send({entries});
    return;
});

// Delete entry
apiRouter.delete('/deleteEntry/:id', verifyAuth, (req, res) => {
  const id = Number(req.params.id);
  const index = entries.findIndex(entry => entry.id === id);
  if (index !== -1) {
    entries.splice(index, 1);
    res.status(200).json(entries);
  } else {
    res.status(404).json({ msg: 'Entry not found' });
  }
});


// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

async function createUser(username, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
  };
  users.push(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
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

function updateLists(newList) {
  lists.push(newList);
  console.log(lists);
  return lists
}





// // MongoDB stuff //
// const { MongoClient } = require('mongodb');
// const config = require('./dbConfig.json');

// const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

// // Connect to the database cluster
// const client = new MongoClient(url);
// const db = client.db('rental');
// const collection = db.collection('house');

// async function main() {
//   try {
//     // Test that you can connect to the database
//     await db.command({ ping: 1 });
//     console.log(`DB connected to ${config.hostname}`);
//   } catch (ex) {
//     console.log(`Connection failed to ${url} because ${ex.message}`);
//     process.exit(1);
//   }

//   try {
//     // Insert a document
//     const house = {
//       name: 'Beachfront views',
//       summary: 'From your bedroom to the beach, no shoes required',
//       property_type: 'Condo',
//       beds: 1,
//     };
//     await collection.insertOne(house);

//     // Query the documents
//     const query = { property_type: 'Condo', beds: { $lt: 2 } };
//     const options = {
//       sort: { name: -1 },
//       limit: 10,
//     };
//     const cursor = collection.find(query, options);
//     const rentals = await cursor.toArray();
//     rentals.forEach((i) => console.log(i));

//     // Delete documents
//     await collection.deleteMany(query);
//   } catch (ex) {
//     console.log(`Database (${url}) error: ${ex.message}`);
//   } finally {
//     await client.close();
//   }
// }

// main();