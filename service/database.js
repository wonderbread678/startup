const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('koob');
const entriesCollection = db.collection('entries');
const listsCollection = db.collection('lists');
const userCollection = db.collection('users');
const profilesCollection = db.collection('profiles');

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(userName) {
  return userCollection.findOne({ userName: userName });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ userName: user.userName }, { $set: user });
}

async function createList(list){
    return listsCollection.insertOne(list)
}

async function getList(userName, listName){
    return await listsCollection.findOne({ userName, listName });
}

async function createEntry(entry){
    return await entriesCollection.insertOne(entry)
}

async function getEntry(userName, entryID){
    return await entriesCollection.findOne({userName, id: entryID})
}

async function updateEntry(userName, entryID, updateFields){
    await entriesCollection.updateOne({ userName, id: entryID}, {$set: updateFields});
    return await entriesCollection.findOne({ userName, id: entryID });
}

async function deleteEntry(userName, entryID){
    return await entriesCollection.deleteOne({ userName, id: entryID });
}

async function createProfile(profile){
    return await profilesCollection.insertOne(profile);
}

async function getProfile(userName){
    return await profilesCollection.findOne({ userName: userName})
}

async function updateProfile(userName, updatedFields){
    return await profilesCollection.updateOne({userName: userName}, {$set: updatedFields})
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  createList,
  getList,
  createEntry,
  getEntry,
  updateEntry,
  deleteEntry,
  createProfile,
  getProfile,
  updateProfile,
};