import React from 'react';

function Form ({ postClick, onNameChange, onRepsChange, onSetsChange }) {
  return (
    <div >
      <form className="form">
        Name
        <input type="text" className="input" onChange={(e) => {onNameChange(e.target.value)}}/>
        Reps
        <input type="text" className="input" onChange={(e) => {onRepsChange(e.target.value)}}/>
        Sets
        <input type="text" className="input" onChange={(e) => {onSetsChange(e.target.value)}}/>
        <br />
        <input type="submit" className="submitBtn input" onClick={postClick}/>
      </form>
    </div>
  )
}

export default Form