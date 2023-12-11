// import { useState } from 'react'
import { useState } from 'react'
import './styles/App.css'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header.jsx'
import Resume from './components/Resume.jsx'
import EducationInputSection from './components/FormComponents/EducationComponents/EducationInputSection.jsx'
import PersonalInputSection from './components/FormComponents/PersonalComponents/PersonalInputSection.jsx'
import ExperienceInputSection from './components/FormComponents/ExperienceComponents/ExperienceInputSection.jsx'

const App = () => {
    const [personalDetails, setPersonalDetails] = useState({
                                                              fullName: "Alexandru Mosgoreanu",
                                                              email: "amosgoreanu@gmail.com",
                                                              phoneNumber: "0755011638",
                                                              address: "Bucharest, Romania"
                                                          });
    const [educationDetails, setEducationDetails] = useState([]);
    const [backupEducationDetails, setEducationBackup] = useState([]);
    const [experienceDetails, setExperienceDetails] = useState([]);
    const [backupExperienceDetails, setExperienceBackup] = useState([]);


    const handlePersonalDetailsChange = (e) => {
        const id = e.target.id;
        setPersonalDetails({...personalDetails, [id]: e.target.value}); //update the state with the latest input
    };
    
    const handleEducationDetailsChange = (e, key) => {
        const id = e.target.id;
        const nextEducation = educationDetails.map(item => item.key === key ? {...item, [id]: e.target.value} : item);   // creating a new array where the target education is updated


        setEducationDetails(nextEducation);
    };

    const handleExperienceDetailsChange = (e, key) => {
        const id = e.target.id;
        const nextExperience = experienceDetails.map(item => item.key === key ? {...item, [id]: e.target.value} : item);
        setExperienceDetails(nextExperience);
    };

    const toggleElems = (e) => {
        const toggleElems = e.target.parentElement.querySelectorAll(".toggle");
        toggleElems.forEach((elem) => elem.classList.toggle("closed"));
    };

    const createEducationItem = () => {
        const newItem = {
            key: uuidv4(),
            degree: "",
            university: "",
            location: "",
            startDate: "",
            endDate: "",
            isCollapsed: false,
            isHidden: false
        };

        setEducationDetails([...educationDetails, newItem]);
    };

    const createExperienceItem = () => {
        const newItem = {
            key: uuidv4(),
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            location: "",
            description: ""
        };

        setExperienceDetails([...experienceDetails, newItem]);
    }

    const removeEducationItem = (e, key) => {
        const nextEducation = educationDetails.filter(item => item.key !== key);
        setEducationDetails(nextEducation);
    };

    const removeExperienceItem = (e, key) => {
        const nextExperience = experienceDetails.filter(item => item.key !== key);
        setExperienceDetails(nextExperience);
    };

    const cancelForm = (e, key, target) => {
        switch(target) {
            case "education": {
                    const nextEducation = backupEducationDetails.map((item) => {
                        if(item.key === key)
                            item.isCollapsed = true;
                        return item;
                    });
            
                    setEducationDetails(nextEducation);
                }
                break;
            case "experience" : {
                const nextExperience = backupExperienceDetails.map((item) => {
                    if(item.key === key)
                        item.isCollapsed = true;
                    return item;
                });
        
                setExperienceDetails(nextExperience);
            }
        } 
    }

    const cancelEducationForm = (e, key) => cancelForm(e, key, "education");
    const cancelExperienceForm = (e, key) => cancelForm(e, key, "experience");

    const saveForm = (e, key, target) => {
        
        switch(target) {
            case "education":
                toggleEducationFormCollapsed(e, key); 
                setEducationBackup(educationDetails);
                break;
            case "experience":
                toggleExperienceFormCollapsed(e, key);
                setExperienceBackup(experienceDetails);
        }
    }

    const saveEducationForm = (e, key) => saveForm(e, key, "education");
    const saveExperienceForm = (e, key) => saveForm(e, key, "experience");

    const toggleItem = (e, key,  attr, target) => {
        switch(target) {
            case "education" : {
                    const nextEducation = educationDetails.map((item) => {
                        if(item.key === key)
                            item[attr] = !item[attr];
                        return item;
                    });
            
                    setEducationDetails(nextEducation);
                }
                break;
            case "experience": {
                    const nextExperience = experienceDetails.map((item) => {
                        if(item.key === key)
                            item[attr] = !item[attr];
                        return item;
                    });
    
                    setExperienceDetails(nextExperience);
                }
        }
    }

    const toggleEducationFormCollapsed = (e, key) => toggleItem(e, key, 'isCollapsed', "education");
    const toggleExperienceFormCollapsed = (e, key) => toggleItem(e, key, 'isCollapsed', "experience");
    const toggleEducationItemHidden = (e, key) => toggleItem(e, key, 'isHidden', "education");
    const toggleExperienceItemHidden = (e, key) => toggleItem(e, key, 'isHidden', "experience");

    return (
      <>
            <Header />
            <div className="app">  
                <form className="leftSidebar" action="" onSubmit={(e) => e.preventDefault()} noValidate>
                    
                    <PersonalInputSection
                        toggleElems={toggleElems}
                        handlePersonalDetailsChange={handlePersonalDetailsChange}
                    />
                    
                    <EducationInputSection
                        educationDetails={educationDetails}
                        toggleElems={toggleElems}
                        handleEducationDetailsChange={handleEducationDetailsChange}
                        removeEducationItem={removeEducationItem}
                        createEducationItem={createEducationItem}
                        toggleFormCollapsed={toggleEducationFormCollapsed}
                        toggleItemHidden={toggleEducationItemHidden}
                        cancelForm={cancelEducationForm}
                        saveForm={saveEducationForm}
                    />
                    
                    <ExperienceInputSection
                        experienceDetails={experienceDetails}
                        toggleElems={toggleElems}
                        handleExperienceDetailsChange={handleExperienceDetailsChange}
                        removeExperienceItem={removeExperienceItem}
                        createExperienceItem={createExperienceItem}
                        toggleFormCollapsed={toggleExperienceFormCollapsed} //TODO
                        toggleItemHidden={toggleExperienceItemHidden} //TODO
                        cancelForm={cancelExperienceForm} 
                        saveForm={saveExperienceForm}
                    />
                </form>

                <Resume 
                        personalDetails={personalDetails}
                        educationDetails= {educationDetails}
                />
            </div>
      </>
        
    )
};

export default App;
