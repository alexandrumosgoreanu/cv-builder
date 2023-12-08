import '../../styles/EducationInfo.css'

const EducationInfo = ({ degree, university, location, startDate, endDate }) => {
    return (
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
    )
}

export default EducationInfo;