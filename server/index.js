const express = require ('express');
const PORT = 3000;
const db = require('../database/index.js')
const cors = require('cors');
const bodyParser = require('body-parser')
// const path = require('path')

const app = express();

app.use(cors())

// app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())


app.get('/getworkoutlist', (req, res)=> {
  // res.send('resss')
  db.getWorkoutList((err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(202).send(data)
    }
  })
})

app.post('/postworkout', (req, res)=> {
  console.log("req", req.body)
  var name = req.body.name;
  var reps = req.body.reps;
  var sets = req.body.sets;
  db.postWorkoutList([name, reps, sets], (err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(202).send(data)
    }
  })
})

app.delete('/deleteworkout/:id', (req, res) => {
  console.log("reqqqq", req.params)
  var deleteById = req.params.id
  db.deleteWorkout( [deleteById],(err, data)=> {
    if (err) {
      res.status(404).send(err)
    } else {
      res.send(data)
    }
  })
})

app.put('/updateworkout', (req, res) => {
  var name = req.body.name;
  var reps = req.body.reps;
  var sets = req.body.sets;
  var idChange = req.body.idChange

  db.updateNameWorkout([name, reps, sets, idChange], (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

//listen to server
app.listen(PORT, (err) => {
  if (err){
    console.log(err)
  } else {
    console.log(`Server is running on localhost:${PORT}`)
  }
});