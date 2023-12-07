import '../../styles/EducationInfoSection.css'

const EducationInfoSection = ({ degree, university, location, startDate, endDate }) => {
    return (
        <div className="educationInfo">
            <h3>Education</h3>
            <div className="educationInfoSection">
                <div className="dates">
                    <p>
                        {startDate}
                        {startDate && endDate ? <span> – </span> : null}
                        {endDate}
                    </p>
                    <p>{location}</p>
                </div>
                <div className="university">
                    <p><strong>{university}</strong></p>
                    <p>{degree}</p>
                </div>
            </div>
            
        </div>
    )
}

export default EducationInfoSection;