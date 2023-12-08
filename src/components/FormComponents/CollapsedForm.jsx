import "../../styles/CollapsedForm.css";

const CollapsedForm = ({ onClick, title }) => {
    return (
      <button className="collapsedForm" onClick={onClick}>
        {title}
      </button>
    )
};

export default CollapsedForm;