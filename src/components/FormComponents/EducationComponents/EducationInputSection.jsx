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
    saveForm }) => {

    return (
        <div className="formContainer">
            <InputSectionHeader
                sectionName="Education"
                isClosed={true}
                toggleElems={toggleElems}
                iconName="fa-graduation-cap fa-solid"
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