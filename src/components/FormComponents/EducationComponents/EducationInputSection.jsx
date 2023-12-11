import AddFormItem from '../AddFormItem.jsx';
import EducationForms from './EducationForms.jsx'
import InputSectionHeader from '../InputSectionHeader.jsx'

const EducationInputSection = ({ 
    toggleElems, 
    educationDetails, 
    handleEducationDetailsChange, 
    removeEducationItem, 
    createEducationItem, 
    toggleFormCollapsed,
    toggleItemHidden,
    cancelForm,
    saveForm,
    sectionOpen,
    setOpen,
 }) => {

    return (
        <div className="formContainer">
            <InputSectionHeader
                sectionName="Education"
                isClosed={sectionOpen === "Education"}
                toggleElems={toggleElems}
                iconName="fa-graduation-cap fa-solid"
                setOpen={setOpen}
            />          
            <div className="educationDetailsForm closed">
                <EducationForms
                    educations={educationDetails}
                    onChange={handleEducationDetailsChange}
                    removeEducationItem={removeEducationItem}
                    toggleFormCollapsed={toggleFormCollapsed}
                    toggleItemHidden={toggleItemHidden}
                    cancelForm={cancelForm}
                    saveForm={saveForm}
                />
                <AddFormItem
                    itemName="Education"
                    onClick={createEducationItem}
                />
            </div>
        </div>
    )
};

export default EducationInputSection;