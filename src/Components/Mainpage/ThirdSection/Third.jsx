import React from 'react'
import Style from "./Third.module.css"
import Barchart from './Barchart'
import Piechart from './Piechart'

const Third = () => {
  return (
  
        <div className={Style.charts}>
            <div className={Style.bar_chart}>
                <Barchart/>
            </div>
            <div className={Style.pie_chart}>
                <Piechart/>
            </div>
        </div>
   
  )
}

export default Third
