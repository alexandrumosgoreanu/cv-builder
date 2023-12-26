import '../../styles/ResumeStyles/PersonalInfoSection.css'

const PersonalInfoSection = ({ fullName, email, phoneNumber, address, linkedin, github }) => {

    return(
        <div className="personalInfo">
            <h2 className="resumeName">{fullName}</h2>
            <div className="contactInfo">
                <div className="contactInfoLine">
                    <div>
                        {email ? <i className="fa-solid fa-envelope"/> : null}
                        {email}
                    </div>
                    <div>
                        {phoneNumber ? <i className="fa-solid fa-phone"/> : null}
                        {phoneNumber}
                    </div>
                    <div>
                        {address ? <i className="fa-solid fa-location-dot"/> : null}
                        {address}
                    </div>
                </div>
                <div className="contactInfoLine">
                    <a href={linkedin} target="_blank" rel="noreferrer">
                        {linkedin ? <i className="fa-solid fa-brands fa-linkedin-in"/> : null}
                        {linkedin ? linkedin.split('/').pop() : null}
                    </a>
                    <a href={github} target="_blank" rel="noreferrer">
                        {github ? <i className="fa-solid fa-brands fa-github"/> : null}
                        {github ? github.split('/').pop(): null}
                    </a>
                </div>
            </div> 
        </div>
    )              
}

export default PersonalInfoSection;