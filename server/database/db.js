// const { MongoClient } = require('mongodb');
// require('dotenv').config()
// const connectionStringParser = require('mongodb-connection-string-url');

// let dbConnection;
// const dbURIUserData = process.env.DB_URI_USERDATA
// const dbURIMain = process.env.DB_URI_MAIN;


// console.log('dbURI is : ', process.env);
// // const dbURI = 'mongodb+srv://phaniaditya_ch:phani1234@trackulate.vlrjreo.mongodb.net/main?retryWrites=true&w=majority'


// module.exports = {
//     connectToDb: (cb) => {
//         console.log('initialising connection -->')
//         MongoClient.connect(dbURIMain)
//             .then((client) => {
//                 dbConnection = client.db()
//                 console.log('connected to db')
//                 return cb()
//             })
//             .catch(err => {
//                 console.log(err);
//                 return cb(err);
//             })
//     },
//     getDb: () => {
//         return dbConnection;
//     }
// }



const { MongoClient } = require('mongodb');
require('dotenv').config();

let dbConnection;
const dbURIMain = process.env.DB_URI_MAIN;
const dbURIUserData = process.env.DB_URI_USERDATA;

const connectToDb = (dbURI, cb) => {
  console.log('Initializing connection -->');
  MongoClient.connect(dbURI)
    .then((client) => {
      dbConnection = client.db();
      console.log('Connected to db');
      return cb();
    })
    .catch((err) => {
      console.log(err);
      return cb(err);
    });
};

const getDb = () => {
  return dbConnection;
};

module.exports = {
  connectToDb,
  getDb,
  mainDb: () => connectToDb(dbURIMain),
  userDataDb: () => connectToDb(dbURIUserData),
};