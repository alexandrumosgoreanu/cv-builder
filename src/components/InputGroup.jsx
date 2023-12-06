import '../styles/InputGroup.css'

function InputGroup({id, placeholder, type, label}) {
    return (
        <div className="inputGroup">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} />
        </div>
    );
}

export default InputGroup;