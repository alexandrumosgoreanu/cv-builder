import '../../styles/FormStyles/InputSectionHeader.css'

const InputSectionHeader = ({ sectionName, isClosed, toggleElems, iconName, setOpen }) => {
    return (
        <button className="expandInputs" type="button" onClick={(e) => {
            let formClassName = "";
            let closingFormName = [".personalDetailsForm", ".educationDetailsForm", ".experienceDetailsForm"];
            switch(sectionName) {
                case "Personal details" : 
                    formClassName = ".personalDetailsForm";
                    closingFormName = [".educationDetailsForm", ".experienceDetailsForm"];
                    break;
                case "Education" : 
                    formClassName = ".educationDetailsForm";
                    closingFormName = [".personalDetailsForm", ".experienceDetailsForm"];
                    break;
                case "Experience" : 
                    formClassName = ".experienceDetailsForm";
                    closingFormName = [".personalDetailsForm", ".educationDetailsForm"];
            }   

            document.querySelector(formClassName).classList.toggle("closed");
            closingFormName.forEach(item => document.querySelector(item).classList.add("closed"));
            toggleElems(e);
            setOpen(sectionName);
            }}>
            <h2 className="inputContainerHeader">
                <i className={`${iconName}`}/>
                {sectionName}
            </h2>
            <i className={`fa-solid fa-chevron-up chevron toggle ${!isClosed && "closed"}`}></i>
        </button>
    );
};

export default InputSectionHeader;