import React, { Component } from 'react';

class Friend extends Component {
    render(){
        return(
            <div>
                abc
                {console.log(this.props.friend)}
            </div>
        )
    }
}

export default Friend