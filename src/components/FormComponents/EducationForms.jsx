import EducationDetails from "./EducationDetails";

const EducationForms = ({educations, onChange}) => {
    return (
        <div className="educationForms">
            {educations.map((item) => (
                <EducationDetails
                    key={item.key}
                    onChange={(e) => onChange(e, item.key)}
                />
            ))}
        </div>
    )
}

export default EducationForms;