import InputGroup from "../InputGroup";

const EducationItem = ({ education, onChange, removeEducationItem, cancelForm, saveForm }) => {
    return(
        <div className="educationItem">
             <InputGroup
                type="text"
                id="degree"
                label="Degree"
                placeholder="Enter Degree/Field of Study"
                onChange={onChange}
                value={education.degree ? education.degree : null}
            />
            <InputGroup
                type = "text"
                id = "university"
                label = "University"
                placeholder= "Enter school/university"
                onChange={onChange}
                value={education.university ? education.university : null}
            />
            <InputGroup
                type = "text"
                id = "location"
                label = "Location"
                placeholder= "City, Country"
                onChange={onChange}
                value={education.location ? education.location : null}
                optional
            />
            <InputGroup
                type = "month"
                id = "startDate"
                label = "Start Date"
                placeholder= "Month, year"
                onChange={onChange}
                value={education.startDate ? education.startDate : null}
            />
            <InputGroup
                type = "month"
                id = "endDate"
                label = "End Date"
                placeholder= "mm/yyyy"
                onChange={onChange}
                value={education.endDate ? education.endDate : null}
            />
            <div className="itemButtons">
                <button className="delete" onClick={removeEducationItem}>
                    Delete
                </button>
                <button className="cancel" onClick={cancelForm}>
                    Cancel
                </button>
                <button className="save" onClick={saveForm}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default EducationItem;