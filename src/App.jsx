// import { useState } from 'react'
import { useState } from 'react'
import './styles/App.css'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header.jsx'
import Resume from './components/Resume.jsx'
import EducationInputSection from './components/FormComponents/EducationInputSection.jsx'
import PersonalInputSection from './components/FormComponents/PersonalInputSection.jsx'

const App = () => {
    const [personalDetails, setPersonalDetails] = useState({
                                                              fullName: "Alexandru Mosgoreanu",
                                                              email: "amosgoreanu@gmail.com",
                                                              phoneNumber: "0755011638",
                                                              address: "Bucharest, Romania"
                                                          });
    const [educationDetails, setEducationDetails] = useState([]);

    const handlePersonalDetailsChange = (e) => {
        const id = e.target.id;
        setPersonalDetails({...personalDetails, [id]: e.target.value}); //update the state with the latest input
    };
    
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

    const removeEducationItem = (e, key) => {
        const nextEducation = educationDetails.filter(item => item.key !== key);
        setEducationDetails(nextEducation);
    };

    const toggleItem = (e, key,  attr) => {
        const nextEducation = educationDetails.map((item) => {
            if(item.key === key)
                item[attr] = !item[attr];
            return item;
        });

        setEducationDetails(nextEducation);
    }

    const toggleFormCollapsed = (e, key) => toggleItem(e, key, 'isCollapsed');
    const toggleEducationItemHidden = (e, key) => toggleItem(e, key, 'isHidden');

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
                        toggleFormCollapsed={toggleFormCollapsed}
                        toggleEducationItemHidden={toggleEducationItemHidden}
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
