// firebaseConfig.js
const admin = require('firebase-admin');
const serviceAccount = require('./explore_epic-main/my-project/key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = { admin, db };
