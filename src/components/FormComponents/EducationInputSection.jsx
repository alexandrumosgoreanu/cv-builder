import EducationForms from './EducationForms.jsx'
import InputSectionHeader from './InputSectionHeader.jsx'

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
        <div className="educationDetailsInputs container">
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
                <button className="addEducation" type="button" onClick={createEducationItem}>
                    <h4>
                        <i className="fa-solid fa-plus" />
                        Education
                    </h4>
                </button> 
            </div>
        </div>
    )
};

export default EducationInputSection;