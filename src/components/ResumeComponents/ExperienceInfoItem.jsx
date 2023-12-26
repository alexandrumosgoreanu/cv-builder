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
            <div className="right">
                <div className="company">
                        <p><strong>{company}</strong></p>
                        <p className="position">{position}</p>
                </div>
                <div className="description">
                    <ul>
                        {description.split('\n').map((item, index) =>  //each new line in the textarea translates to a bullet point in the CV
                            index === description.split('\n').length-1 ? (<li className="descriptionSkills" key={index}>{item} </li>)  // make skills bold
                                : (<li key={index}>{item} </li>)   
                        )}
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default ExperienceInfoItem;