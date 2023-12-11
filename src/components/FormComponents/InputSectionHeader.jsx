import '../../styles/InputSectionHeader.css'

const InputSectionHeader = ( {sectionName, isClosed, toggleElems, iconName} ) => {
    return (
        <button className="expandInputs" type="button" onClick={(e) => {
            let formClassName="";
            switch(sectionName) {
                case "Personal details" : 
                    formClassName=".personalDetailsForm";
                    break;
                case "Education" : 
                    formClassName = ".educationDetailsForm";
                    break;
                case "Experience" : formClassName = ".experienceDetailsForm";
            }   

            document.querySelector(formClassName).classList.toggle("closed");
            toggleElems(e)}}>
            <h2 className="inputContainerHeader">
                <i className={`${iconName}`}/>
                {sectionName}
            </h2>
            <i className={`fa-solid fa-chevron-up chevron toggle ${isClosed && "closed"}`}></i>
        </button>
    );
};

export default InputSectionHeader;