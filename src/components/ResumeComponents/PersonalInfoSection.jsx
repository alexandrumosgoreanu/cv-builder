import '../../styles/PersonalInfoSection.css'

const PersonalInfoSection = ({ fullName, email, phoneNumber, address}) => {

    return(
        <div className="personalInfo">
            <h2 className="resumeName">{fullName}</h2>
            <div className="contactInfo">
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
        </div>
    )              
}

export default PersonalInfoSection;