import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../component/Button/Button'
import Input from '../../component/Input/Input'

const LoginCustomer = () => {
  return (
    <>
      <Input placeholder="Email Customer"/>
      <Input placeholder="Password" />
      <Link to="/forgot" style={{"textDecoration" : "none", "fontSize" : "14px" , "color" : "#DB3022", "float" :"right"}}>Forgot Password</Link>
      <Button name='LOGIN' />
      <p>Don't have a Tokopedia account? <Link style={{"textDecoration" : "none", "fontSize" : "14px" , "color" : "#DB3022"}} to="/users/registercustomer">Register</Link></p>
    </>
  )
}

export default LoginCustomer