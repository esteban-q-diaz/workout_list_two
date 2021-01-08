import React from 'react';

function UpdateForm ({ workoutlist, index, deleteClick, updateClick, onNameChange, onRepsChange, onSetsChange}) {
  return (
    <div >
      <input type="text" onChange={(e)=> {onNameChange(e.target.value)}} placeHolder='Name'/>
      <input type="text" onChange={(e)=> {onRepsChange(e.target.value)}} placeHolder="Reps"/>
      <input type="text" onChange={(e)=> {onSetsChange(e.target.value)}} placeHolder="Sets"/>
      <br />
      <input type="submit" value="Update" className="changeBtn" onClick={()=> {updateClick(workoutlist.id)}}/>
    </div>
  )
}

//update set values equal to current

export default UpdateForm