import React from "react";
import { Link } from "react-router-dom";

{/* <HeaderLayout title="dadsa"></HeaderLayout> */ }
export default class HeaderLayout extends React.Component {
    constructor() {
        super();

        this.state = {
            URL: "www.thbs.com",
            name: "test"
        };
    }

    render() {
        return (
            <>
                <div>
                    {this.props.title}
                    {this.state.URL} -- {this.state.name}
                </div>
                <ul>
                    <li>
                        <Link to="/">HomePage </Link>
                        <Link to="/user">UserPage</Link>
                    </li>
                </ul>
            </>
        )
    }

}