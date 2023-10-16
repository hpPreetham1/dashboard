import React from 'react'
import { LuBadgeDollarSign } from "react-icons/lu";
import {BiUpArrowAlt} from "react-icons/bi"
import Style from "./Card1.module.css";

const Card1 = () => {
  return (
    <div className={Style.card_container}>
        <div className={Style.icon_container}>
            <div className={Style.earnicon}>
            <LuBadgeDollarSign/>
            </div>

        </div>
        <div className={Style.description}>
                <p>Earning</p>
                <h5>$198k</h5>
                <p><span><BiUpArrowAlt/>37.8%</span>this Month</p>
        </div>

    </div>
  )
}

export default Card1