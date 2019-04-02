import React, { Component } from "react";
import { URL } from "./configs";
class InsertData extends Component {
  constructor() {
    super();
    this.state = {
      technologies: [],
      lang: "",
      categ: ""
    };
  }
  handleInputs = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    // console.log([e.target.id]);
  };
  clearInputs = () => {
      this.setState({
          lang : '',
          categ : ''
      });
  }
  insertLanguages = () => {
    let data = {
      language: this.state.lang,
      category: this.state.categ
    };
    fetch(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        if (res.id !== undefined) {
            console.log(res);
            this.clearInputs();
        }
      })
      .catch(err => {
        console.log(`error occured = ${err}`);
      });
  };
  render() {
    return (
      <div>
        <h3>Insert Data</h3>
        <input
          type="text"
          id="lang"
          value={this.state.lang}
          placeholder="Enter Language"
          onChange={e => {
            this.handleInputs(e);
          }}
        />
        <br />
        <br />
        <input
          type="text"
          id="categ"
          value={this.state.categ}
          placeholder="Enter Category"
          onChange={e => {
            this.handleInputs(e);
          }}
        />
        <br />
        <br />
        <button
          onClick={() => {
            this.insertLanguages();
          }}
        >
          Insert User
        </button>
      </div>
    );
  }
}

export default InsertData;
