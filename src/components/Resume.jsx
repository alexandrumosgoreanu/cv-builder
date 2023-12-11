import '../styles/ResumeStyles/Resume.css'
import '../styles/ResumeStyles/ItemInfo.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import PersonalInfoSection from './ResumeComponents/PersonalInfoSection';
import EducationInfoSection from './ResumeComponents/EducationInfoSection';
import ExperienceInfoSection from './ResumeComponents/ExperienceInfoSection';

// personalDetails = object
// educationDetails = array of objects

const Resume = ({ personalDetails, educationDetails, experienceDetails }) => {
    const {fullName, email, phoneNumber, address} = personalDetails;

    return (
        <div className="resume">
            <PersonalInfoSection
                fullName={fullName}
                email={email}
                phoneNumber={phoneNumber}
                address={address}
            />
            
            {educationDetails.length >= 1 && 
                <EducationInfoSection
                    educationDetails={educationDetails}
                /> 
            }    

            {experienceDetails.length >= 1 &&
                <ExperienceInfoSection
                    experienceDetails={experienceDetails}
                />
            }    
        </div>
    )
}

export default Resume;