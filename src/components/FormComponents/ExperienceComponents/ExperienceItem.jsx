import InputGroup from "../InputGroup"

const ExperienceItem = ({ experience, onChange, removeExperienceItem, cancelForm, saveForm }) => {
    return (
        <div className="experienceItem">
            <InputGroup
                type="text"
                id="company"
                label="Company"
                placeholder="Enter company name"
                onChange={onChange}
                value={experience.company || null}
            />
            <InputGroup
                type="text"
                id="position"
                label="Position"
                placeholder="Enter position"
                onChange={onChange}
                value={experience.position || null}
            />
            <InputGroup
                type="text"
                id="location"
                label="Location"
                placeholder="Enter location"
                onChange={onChange}
                value={experience.location || null}
                optional
            />
            <InputGroup
                type="month"
                id="startDate"
                label="Start Date"
                placeholder="Month, year"
                onChange={onChange}
                value={experience.startDate || null}
            />
            <InputGroup
                type="month"
                id="endDate"
                label="End Date"
                placeholder="Month, year"
                onChange={onChange}
                value={experience.endDate || null}
            />
            {console.log(experience.description)}
            <textarea
                id="description"
                label="Description"
                placeholder="Enter description"
                onChange={onChange}
                value={experience.description || null}
            />

            <div className="itemButtons">
                <button className="delete" onClick={removeExperienceItem}>
                    Delete
                </button>
                <button className="cancel" onClick={cancelForm}>
                    Cancel
                </button>
                <button className="save" onClick={saveForm}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default ExperienceItem;