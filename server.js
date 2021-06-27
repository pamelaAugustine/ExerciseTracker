//This project was pair programmed with developer Jamie Frazier

const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()


var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Username = require('./models/username')
const ExList = require('./models/ex')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors())

app.use((req, res, next) => {
    //want method, path, ip address
    console.log("Method: " + req.method)
    console.log("Path: " + req.path)
    console.log("IP: " + req.ip)
    next()
})

//middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));


//CREATE
app.post('/api/exercise/new-user', (req, res) => {
  let Name = new Username(req.body)
  Name.save((err, Name) => {
    if (err) {
      console.log(err)
      res.json({ 'message': 'username is already taken' })
    }
    else {
      res.json(Name)
    }
  })
});

// get an JSON of all users by getting api/exercise/users
//READ
app.get('/api/exercise/users', (req, res) => {
 

  Username.find({}, (err, allUsers) => {
    if (err) {
      console.log(err)
    }
    else {
      res.json(allUsers)
    }
  })

})

//CREATE
app.post('/api/exercise/add', (req, res) => {

  let parsedDate = req.body.date
  if (req.body.date === '') {
    parsedDate = Date.now()
    parsedDate = new Date(parsedDate)
    //console.log(parsedDate)
  }

  let Exer = new ExList({
    userId: req.body.uid,
    description: req.body.desc,
    duration: req.body.dur,
    date: parsedDate
  })
  Exer.save((err, Exer) => {
    if (err) {
      console.log(err)
    }
    else {
      res.json(Exer)
    }
  })

})

//READ
app.get('/api/exercise/log', (req, res) => {

  const { userId } = req.query
  //console.log(userId)
  ExList.find({ userId }, (err, found) => {
    let obj = {
      count: found.length,
      userId: found
    }
    if (err) {
      console.log(err)
    }
    else {
      res.json(obj)
    }
  })

})

//READ
app.get('/api/exercise/userlog', (req, res) => {
  let user = req.query.userId
  const fromDate = req.query.from
  const toDate = req.query.to
  let userlimit = req.query.limit
  //console.log(userlimit)
 
  let parseFromDate = Date.parse(fromDate);
  let parseToDate = Date.parse(toDate);

  ExList.find({ userId: user }, (err, found) => {
    newData = found.filter(val => {
      if (Date.parse(val.date) >= parseFromDate && Date.parse(val.date) <= parseToDate) {
     
        return val;
      }
    })

    if (err) {
      console.log(err)
    }
    else {
      if(userlimit == undefined){
        //console.log('this is running')
        res.json(newData)
      }else{
      res.json(newData.slice(0, parseInt(userlimit)))
    }}
  })

})


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})



