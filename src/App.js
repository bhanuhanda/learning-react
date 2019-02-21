import React, { Component } from 'react';
import Header from './header';
import Middle from './middle';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* dividing into components */}
        <Header />
        <Middle />
        <Footer/>
      </div>
    );
  }
}

export default App;
