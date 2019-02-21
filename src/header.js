import React, { Component } from 'react';
import Menu from './menu';

class Header extends Component {
    render(){
        return(
            <Menu menus={['home','about','gallery','contact']}/>
        );
    }
}

export default Header;