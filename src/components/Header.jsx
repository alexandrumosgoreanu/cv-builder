import '../styles/Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>CV Builder</h1>
            <div className="buttonSection">
                <button className="headerButtons">Load Example</button>
                <button className="headerButtons">Save PDF</button>
            </div>
        </div>
    )
}

export default Header;