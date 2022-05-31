import React from 'react'
import style from './Card.module.css'
import img from './gambar.jpg'
import star from '../star.svg'

const Card = ({name, price, brand}) => {
  return (
    <div className={style.card}>
       <img src={img} alt=""/>
       <div className={style.detail}>
         <h4>{name}</h4>
         <p className={style.price}>Rp. {price}</p>
         <span>{brand}</span>
         <div className={style.rating}>
            <img src={star} alt="star"/>
            <img src={star} alt="star"/>
            <img src={star} alt="star"/>
            <img src={star} alt="star"/>
            <img src={star} alt="star"/>
         </div>
       </div>
    </div>
  )
}

export default Card