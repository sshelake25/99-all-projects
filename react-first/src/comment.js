
// class based component
import React from 'react';

import Address from './address';

class Comment extends React.Component {

    render() {
        return (
            <>
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {this.props.date}
                </div>
                <Address time="THBSSSSSSSSSS"></Address>
            </>
        )
    }

} 

export default Comment;