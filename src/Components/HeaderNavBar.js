import { Link } from "react-router-dom"
import "../styles/HeaderNavBar.css"

function HeaderNavBar() {
  return (
    <div>
      <header className="header-nav-links">
        <nav className="nav-links">
          <ul>
            <li className="dropdown">
              <div className="dropdown-title">Workers</div>
              <div className="dropdown-content">
                <Link to="/worker-list">Worker list</Link>
                <Link to="/new-worker">New worker</Link>
              </div>
            </li>
            <li className="market-surveys">
              <Link to="/market-surveys">Market Surveys</Link>
            </li>
            <li className="inventory">
              <Link to="inventory">Inventory</Link>
            </li>
            <li className="contact">
              <Link to="contact">Contact</Link>
            </li>
            <li className="main-menu">
              <Link to="/">Main Menu</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default HeaderNavBar
