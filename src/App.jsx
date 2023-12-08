// import { useState } from 'react'
import { useState } from 'react'
import './styles/App.css'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header.jsx'
import PersonalDetails from './components/FormComponents/PersonalDetails.jsx'
import Resume from './components/Resume.jsx'
import EducationForms from './components/FormComponents/EducationForms.jsx'

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
    const [educationDetails, setEducationDetails] = useState([]);

    const handlePersonalDetailsChange = (e) => {
        const id = e.target.id;
        setPersonalDetails({...personalDetails, [id]: e.target.value}); //update the state with the latest input
    }
    
    const handleEducationDetailsChange = (e, key) => {
        const id = e.target.id;
        const nextEducation = educationDetails.map(item => {
            if(item.key === key) {
                return {...item, [id]: e.target.value};   // creating a new array where the target education is updated
            }
            else
                return item;
        });

        setEducationDetails(nextEducation);
    }

    const toggleElems = (e) => {
        const toggleElems = e.target.parentElement.querySelectorAll(".toggle");
        //console.log(e.target.classList)
        toggleElems.forEach((elem) => elem.classList.toggle("closed"));
    }

    const createNewEducation = () => {
        const newItem = {
            key: uuidv4(),
            degree: "",
            university: "",
            location: "",
            startDate: "",
            endDate: ""
        }
        setEducationDetails([...educationDetails, newItem]);
    }

    const removeEducation = (e, key) => {
        const nextEducation = educationDetails.filter(item => item.key !== key);
        setEducationDetails(nextEducation);
    }


    return (
      <>
            <Header />
            <div className="app">  
                <form className="leftSidebar" action="" onSubmit={(e) => e.preventDefault()} noValidate>
                    
                    <div className="personalDetailsInputs container">
                        <button className="expandInputs" type="button" onClick={(e) => {
                            document.querySelector(".personalDetailsForm").classList.toggle("closed");
                            toggleElems(e);
                            }}>
                            <h2 className="inputContainerHeader">
                                <i className="fa-user fa-solid"/>
                                Personal details
                            </h2>
                            <i className="fa-solid fa-chevron-up chevron toggle closed"></i>
                        </button>

                        <div className="personalDetailsForm closed">
                            <PersonalDetails onChange={handlePersonalDetailsChange}/>
                        </div>
                    </div>
                    
                    <div className="educationDetailsInputs container">
                        <button className="expandInputs" type="button" onClick={(e) => {
                            document.querySelector(".educationDetailsForm").classList.toggle("closed");
                            toggleElems(e)}}>
                            <h2 className="inputContainerHeader">
                                <i className="fa-graduation-cap fa-solid"/>
                                Education
                            </h2>
                            <i className="fa-solid fa-chevron-up chevron toggle closed"></i>
                        </button>
                        
                        <div className="educationDetailsForm closed">
                            <EducationForms
                                educations={educationDetails}
                                onChange={handleEducationDetailsChange}
                                cancel={removeEducation}
                            />
                            <button className="addEducation" type="button" onClick={createNewEducation}>
                                <h4>
                                    <i className="fa-solid fa-plus" />
                                    Education
                                </h4>
                            </button> 
                        </div>
                    </div>
                </form>

                <Resume 
                        personalDetails={personalDetails}
                        educationDetails= {educationDetails}
                />
            </div>
      </>
        
    )
}

export default App;
