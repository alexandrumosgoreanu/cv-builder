import '../../styles/InputGroup.css'

const InputGroup = ({id, placeholder, type, label, onChange, optional}) => {
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
            />
        </div>
    );
}

export default InputGroup;