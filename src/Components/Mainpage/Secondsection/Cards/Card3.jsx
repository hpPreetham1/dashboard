import React from 'react'
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import {BiUpArrowAlt} from "react-icons/bi"
import Style from "./Card3.module.css";

const Card3 = () => {
  return (
    <div className={Style.card_container}>
    <div className={Style.icon_container}>
        <div className={Style.earnicon}>
            <MdOutlineAccountBalanceWallet/>
            </div>

        </div>
        <div className={Style.description}>
                <p>Balance</p>
                <h5>$2.4k</h5>
                <p><span><BiUpArrowAlt/>2%</span>this Month</p>
        </div>

    </div>
  )
}

export default Card3