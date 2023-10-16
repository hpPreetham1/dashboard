import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar';
import Mainpage from './Components/Mainpage/Mainpage';
import "./App.css"

const App = () => {
  return (
    <div className="container">
        <div className="dash">
            <Sidebar/>
        </div>
        <div className="main">
            <Mainpage/>
        </div>

    </div>
  )
}

export default App
