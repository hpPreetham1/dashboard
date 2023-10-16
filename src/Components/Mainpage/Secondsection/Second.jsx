import React from 'react'
import Card1 from './Cards/Card1'
import Card2 from './Cards/Card2'
import Card3 from './Cards/Card3'
import Card4 from './Cards/Card4'
import "../Secondsection/Second.css"

const Second = () => {
  return (
    <div className="cards">
        <div className="card">
            <Card1/>
        </div>
        <div className="card">
            <Card2/>
        </div>
        <div className="card">
            <Card3/>
        </div>
        <div className="card">
            <Card4/>
        </div>
    </div>
  )
}

export default Second