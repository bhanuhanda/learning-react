import React, { Component } from 'react';
// import FetchData from './fetchData';
// import InsertData from './insertData';
import DeleteData from './deleteData';

class FrontBoard extends Component {
    render() { 
        return ( 
            <div>
                <h1>Implementing Api requests using whatwg-fetch and json-server</h1>
                {/* <FetchData />
                <InsertData /> */}
                <DeleteData />
            </div>
         );
    }
}
 
export default FrontBoard;