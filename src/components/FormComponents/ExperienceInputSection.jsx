import AddFormItem from "./AddFormItem";
import InputSectionHeader from "./InputSectionHeader";
import ExperienceForms from "./ExperienceForms";

const ExperienceInputSection = ({
    experienceDetails,
    handleExperienceDetailsChange,
    removeExperienceItem,
    createExperienceItem,
    toggleFormCollapsed,
    toggleItemHidden,
    toggleElems,
    cancelForm,
    saveForm
 }) => {
    return (
       <div className="formContainer">
            <InputSectionHeader
                sectionName="Experience"
                isClosed={true}
                toggleElems={toggleElems}
                iconName="fa-solid fa-briefcase"
            />
            <div className="experienceDetailsForm closed">
                <ExperienceForms
                    experiences={experienceDetails}
                    onChange={handleExperienceDetailsChange}
                    removeExperienceItem={removeExperienceItem}
                    toggleFormCollapsed={toggleFormCollapsed}
                    toggleItemHidden={toggleItemHidden}
                    cancelForm={cancelForm}
                    saveForm={saveForm}
                />
                <AddFormItem
                itemName="Experience"
                onClick={createExperienceItem}
                />
            </div>
       </div>
    );
}

export default ExperienceInputSection;