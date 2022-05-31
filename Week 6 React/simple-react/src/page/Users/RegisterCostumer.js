import React from 'react'
import Button from '../../component/Button/Button'
import Input from '../../component/Input/Input'
import { Link } from 'react-router-dom'

const RegisterCostumer = () => {
  return (
   <>
      <Input placeholder="Name"/>
      <Input placeholder="Email"/>
      <Input placeholder="Password" />
      <Button name="REGISTER" />
      <p>Already have a Tokopedia account? <Link to="/users/logincustomer" style={{"textDecoration" : "none", "fontSize" : "14px" , "color" : "#DB3022"}}>Login</Link></p>
   </>
  )
}

export default RegisterCostumer