import InputSectionHeader from "../InputSectionHeader";
import PersonalDetails from "./PersonalDetails";

const PersonalInputSection = ({ toggleElems, handlePersonalDetailsChange, sectionOpen, setOpen}) => {
    return (
        <div className="formContainer">
            <InputSectionHeader
                sectionName="Personal details"
                isClosed={sectionOpen === "Personal details"}
                toggleElems={toggleElems}
                iconName="fa-solid fa-user"
                setOpen={setOpen}
            />
            <div className="personalDetailsForm closed">
                <PersonalDetails onChange={handlePersonalDetailsChange}/>
            </div>
        </div>
    )

};

export default PersonalInputSection;