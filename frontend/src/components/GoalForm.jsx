import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')

    // setText(text)
    // console.log(text)
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input className='input-effect'
          type="text"  
          name='text' 
          id='text' 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          />
          <label className='label-effect' htmlFor="text">Goal</label>  
        </div>
        <div className="form-group">
          <button className="btn btn-block" type='submit'>
            Add Goal
          </button>
        </div>
      </form>  
    </section>
  )
}

export default GoalForm