import CollapsedForm from "../CollapsedForm";
import ExperienceItem from "./ExperienceItem";

const ExperienceForms = ({ experiences, onChange, removeExperienceItem, toggleFormCollapsed, toggleItemHidden, cancelForm, saveForm }) => {
    return (
        <div className="forms">
            {experiences.map(item => 
                item.isCollapsed ?
                (
                    <CollapsedForm
                        key={item.key}
                        onClick={(e) => toggleFormCollapsed(e, item.key)}
                        title={item.company}
                        isHidden={item.isHidden}
                        removeItem={(e) => removeExperienceItem(e, item.key)}
                        toggleItemHidden={(e) => toggleItemHidden(e, item.key)}
                    />
                ) : (
                    <ExperienceItem
                        experience={item}
                        key={item.key}
                        onChange={(e) => onChange(e, item.key)}
                        removeExperienceItem={(e) => removeExperienceItem(e, item.key)}
                        cancelForm={(e) => cancelForm(e, item.key)}
                        saveForm={(e) => saveForm(e, item.key)}
                    />
                )
            )}
        </div>
    )
}

export default ExperienceForms;
