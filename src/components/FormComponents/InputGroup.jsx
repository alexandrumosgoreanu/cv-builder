import '../../styles/InputGroup.css'

const InputGroup = ({id, placeholder, type, label, onChange}) => {
    return (
        <div className="inputGroup">
            <label htmlFor={id}>{label}</label>
            <input
                type = {type}
                id = {id}
                placeholder = {placeholder}
                onChange = {onChange} 
            />
        </div>
    );
}

export default InputGroup;