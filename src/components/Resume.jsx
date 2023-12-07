import '../styles/Resume.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import PersonalInfoSection from './ResumeComponents/PersonalInfoSection';
import EducationInfoSection from './ResumeComponents/EducationInfoSection';

const Resume = ({personalDetails, educationDetails}) => {
    const {fullName, email, phoneNumber, address} = personalDetails;
    const {degree, university, location, startDate, endDate} = educationDetails;

    return (
        <div className="resume">
            <PersonalInfoSection
                fullName={fullName}
                email={email}
                phoneNumber={phoneNumber}
                address={address}
            />
            <EducationInfoSection
                degree={degree}
                university={university}
                location={location}
                startDate={startDate}
                endDate={endDate}
            />          
        </div>
    )
}

export default Resume;