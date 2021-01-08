import React from 'react';
import WorkoutListItems from './WorkoutListItems.jsx';

function WorkoutList ( {workoutlist, deleteClick, updateClick, onNameChange, onRepsChange, onSetsChange} ) {
  return (
    <div>
      <h2>Todays workout:</h2>
      {workoutlist.map((workouts, index) => {
        return <WorkoutListItems key={index} index={index} workoutlist={workouts} deleteClick={deleteClick} updateClick={updateClick} onNameChange={onNameChange} onRepsChange={onRepsChange} onSetsChange={onSetsChange}/>
      })}

    </div>
  )
}

export default WorkoutList