import EducationItem from "./EducationItem";

const EducationForms = ({educations, onChange, cancel, save}) => {
    return (
        <div className="educationForms">
            {educations.map((item) => (
                <EducationItem
                    key={item.key}
                    onChange={(e) => onChange(e, item.key)}
                    cancel={(e) => cancel(e, item.key)}
                    save={save}
                />
            ))}
        </div>
    )
}

export default EducationForms;