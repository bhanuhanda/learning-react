import React, { Component } from 'react';
import EnterUser from './EnterUser';

class Middle extends Component {
    render(){
        return(
            <div class="hello">
                <h2>Middle Here</h2>
                <EnterUser />
            </div>
        );
    }
}

export default Middle;