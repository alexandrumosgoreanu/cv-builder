import '../styles/Header.css'

function Header() {
    return (
        <div className="header">
            <h1>CV Builder</h1>
            <div className="buttonSection">
                <button>Load Example</button>
                <button>Save PDF</button>
            </div>
        </div>
    )
}

export default Header;