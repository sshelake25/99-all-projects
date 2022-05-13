
function Address(props) {
    let isLoggedIn = false;

  

    let address = (
        <>
            <div>
                <span><b>A/P:</b> Ban - IND</span>
                <br />
                <span><b>Contact Info:</b> 09009090</span>
                <br></br>
                <span>I am inside address component</span>
                <p>Office time: {props.time}</p>
            </div>
        </>
    );


    if (isLoggedIn) {
        return (<h1> I am logge in </h1>);
    } else {
        return address;
    }
}

export default Address;