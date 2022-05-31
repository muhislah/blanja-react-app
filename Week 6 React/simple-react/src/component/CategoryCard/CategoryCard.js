import React from 'react'
import style from './CategoryCard.module.css'

const CategoryCard = ({name}) => {
  return (
    <div className={style.card} style={{"backgroundColor":"#CC0B04"}}>
       <h1 className={style.card}>{name}</h1>
    </div>
  )
}

export default CategoryCard