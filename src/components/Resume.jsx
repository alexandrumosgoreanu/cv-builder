import '../styles/Resume.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import PersonalInfoSection from './ResumeComponents/PersonalInfoSection';

function Resume({fullName, email, phoneNumber, address}) {
    return (
        <div className="resume">
            <PersonalInfoSection
                fullName={fullName}
                email={email}
                phoneNumber={phoneNumber}
                address={address}
            />
            <div className="educationInfo">

            </div>
        </div>
    )
}

export default Resume;