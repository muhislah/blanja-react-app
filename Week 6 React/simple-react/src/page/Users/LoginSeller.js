import React from 'react'
import Input from '../../component/Input/Input'
import { Link } from 'react-router-dom'
import Button from '../../component/Button/Button'

const LoginSeller = () => {
  return (
    <>
      <Input placeholder="Email Seller"/>
      <Input placeholder="Password" />
      <Link to="/forgot" style={{"textDecoration" : "none", "fontSize" : "14px" , "color" : "#DB3022" , "float" :"right"}}>Forgot Password</Link>
      <Button name='LOGIN' />
      <p>Don't have a Tokopedia account? <Link to="/users/registerseller" style={{"textDecoration" : "none", "fontSize" : "14px" , "color" : "#DB3022"}}>Register</Link></p>
    </>
  )
}

export default LoginSeller