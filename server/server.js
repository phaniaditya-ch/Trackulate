const { connectToDb, getDb } = require('./database/db');

require('dotenv').config()
const { ObjectId } = require('mongodb')
const bcrypt = require('bcrypt')
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(cors());

let db
connectToDb((err) => {
  if (!err) {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port: ", process.env.PORT)
    })
  }
  db = getDb()
})

app.get('/', (req, res) => {
    res.send('Home page working')
})

app.get('/all', async (req, res) => {
    const result = await db.collection('creds').find().toArray()
    console.log(result)
    res.json(result)
})