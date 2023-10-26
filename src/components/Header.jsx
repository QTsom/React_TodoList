import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>
                <Link to="/Home">logo</Link>
            </h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/Menu1">menu 1</Link>
                    </li>
                    <li>
                        <Link to="/Menu2">menu 2</Link>
                    </li>
                    <li>
                        <Link to="/Menu3">menu 3</Link>
                    </li>
                </ul>
            </nav>

            <div></div>
        </header>
    )
}

export default Header;