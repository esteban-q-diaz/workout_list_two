import React from 'react';
import WorkoutList from './WorkoutList.jsx';
import Form from './Form.jsx';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      workoutlist: [
        {name: 'abs', reps: 10, sets: 3},
        {name: 'bicep curls', reps: 10, sets: 3},
        {name: 'tricep extends', reps: 12, sets: 3},
      ],
      name: '',
      reps: '',
      sets: '',
    }
    // this.name;
    // this.reps;
    // this.sets;
    this.postClick = this.postClick.bind(this)
    this.onNameChange = this.onNameChange.bind(this)
    this.onRepsChange = this.onRepsChange.bind(this)
    this.onSetsChange = this.onSetsChange.bind(this)
    this.deleteClick = this.deleteClick.bind(this)
    this.updateClick = this.updateClick.bind(this)
  }

  componentDidMount() {
    this.getWorkoutList()
  }

  /*-------GET-------*/
  getWorkoutList() {
    axios.get('http://localhost:3000/getworkoutlist')
    .then((res)=> {
      this.setState({
        workoutlist: res.data,
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
  /*-------POST-------*/
  postWorkout() {
    axios.post('http://localhost:3000/postworkout', {
      name: this.state.name,
      reps: this.state.reps,
      sets: this.state.sets,
    })
    .then( (res) => {
      this.componentDidMount()
    })
    .catch( (err) => {
      console.log(err)
    })
  }

  postClick(e) {
    e.preventDefault()
    this.postWorkout()
    console.log('clicked')
  }

  onNameChange(query) {
    console.log(query)
    this.setState({
      name: query,
    })
  }

  onRepsChange(query) {
    this.setState({
      reps: query,
    })
  }

  onSetsChange(query) {
    this.setState({
      sets: query,
    })
  }

  /*-------DELETE-------*/
  deleteWorkout(id) {
    axios.delete(`http://localhost:3000/deleteworkout/${id}`)
    .then((res) => {
      this.componentDidMount()
    })
    .catch((err)=> {
      console.log(err)
    })
  }

  deleteClick(id) {
    this.deleteWorkout(id)
  }

  /*-------UPDATE-------*/
  updateWorkout(idChange) {
    axios.put('http://localhost:3000/updateworkout', {
      name: this.state.name,
      reps: this.state.reps,
      sets: this.state.sets,
      idChange: idChange,
    })
    .then((res) => {
     this.componentDidMount()
    })
  }

  updateClick(idChange) {
    console.log('clicked update')
    // e.preventDefault()
    this.updateWorkout(idChange)
  }


  render() {
  return (
    <div>
      <h1>Workout List</h1>
      <Form postClick={this.postClick} onNameChange={this.onNameChange} onRepsChange={this.onRepsChange} onSetsChange={this.onSetsChange}/>
      <WorkoutList workoutlist={this.state.workoutlist}
      deleteClick={this.deleteClick} updateClick={this.updateClick}
      onNameChange={this.onNameChange} onRepsChange={this.onRepsChange} onSetsChange={this.onSetsChange}
      />
    </div>
  )
  }
}



export default App