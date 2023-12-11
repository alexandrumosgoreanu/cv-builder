import "../../styles/FormStyles/AddFormItem.css"

const AddFormItem = ({ itemName,  onClick }) => {
    return (
        <button className="addItemButton" type="button" onClick={onClick}>
            <h4>
                <i className="fa-solid fa-plus" />
                {itemName}
            </h4>
        </button> 
    )
}

export default AddFormItem;