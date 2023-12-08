import '../styles/Resume.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import PersonalInfoSection from './ResumeComponents/PersonalInfoSection';
import EducationInfoSection from './ResumeComponents/EducationInfoSection';

// personalDetails = object
// educationDetails = array of objects

const Resume = ({personalDetails, educationDetails}) => {
    const {fullName, email, phoneNumber, address} = personalDetails;

    return (
        <div className="resume">
            <PersonalInfoSection
                fullName={fullName}
                email={email}
                phoneNumber={phoneNumber}
                address={address}
            />
            
            {educationDetails.length >= 1 ? 
                    <EducationInfoSection
                        educationDetails={educationDetails}
                    /> 
            : null}        
        </div>
    )
}

export default Resume;