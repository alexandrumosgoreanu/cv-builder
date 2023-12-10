import "../../styles/CollapsedForm.css";

const CollapsedForm = ({ onClick, title, removeEducationItem, isHidden, toggleItemHidden }) => {
    return (
      <div className="collapsedEducationItem">
        <button className="titleButton" onClick={onClick}>
          {title}
        </button>
        <button className="eye" onClick={toggleItemHidden}>
          <i className={`fa-regular ${isHidden ? "fa-eye-slash" : "fa-eye"}`} aria-hidden="true"/>
        </button>
        <button className="deleteButton" onClick={removeEducationItem}>
          <i className="fa fa-trash" aria-hidden="true"/>
        </button>
      </div>
    )
};

export default CollapsedForm;