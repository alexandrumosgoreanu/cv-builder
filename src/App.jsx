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
    const handlePersonalDetailsChange = (e) => {
        const id = e.target.id;
        setPersonalDetails({...personalDetails, [id]: e.target.value}); //update the state with the latest input
    }
    
    const handleEducationDetailsChange = (e) => {
        const id = e.target.id;
        setEducationDetails({...educationDetails, [id]: e.target.value});
    }

    const toggleSectionClose = (e) => {
        const toggleElems = e.target.parentElement.querySelectorAll(".toggle");
        console.log(toggleElems)
        toggleElems.forEach((elem) => elem.classList.toggle("closed"));
    }

    return (
      <>
          <Header />
          <div className="app">  
              <form className="leftSidebar" action="">
                
                <div className="personalDetailsInputs container">
                    <button className="expandInputs" type="button" onClick={toggleSectionClose}>
                        <h2 className="inputContainerHeader">
                            <i className="fa-user fa-solid"/>
                            Personal details
                        </h2>
                        <i className="fa-solid fa-chevron-up chevron toggle closed"></i>
                    </button>
                    <div className="toggle closed">
                        <PersonalDetails onChange={handlePersonalDetailsChange}/>
                    </div>
                </div>
                
                <div className="educationDetailsInputs container">
                    <button className="expandInputs" type="button" onClick={toggleSectionClose}>
                        <h2 className="inputContainerHeader">
                            <i className="fa-graduation-cap fa-solid"/>
                            Education
                        </h2>
                        <i className="fa-solid fa-chevron-up chevron toggle closed"></i>
                    </button>
                    <button className="add-education" type="button">
                        <h4>
                            <i className="fa-solid fa-plus" />
                            Education
                        </h4>
                    </button>
                    <div className="toggle closed">
                        <EducationDetails onChange={handleEducationDetailsChange}/>
                    </div>
                </div>
                
              </form>
              <Resume {...{personalDetails, educationDetails}} />
          </div>
      </>
        
    )
}

export default App;
