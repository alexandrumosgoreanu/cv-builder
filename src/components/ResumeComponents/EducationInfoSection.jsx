import '../../styles/EducationInfoSection.css'

const EducationInfoSection = ({ degree, university, location, startDate, endDate }) => {
    return (
        <div className="educationInfo">
            <h3>Education</h3>
            <div className="educationInfoSection">
                <div className="left">
                    <div className="dates">
                        <p>
                            {startDate.split('-').reverse().join('/')}
                            {startDate && endDate ? <span> – </span> : null}
                            {endDate.split('-').reverse().join('/')}
                        </p>
                        
                    </div>
                <div>
                    <p>{location}</p>
                </div>
                </div>
                <div className="university">
                    <p><strong>{university}</strong></p>
                    <p className="degree">{degree}</p>
                </div>
            </div>
            
        </div>
    )
}

export default EducationInfoSection;