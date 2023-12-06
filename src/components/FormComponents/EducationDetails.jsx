import InputGroup from "./InputGroup";

function EducationDetails({ onChange }) {
    return(
        <div className="educationDetails">
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
                id = "Location"
                label = "Location"
                placeholder= "City, Country"
                onChange={onChange}
            />
            <InputGroup
                type = "text"
                id = "startDate"
                label = "Start Date"
                placeholder= "Month, year"
                onChange={onChange}
            />
            <InputGroup
                type = "text"
                id = "endDate"
                label = "End Date"
                placeholder= "Month, year"
                onChange={onChange}
            />
        </div>
    )
}

export default EducationDetails;