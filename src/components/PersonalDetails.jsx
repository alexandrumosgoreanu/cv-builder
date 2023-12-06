import InputGroup from "./InputGroup";

function PersonalDetails() {
    return (
        <div className = "personalDetails">
            <InputGroup
                type = "text"
                id = "fullName"
                label = "Full name"
                placeholder = "Enter your first and last name"
            />
            <InputGroup
                type = "email"
                id = "email"
                label = "Email"
                placeholder = "Enter your email"
            />
            <InputGroup
                type = "tel"
                id = "phoneNumber"
                label = "Phone Number"
                placeholder = "Enter your phone number"
            />
            <InputGroup
                type = "text"
                id = "address"
                label = "Address"
                placeholder = "City, Country"
            />
        </div>
    )
}

export default PersonalDetails;