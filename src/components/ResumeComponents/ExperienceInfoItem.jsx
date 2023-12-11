const ExperienceInfoItem = ({ company, position, location, startDate, endDate, description}) => {
    return (
        <div className="itemInfo">
            <div className="left">
                <div className="dates">
                    <p>
                        {startDate.split('-').reverse().join('/')}
                        {startDate && endDate ? <span> – </span> : null}
                        {endDate.split('-').reverse().join('/')}
                    </p>
                    <div>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
            <div className="company">
                    <p><strong>{company}</strong></p>
                    <p className="position">{position}</p>
            </div>
            <div>
                {description}
            </div>
        </div>
    )
}

export default ExperienceInfoItem;