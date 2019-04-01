import React, { Component } from 'react';
import { URL } from "./configs";

class FetchData extends Component {
    constructor(){
        super();
        this.state = {
            technologies : []
        }
        this.fetchLanguages();
    }

    fetchLanguages = () => {

        fetch(`${URL}`)
        .then((result)=>{
            return result.json();
        })
        // .then((result)=>{
        //     if(!result.ok){
        //         throw Error("Network Request Failed");
        //     }
        //     return result.json();
        // })
        .then((result)=>{
            console.log(result);
            this.setState({
                technologies : result
            });
        })
        .catch((error)=>{
            console.log(`error occured -> ${error}`);
            // console.log("error occured ->" + error);
        })

    }

    render() { 
        return ( 
            <div>
                <h3>Fetching Data</h3>
                <ul>
                    {this.state.technologies.map((v,i)=>{
                        return(
                            <li key={i}>
                                {`${v.language.toUpperCase()} is a ${v.category}`}
                            </li>
                        );
                    })}
                </ul>
            </div>
         );
    }
}
 
export default FetchData;