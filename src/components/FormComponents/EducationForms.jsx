import EducationItem from "./EducationItem";
import CollapsedForm from "./CollapsedForm";

const EducationForms = ({ educations, onChange, cancel, save, onOpen}) => {
    return (
        <div className="educationForms">
            {educations.map((item) => 
                item.isCollapsed ?
                (
                    <CollapsedForm
                        onClick={onOpen}
                        key={item.id}
                        title={item.university}
                    />
                ) : (
                    <EducationItem
                        key={item.key}
                        onChange={(e) => onChange(e, item.key)}
                        cancel={(e) => cancel(e, item.key)}
                        save={(e) => save(e, item.key)}
                    />
                )
            )}
        </div>
    )
}

export default EducationForms;