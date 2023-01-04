import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
  })

  const { email, password } = formData

  useEffect(() => {})

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }), console.log(e.target.name, [e.target.name], e.target.value))
  }

  const formSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className='heading'>
        <h1><FaSignInAlt /> Log In</h1>
        <p>Login and set your Goals </p>
      </section>

      <section className='form'>
        <form onSubmit={formSubmit}>

          <div className='form-group'>
            <input 
            type="email" 
            className='form-control' 
            id='email' 
            name='email' 
            value={email} 
            placeholder='Enter your email'
            onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input 
            type="password" 
            className='form-control' 
            id='password' 
            name='password' 
            value={password} 
            placeholder='Enter your password'
            onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type='submit' className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login