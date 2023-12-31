const EducationInfoItem = ({ degree, university, location, startDate, endDate }) => {
    return (
            <div className="itemInfo">
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
                <div className="right">
                    <div className="university">
                        <p><strong>{university}</strong></p>
                        <p className="degree">{degree}</p>
                    </div>
                </div>
            </div>
    )
}

export default EducationInfoItem;