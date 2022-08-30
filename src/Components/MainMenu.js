import { Link } from "react-router-dom"

function MainMenu() {

    return (
        <li>
            <ul>
                <Link
                    to="worker-list">Worker List
                </Link>
            </ul>
            
            <ul>Market Surveys</ul>
            <ul>Inventory</ul>
        </li>


    )
}

export default MainMenu