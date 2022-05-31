import React from 'react'
import style from './Input.module.css'


const Input = (props) => {
   return (
      <input className={style.input} {...props}/>
   );
}

export default Input