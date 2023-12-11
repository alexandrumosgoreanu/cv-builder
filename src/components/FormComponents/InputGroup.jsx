import '../../styles/FormStyles/InputGroup.css'

const InputGroup = ({id, placeholder, type, label, onChange, optional, value}) => {
    return (
        <div className="inputGroup">
            <label htmlFor={id}>
                <span className="label-text">{label}</span>
                {optional ? <span className="optional-text">optional</span> : null}
            </label>
            <input
                type = {type}
                id = {id}
                placeholder = {placeholder}
                onChange = {onChange}
                value={value} 
            />
        </div>
    );
}

export default InputGroup;