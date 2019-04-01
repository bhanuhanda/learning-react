import React, { Component } from "react";

class EnterUser extends Component {
  constructor() {
    super();
    this.state = {
      usersList: [
        {
          name: "username"
        }
      ],
      name: ""
    };
  }
  setName = e => {
    this.setState(
      {
        name: e.target.value
      },
      () => {
        console.log(this.state.name);
      }
    );
  };

  clearInputs = () => {
    this.setState({
      name: ""
    });
  };

  enterUser = () => {
    let userDetail = {
      name: this.state.name
    };
    let newUsersList = this.state.usersList.slice();
    newUsersList.push(userDetail);
    this.setState({
      usersList: newUsersList
    });

    this.clearInputs();
  };

  render() {
    return (
      <div>
        <h3>Enter User Section</h3>
        <input type="text" placeholder="Enter Name" value={this.state.name} onChange={e => {this.setName(e);}}/>
        <button onClick={() => {this.enterUser();}}>Insert User</button>
        
        <ul>
          {this.state.usersList.map((v,i)=>{
            return(
              <li key={i}>{v.name}</li>
            );
          })}
        </ul>

      </div>
    );
  }
}

export default EnterUser;
