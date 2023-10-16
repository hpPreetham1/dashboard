import React from 'react'
import { TbReorder } from "react-icons/tb";
import {BiUpArrowAlt} from "react-icons/bi"
import Style from "./Card2.module.css";

const Card2 = () => {
  return (
    <div className={Style.card_container}>
    <div className={Style.icon_container}>
        <div className={Style.earnicon}>
        <TbReorder/>
        </div>

    </div>
    <div className={Style.description}>
            <p>Orders</p>
            <h5>$2.4k</h5>
            <p><span><BiUpArrowAlt/>2.8%</span>this Month</p>
    </div>

</div>
  )
}

export default Card2