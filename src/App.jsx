// import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import PersonalDetails from './components/PersonalDetails.jsx'
import Resume from './components/Resume.jsx'

function App(){

  
    return (
        <div className="app"> 
          <Header />
          <form action="">
            <PersonalDetails />
          </form>
          <Resume />
        </div>
    )
}

export default App;
