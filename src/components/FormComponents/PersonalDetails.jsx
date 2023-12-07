import InputGroup from "./InputGroup";

const PersonalDetails = ({ onChange }) => {
    return (
        <div className = "personalDetails">
            <InputGroup
                type = "text"
                id = "fullName"
                label = "Full name"
                placeholder = "Enter your first and last name"
                onChange = {onChange}
            />
            <InputGroup
                type = "email"
                id = "email"
                label = "Email"
                placeholder = "Enter your email"
                onChange = {onChange}
            />
            <InputGroup
                type = "tel"
                id = "phoneNumber"
                label = "Phone Number"
                placeholder = "Enter your phone number"
                onChange = {onChange}
            />
            <InputGroup
                type = "text"
                id = "address"
                label = "Address"
                placeholder = "City, Country"
                onChange = {onChange}
            />
        </div>
    )
}

export default PersonalDetails;