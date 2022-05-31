import React, { useEffect, useState } from 'react'
import style from './Header.module.css'
import logo from '../../page/logo.svg'
import searchicon from './search.svg'
import filter from './filter.svg'
import trolli from './trolli.svg'
import { Link, useSearchParams } from 'react-router-dom'

const Header = () => {
   const [search, setSearch] = useState('')
   const [searchParam, setSearchParam] = useSearchParams('');


   function handleSearch() {
      setSearchParam({search : search})
   }



  return {
     searchParam,
     render :
     (
      <div className={style.header}>
         <div className={style.container}>
            <div className={style.logo}>
              <img src={logo} alt="logo"/>
              <h2 className={style.title}>Blanja</h2>
            </div>
            <div className={style.search}>
                 <input placeholder='Search' onChange={(i) => setSearch(i.target.value)}/>
                 <img src={searchicon} alt="search" onClick={handleSearch} />
              <div className={style.filter}>
                 <img src={filter} alt="filter" />
              </div>
            </div>
            <div className={style.menu}>
              <img src={trolli} alt="cart" />
              <button className={style.login} ><Link to="/users/logincustomer" />Login</button>
              <button >Signup</button>
            </div>
         </div>
      </div>
    )
  }
}

export default Header