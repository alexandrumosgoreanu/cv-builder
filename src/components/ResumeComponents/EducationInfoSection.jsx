import '../../styles/EducationInfoSection.css'
import EducationInfo from './EducationInfo'

const EducationInfoSection = ({ educationDetails }) => {
    return (
        <div className="educationInfoSection">
            <h3>Education</h3>
            {console.log(educationDetails)}
            {educationDetails.map((item) => (       // iterating over educationDetails array
                    <EducationInfo
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

export default EducationInfoSection;