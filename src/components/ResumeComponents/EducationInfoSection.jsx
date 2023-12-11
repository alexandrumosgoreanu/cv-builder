import '../../styles/EducationInfoSection.css'
import EducationInfoItem from './EducationInfoItem'

const EducationInfoSection = ({ educationDetails }) => {
    return (
        <div className="infoSection">
            <h3>Education</h3>
            {educationDetails.map((item) =>  item.isHidden ? null :
                (       
                <EducationInfoItem
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