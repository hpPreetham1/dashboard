import React from 'react'
import {FaHandsClapping} from "react-icons/fa6";
import {FcSearch} from "react-icons/fc";

import "./First.css"
const First = () => {
  return (
    <div className="nav">
        <div className="name">
            <h3>Hello, Preetham <FaHandsClapping/> </h3>
        </div>
        <div className="search">
            <div className="icon">
            <FcSearch />
            </div>
         <input type="text" placeholder='Search' />
        </div>
    </div>
  )
}

export default First