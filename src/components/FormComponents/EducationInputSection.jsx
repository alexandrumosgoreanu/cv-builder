import EducationForms from './EducationForms.jsx'

const EducationInputSection = ({ toggleElems, educationDetails, handleEducationDetailsChange, removeEducation, createNewEducation, toggleFormOpen }) => {
    return (
        <div className="educationDetailsInputs container">
            <button className="expandInputs" type="button" onClick={(e) => {
                document.querySelector(".educationDetailsForm").classList.toggle("closed");
                toggleElems(e)}}>
                <h2 className="inputContainerHeader">
                    <i className="fa-graduation-cap fa-solid"/>
                    Education
                </h2>
                <i className="fa-solid fa-chevron-up chevron toggle closed"></i>
            </button>
                            
            <div className="educationDetailsForm closed">
                <EducationForms
                    educations={educationDetails}
                    onChange={handleEducationDetailsChange}
                    cancel={removeEducation}
                    toggleFormOpen={toggleFormOpen}
                />
                <button className="addEducation" type="button" onClick={createNewEducation}>
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