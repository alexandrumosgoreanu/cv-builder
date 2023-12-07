// import { useState } from 'react'
import { useState } from 'react'
import './styles/App.css'
import Header from './components/Header.jsx'
import PersonalDetails from './components/FormComponents/PersonalDetails.jsx'
import Resume from './components/Resume.jsx'
import EducationDetails from './components/FormComponents/EducationDetails.jsx'

const App = () => {
    const [personalDetails, setPersonalDetails] = useState({
                                                              fullName: "Alexandru Mosgoreanu",
                                                              email: "amosgoreanu@gmail.com",
                                                              phoneNumber: "0755011638",
                                                              address: "Bucharest, Romania"
                                                              // degree: "",
                                                              // university: "",
                                                              // location: "",
                                                              // startDate: "",
                                                              // endDate: ""
                                                          });
    const [educationDetails, setEducationDetails] = useState({
                                                                  degree: "",
                                                                  university: "",
                                                                  location: "",
                                                                  startDate: "",
                                                                  endDate: ""
                                                              });
    function handlePersonalDetailsChange(e) {
        const id = e.target.id;
        setPersonalDetails({...personalDetails, [id]: e.target.value}); //update the state with the latest input
    }
    
    function handleEducationDetailsChange(e) {
        const id = e.target.id;
        setEducationDetails({...educationDetails, [id]: e.target.value});
    }

    return (
      <>
          <Header />
          <div className="app">  
              <form className="leftSidebar" action="">
                <h2>Personal details</h2>
                <PersonalDetails onChange={handlePersonalDetailsChange}/>
                
                <h2>Education</h2>
                <EducationDetails onChange={handleEducationDetailsChange}/>
              </form>
              <Resume {...{personalDetails, educationDetails}} />
          </div>
      </>
        
    )
}

export default App;
