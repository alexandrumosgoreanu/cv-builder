import InputGroup from "./InputGroup";
import '../../styles/EducationItem.css'

const EducationItem = ({ education, onChange, cancel, save }) => {
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
            <div className="educationItemButtons">
                <button className="cancel" onClick={cancel}>
                    Cancel
                </button>
                <button className="save" onClick={save}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default EducationItem;