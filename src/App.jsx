// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import PersonalDetails from './components/PersonalDetails.jsx'
import Resume from './components/Resume.jsx'

function App(){
  const [personalDetails, setPersonalDetails] = useState({
                                                            fullName: "Alexandru Mosgoreanu",
                                                            email: "amosgoreanu@gmail.com",
                                                            phoneNumber: "0755011638",
                                                            address: "Bucharest, Romania"
                                                        });

  function handlePersonalDetailsChange(e) {
      // console.log(personalDetails);
      const id = e.target.id;
      setPersonalDetails({...personalDetails, [id]: e.target.value}); //update the state with the latest input
  }
  
    return (
      <>
          <Header />
          <div className="app">  
              <form className="leftSidebar" action="">
                <PersonalDetails onChange={handlePersonalDetailsChange}/>
              </form>
              <Resume {...personalDetails}/>
          </div>
      </>
        
    )
}

export default App;
