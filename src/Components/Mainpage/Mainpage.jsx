import React from 'react'
import First from './Firstsection/First'
import Second from './Secondsection/Second'
import Third from './ThirdSection/Third'

import "./Mainpage.css"

const Mainpage = () => {
  return (
    <>
        <div className="mainpage">
            <div className="first">
                <First/>
            </div>
            <div className="second">
              <Second/>
            </div>
            <div className="third">
              <Third/>
            </div>
        </div>
    </>
  )
}

export default Mainpage