import React, { Component } from 'react';

class Menu extends Component {
    render(){
        return(
            <div>
                <ul>
                            {
                                this.props.menus.map((val,ind) => {
                                    return (
                                        <li>{val}</li>
                                    );
                                })
                            }
                </ul>
            </div>
        );
    }
}

export default Menu;