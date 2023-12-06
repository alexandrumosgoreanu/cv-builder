function EducationInfoSection({degree, university, location, startDate, endDate}) {
    return (
        <div className="educationInfo">
            <h4 className="education">Education</h4>
            <p>{degree}</p>
            <p>{university}</p>
            <p>{location}</p>
            <p>
                {startDate}
                {startDate && endDate ? <span> – </span> : null}
                {endDate}
            </p>
        </div>
    )
}

export default EducationInfoSection;