import React, { Component } from "react";
import { URL } from "./configs";

class DeleteData extends Component {
  constructor() {
    super();
    this.state = {
      technologies: []
    };
    this.fetchLanguages();
  }
  fetchLanguages = () => {
    fetch(`${URL}`)
      .then(result => {
        return result.json();
      })
      // .then((result)=>{
      //     if(!result.ok){
      //         throw Error("Network Request Failed");
      //     }
      //     return result.json();
      // })
      .then(result => {
        console.log(result);
        this.setState({
          technologies: result
        });
      })
      .catch(error => {
        console.log(`error occured -> ${error}`);
        // console.log("error occured ->" + error);
      });
  };
  deleteLanguage = (id) => {
    //   console.log(id);
    fetch(`${URL+id}`,{
        method :'DELETE',
        headers : {
            'Content-Type':'application/json'
        },
        body : JSON.stringify({})
    })
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        if(res.id === undefined){
            console.log(res);
        }
    })
    .catch((err)=>{
        console.log("error occured = " + err);
    })
  }
  render() {
    return (
      <div>
        <h3>Deleting Records</h3>
        <p><b><i>Press the record to delete</i></b></p>
        <ul>
                    {this.state.technologies.map((v,i)=>{
                        return(
                            <li key={i}>
                                <span onClick={()=>{this.deleteLanguage(v.id)}}>
                                    {`${v.language.toUpperCase()} is a ${v.category}`}
                                </span>
                            </li>
                        );
                    })}
                </ul>
      </div>
    );
  }
}

export default DeleteData;