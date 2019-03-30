import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.menulist);
  }

  showIndex = (index) => {
    console.log(index);
  }

  render() {
    return (
      <div>
        <h3>Menu</h3>
        {this.props.menulist.map((v,i)=>{
            return(
                <li onClick={()=>{this.showIndex(i)}} key={i}>{v.toUpperCase()}</li>
            );
        })}
      </div>
    );
  }
}

export default Menu;
