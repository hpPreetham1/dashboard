import React from 'react'
import Style from "./Piechart.module.css";

const Piechart = () => {
  return (
    <div className={Style.piechart}>
      <h4>Customers</h4>
      <p>Customers that buy products</p>
      <div className={Style.chart}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNUFP60WsPoAhDpZflNYvesYvLVeKGVN5o37MZrDMzB8W6P-cS1EY-JViSQHvvGn2x74&usqp=CAU" alt="" />
      </div>
    </div>
  )
}

export default Piechart