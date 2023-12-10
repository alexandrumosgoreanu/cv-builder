import "../../styles/CollapsedForm.css";

const CollapsedForm = ({ onClick, title, cancel }) => {
    return (
      <div className="collapsedEducationItem">
        <button className="titleButton" onClick={onClick}>
          {title}
        </button>
        <button className="deleteButton" onClick={cancel}>
          <i className="fa fa-trash" aria-hidden="true"/>
        </button>
      </div>
    )
};

export default CollapsedForm;