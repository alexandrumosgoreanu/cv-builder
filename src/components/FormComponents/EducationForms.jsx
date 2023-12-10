import EducationItem from "./EducationItem";
import CollapsedForm from "./CollapsedForm";
import "../../styles/EducationForms.css"

const EducationForms = ({ educations, onChange, cancel, toggleFormOpen }) => {
    return (
        <div className="educationForms">
            {educations.map((item) => 
                item.isCollapsed ?
                (
                    <CollapsedForm
                        key={item.key}
                        onClick={(e) => toggleFormOpen(e, item.key)}
                        title={item.university}
                        cancel={(e) => cancel(e, item.key)}
                    />
                ) : (
                    <EducationItem
                        education={item}
                        key={item.key}
                        onChange={(e) => onChange(e, item.key)}
                        cancel={(e) => cancel(e, item.key)}
                        save={(e) => toggleFormOpen(e, item.key)}
                    />
                )
            )}
        </div>
    )
};

export default EducationForms;