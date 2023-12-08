import '../styles/Resume.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import PersonalInfoSection from './ResumeComponents/PersonalInfoSection';
import EducationInfoSection from './ResumeComponents/EducationInfo';

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
            
            {educationDetails.length > 1 ? <h3>Education</h3> : null}
            {educationDetails.map((item) => (       // iterating over educationDetails array
                <EducationInfoSection
                    key={item.key}
                    degree={item.degree}
                    university={item.university}
                    location={item.location}
                    startDate={item.startDate}
                    endDate={item.endDate}
                />
            ))}           
        </div>
    )
}

export default Resume;