var mysql = require('mysql');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cowboyz',
  database: 'workout_list_two',
})


//create functions
function getWorkoutList (callback) {
  var sql = 'SELECT * FROM workout_list_two;'

  connection.query(sql, (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(data)
    }
  })
}


function postWorkoutList (params, callback) {
  var sql = 'INSERT INTO workout_list_two (name, reps, sets) values (?, ?, ?)'

  connection.query(sql, params, (err, data) => {
    if(err) {
      callback(err)
    } else {
      callback(data)
    }
  })
}

function deleteWorkout(params, callback) {
  var sql = 'DELETE FROM workout_list_two WHERE id = ?'

  connection.query(sql, params, (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(data)
    }
  })
}

function updateNameWorkout (params, callback) {
  var sql = 'UPDATE workout_list_two SET name = ?, reps = ?, sets= ? where id = ? '

  connection.query(sql, params, (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(data)
    }
  })
}

module.exports = {
  getWorkoutList, postWorkoutList, deleteWorkout, updateNameWorkout
}