import InputSectionHeader from "./InputSectionHeader";
import PersonalDetails from "./PersonalDetails";

const PersonalInputSection = ({toggleElems, handlePersonalDetailsChange}) => {
    return (
        <div className="personalDetailsInputs container">
            <InputSectionHeader
                sectionName="Personal details"
                isClosed={true}
                toggleElems={toggleElems}
                iconName="fa-solid fa-user"
            />
            <div className="personalDetailsForm closed">
                <PersonalDetails onChange={handlePersonalDetailsChange}/>
            </div>
        </div>
    )

};

export default PersonalInputSection;