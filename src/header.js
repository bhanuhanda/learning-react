import React, { Component } from 'react';
import Menu from './menu';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            menus : ['tab1','tab2','tab3','tab4','tab5']
        }
    }
    render(){
        return(
            <div>
                <h2>Header Here</h2>
                <Menu menulist={this.state.menus}/>
            </div>
        );
    }
}

export default Header;