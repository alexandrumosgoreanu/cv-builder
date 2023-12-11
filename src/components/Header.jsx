import '../styles/Header.css'

const Header = ({ loadExampleData }) => {
    return (
        <div className="header">
            <h1>CV Builder</h1>
            <div className="buttonSection">
                <button className="headerButtons" onClick={loadExampleData}>Load Example</button>
                <button className="headerButtons">Save PDF</button>
            </div>
        </div>
    )
}

export default Header;