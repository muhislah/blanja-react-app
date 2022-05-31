import React from 'react'
import Button from '../../component/Button/Button'
import Input from '../../component/Input/Input'
import { Link } from 'react-router-dom'

const RegisterSeller = () => {
  return (
   <>
      <Input placeholder="Name"/>
      <Input placeholder="Email"/>
      <Input placeholder="Phone Number"/>
      <Input placeholder="Store Name"/>
      <Input placeholder="Password" />
      <Button name="REGISTER" />
      <p>Already have a Tokopedia account? <Link to="/users/loginseller" style={{"textDecoration" : "none", "fontSize" : "14px" , "color" : "#DB3022"}}>Login</Link></p>
   </>
  )
}

export default RegisterSeller