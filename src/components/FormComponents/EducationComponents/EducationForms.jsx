import EducationItem from "./EducationItem";
import CollapsedForm from "../CollapsedForm";

const EducationForms = ({ educations, onChange, removeEducationItem, toggleFormCollapsed, toggleItemHidden, cancelForm, saveForm }) => {
    return (
        <div className="forms">
            {educations.map((item) => 
                item.isCollapsed ?
                (
                    <CollapsedForm
                        key={item.key}
                        onClick={(e) => toggleFormCollapsed(e, item.key)}
                        title={item.university}
                        removeItem={(e) => removeEducationItem(e, item.key)}
                        isHidden={item.isHidden}
                        toggleItemHidden={(e) => toggleItemHidden(e, item.key)}
                    />
                ) : (
                    <EducationItem
                        education={item}
                        key={item.key}
                        onChange={(e) => onChange(e, item.key)}
                        removeEducationItem={(e) => removeEducationItem(e, item.key)}
                        cancelForm={(e) => cancelForm(e, item.key)}
                        saveForm={(e) => saveForm(e, item.key)}
                    />
                )
            )}
        </div>
    )
};

export default EducationForms;