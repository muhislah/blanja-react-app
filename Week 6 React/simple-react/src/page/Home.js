import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CategoryCard from '../component/CategoryCard/CategoryCard'
import Card from '../component/Card/Card'
import style from './Home.module.css'
import Header from '../component/Header/Header'

const Home = () => {
   const [products, setProducts] = useState([])
   const [categories, setCategories] = useState([])

   const {searchParam, render} = Header()

   useEffect(()=> {
      console.log('useEffect run in main')
      getDataProduct('http://127.0.0.1:5000/products')
      getDataCategories('http://127.0.0.1:5000/categories')
   },[])

   useEffect(()=> {
      console.log('useEffect run in search')
      console.log(searchParam.get('search'))
      getDataProduct(`http://127.0.0.1:5000/products?search=${searchParam.get('search')}`)
   }, [searchParam])

   async function getDataProduct(url) {
      try {
         const data = await axios.get(url)
         setProducts(data.data.data)
      } catch (error) {
         console.log(error)
      }
   }

   async function getDataCategories(url) {
      try {
         const data = await axios.get(url)
         setCategories(data.data.data)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <>
         {render}
         <div className={style.container}>
            <h1 className={style.home}>Category</h1>
            <span>What are you currently looking for</span>
            <div className={style.categoryWrapper}>
               {
                  categories.map((item) => <CategoryCard name={item.name} />)
               }
            </div>
            <h1 className={style.home}>Products</h1>
            <span>You’ve never seen it before!</span>
            <div className={style.productsWrapper}>
               {
                  products.map((item) => <Card name={item.name} brand="Zalora Cloth" price={item.price} />)
               }
            </div>
         </div>
      </>
   )
}

export default Home