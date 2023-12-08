import PersonalDetails from "./PersonalDetails";

const PersonalInputSection = ({toggleElems, handlePersonalDetailsChange}) => {
    return (
        <div className="personalDetailsInputs container">
            <button className="expandInputs" type="button" onClick={(e) => {
                            document.querySelector(".personalDetailsForm").classList.toggle("closed");
                            toggleElems(e);
                            }}>
                            <h2 className="inputContainerHeader">
                                <i className="fa-user fa-solid"/>
                                Personal details
                            </h2>
                            <i className="fa-solid fa-chevron-up chevron toggle closed"></i>
                        </button>

                        <div className="personalDetailsForm closed">
                            <PersonalDetails onChange={handlePersonalDetailsChange}/>
                        </div>
                    </div>
    )

};

export default PersonalInputSection;