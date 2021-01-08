import React, { useState }  from 'react';
import UpdateForm from './UpdateForm.jsx'

function WorkoutListItems ({ workoutlist, deleteClick, updateClick, onNameChange, onRepsChange, onSetsChange}) {

  const [modalState, setModalState] = useState(false)

  const manageState = () => {
    setModalState(!modalState)
    console.log('worked here')
  }


  return (
    <div >
      <table className="workoutItems">
        <tr className="workoutItems">
          <th>NAME</th>
          <th>REPS</th>
          <th className="right">SETS</th>
        </tr>
        <tr >
          <td className="bottom">{workoutlist.name}</td>
          <td className="bottom">{workoutlist.reps}</td>
          <td className="bottom right">{workoutlist.sets}</td>
        </tr>
      </table>
      <div className="deleteSection ">
        <input type="submit" value="Delete" className="deleteBtn d" onClick={()=> {deleteClick(workoutlist.id)}}/>

        <input type="submit" value="Make Changes" className="deleteBtn" onClick={()=> manageState()}/>
       </div>
 <div className={`modalBackground modalShowing-${modalState}`}>
      <UpdateForm workoutlist={workoutlist} deleteClick={deleteClick} updateClick={updateClick} onNameChange={onNameChange} onRepsChange={onRepsChange} onSetsChange={onSetsChange}/>
</div>






    </div>
  )
}

//update set values equal to current

export default WorkoutListItems