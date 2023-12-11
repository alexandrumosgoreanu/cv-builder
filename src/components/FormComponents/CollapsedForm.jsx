import "../../styles/CollapsedForm.css";

const CollapsedForm = ({ onClick, title, removeItem, isHidden, toggleItemHidden }) => {
    return (
      <div className="collapsedItem">
        <button className="titleButton" onClick={onClick}>
          {title}
        </button>
        <button className="eye" onClick={toggleItemHidden}>
          <i className={`fa-regular ${isHidden ? "fa-eye-slash" : "fa-eye"}`} aria-hidden="true"/>
        </button>
        <button className="deleteButton" onClick={removeItem}>
          <i className="fa fa-trash" aria-hidden="true"/>
        </button>
      </div>
    )
};

export default CollapsedForm;