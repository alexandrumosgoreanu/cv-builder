import InputGroup from "./InputGroup";
import '../../styles/EducationItem.css'

const EducationItem = ({ onChange, cancel, save }) => {
    return(
        <div className="educationItem">
             <InputGroup
                type = "text"
                id = "degree"
                label = "Degree"
                placeholder= "Enter Degree/Field of Study"
                onChange={onChange}
            />
            <InputGroup
                type = "text"
                id = "university"
                label = "University"
                placeholder= "Enter school/university"
                onChange={onChange}
            />
            <InputGroup
                type = "text"
                id = "location"
                label = "Location"
                placeholder= "City, Country"
                onChange={onChange}
                optional
            />
            <InputGroup
                type = "month"
                id = "startDate"
                label = "Start Date"
                placeholder= "Month, year"
                onChange={onChange}
            />
            <InputGroup
                type = "month"
                id = "endDate"
                label = "End Date"
                placeholder= "mm/yyyy"
                onChange={onChange}
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