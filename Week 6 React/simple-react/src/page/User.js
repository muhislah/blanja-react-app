import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import style from './User.module.css'
import logo from './logo.svg'


const User = ({user}) => {
  const navigate = useNavigate()
  const [cusActive, setCusActive] = useState(false)
  const [selActive, setSelActive] = useState(false)

  function handleButtonCustomer() {
    console.log('handle customer')
    setCusActive(true);
    setSelActive(false);
    navigate('/users/logincustomer')
  }

  function handleButtonSeller() {
    console.log('handle seller')
    setSelActive(true);
    setCusActive(false);
    navigate('/users/loginseller')
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.logo}>
          <img src={logo} alt="logo"/>
          <h1>Blanja</h1>
        </div>
        <h2>Please {user} with your account</h2>
        <div className={style.selector}>
          <button onClick={() => handleButtonCustomer()} className={style['btn-customer']} active={cusActive.toString()}>Costumer</button>
          <button onClick={() => handleButtonSeller()} className={style['btn-seller']} active={selActive.toString()}>Seller</button>
        </div>
        <div className='wrapper'>
        <Outlet />
        </div>
      </div>
    </>
  )
}

export default User