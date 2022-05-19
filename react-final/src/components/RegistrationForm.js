import React from "react"

export default class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            isError: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    regExp = RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    )

    formValid = ({ isError, ...rest }) => {
        let isValid = false;
        Object.values(isError).forEach(val => {
            if (val.length > 0) {
                isValid = false
            } else {
                isValid = true
            }
        });
        Object.values(rest).forEach(val => {
            if (val === null) {
                isValid = false
            } else {
                isValid = true
            }
        });
        return isValid;
    };

    onSubmit = e => {
        if (this.formValid(this.state)) {
            console.log(this.state)
        } else {
            console.log("Form is invalid!");
        }
    };

    formValChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            case "email":
                isError.email = this.regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "password":
                isError.password =
                    value.length < 6 ? "Atleast 6 characaters required" : "";
                break;
            default:
                break;
        }

        console.log(isError, value)
        this.setState({
            isError,
            [name]: value
        });
    }

    render() {
        const { isError } = this.state;

        console.log(isError.name)
        return (
            <>
                <h3>React Form Validation Tutorial</h3>
                <form onSubmit={this.onSubmit} noValidate>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name"
                            onChange={this.formValChange} />

                        {isError.name.length > 0 && (
                            <span>{isError.name}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email"
                            onChange={this.formValChange} />

                        {isError?.email.length > 0 && (
                            <span >{isError?.email}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" name="password"
                            onChange={this.formValChange} />

                        {isError?.email.length > 0 && (
                            <span >{isError?.email}</span>
                        )}
                    </div>
                    <button type="submit" className="btn btn-block btn-danger">Create User</button>
                </form>
            </>
        );

    }

}