import React, { Component } from 'react';
import FetchData from './fetchData';
import InsertData from './insertData';

class FrontBoard extends Component {
    render() { 
        return ( 
            <div>
                <h1>Implementing Api requests using whatwg-fetch and json-server</h1>
                <FetchData />
                <InsertData />
            </div>
         );
    }
}
 
export default FrontBoard;