import InputGroup from "./InputGroup";

const EducationDetails = ({ onChange }) => {
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
        </div>
    )
}

export default EducationDetails;