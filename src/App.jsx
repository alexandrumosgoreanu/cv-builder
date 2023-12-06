// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import PersonalDetails from './components/FormComponents/PersonalDetails.jsx'
import Resume from './components/Resume.jsx'
import EducationDetails from './components/FormComponents/EducationDetails.jsx'
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
                <h2>Personal details</h2>
                <PersonalDetails onChange={handlePersonalDetailsChange}/>
                
                <h2>Education</h2>
                <EducationDetails />
              </form>
              <Resume {...personalDetails}/>
          </div>
      </>
        
    )
}

export default App;
