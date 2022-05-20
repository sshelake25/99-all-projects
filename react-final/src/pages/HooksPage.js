

import React, { useState } from 'react';

export default class HooksPage extends React.Component {
    constructor(props) {
        super(props);
        //initilization of state
        //setState()
        this.state = {
            users: [],
            error: null,
            isLoaded: false
        }
    }

    // sending api call //life cycle hook
    componentDidMount() {

        fetch('https://reqres.in/api/users?page=1')
            .then(res => res.json())
            .then(
                (success) => {
                    //success.data --> array of object of user
                    this.setState({
                        isLoaded: true,
                        users: success.data
                    });
                },
                (error) => {
                    this.setState({
                        error: error

                    });
                }
            )

    }


    render() {
        const { users, isLoaded, error } = this.state;

        return (
            <ul>
                {users.map(item => (
                    <li key={item.id}>
                        {item.first_name} {item.last_name}
                    </li>
                ))}
            </ul>
        )
    }


    // //16.8 + 
    // const [count, setCount] = useState(10);
    // const [age, setMyAge] = useState(20)

    // return (
    //     // <div>
    //     //     <p>You clicked {count} times</p>
    //     //     <button onClick={() => setCount(count + 1)}>
    //     //         Click me
    //     //     </button>
    //     //     <br></br>
    //     //     age-- {age}
    //     //     <button onClick={() => setMyAge(age + 1)}>
    //     //         Click me
    //     //     </button>
    //     // </div>
    // )

}
