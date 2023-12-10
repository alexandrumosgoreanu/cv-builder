import EducationItem from "./EducationItem";
import CollapsedForm from "./CollapsedForm";
import "../../styles/EducationForms.css"

const EducationForms = ({ educations, onChange, removeEducationItem, toggleFormCollapsed, toggleEducationItemHidden }) => {
    return (
        <div className="educationForms">
            {educations.map((item) => 
                item.isCollapsed ?
                (
                    <CollapsedForm
                        key={item.key}
                        onClick={(e) => toggleFormCollapsed(e, item.key)}
                        title={item.university}
                        removeEducationItem={(e) => removeEducationItem(e, item.key)}
                        isHidden={item.isHidden}
                        toggleEducationItemHidden={(e) => toggleEducationItemHidden(e, item.key)}
                    />
                ) : (
                    <EducationItem
                        education={item}
                        key={item.key}
                        onChange={(e) => onChange(e, item.key)}
                        removeEducationItem={(e) => removeEducationItem(e, item.key)}
                        save={(e) => toggleFormCollapsed(e, item.key)}
                    />
                )
            )}
        </div>
    )
};

export default EducationForms;