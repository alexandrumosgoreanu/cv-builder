import ExperienceInfoItem from "./ExperienceInfoItem"

const ExperienceInfoSection = ({ experienceDetails }) => {
    return (
        <div className="infoSection">
            <h3>Experience</h3>
            {experienceDetails.map((item) =>  item.isHidden ? null :
                (       
                <ExperienceInfoItem
                    key={item.key}
                    company={item.company}
                    position={item.position}
                    location={item.location}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    description={item.description}
                />
                ))}          
        </div>
    )
}

export default ExperienceInfoSection;