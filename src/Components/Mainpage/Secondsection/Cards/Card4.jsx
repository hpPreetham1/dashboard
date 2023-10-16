import React from 'react'
import { BsHandbag } from "react-icons/bs";
import {BiUpArrowAlt} from "react-icons/bi"
import Style from "./Card4.module.css";

const Card4 = () => {
  return (
    <div className={Style.card_container}>
    <div className={Style.icon_container}>
        <div className={Style.earnicon}>
        <BsHandbag/>
        </div>

    </div>
    <div className={Style.description}>
            <p>Total Sales</p>
            <h5>$89k</h5>
            <p><span><BiUpArrowAlt/>11%</span>this Week</p>
    </div>

</div>
  )
}

export default Card4