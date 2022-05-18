import { Link } from "react-router-dom";

export default function HeaderLayout(props) {

    return (
        <>
            <ul>
                <li>
                    <Link to="/">HomePage</Link>
                    <Link to="/user">UserPage</Link>
                </li>
            </ul>
        </>
    )
}