import React, {Component}  from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
 

class SaleList extends React.Component{
    render(){
    return(

                <li>
                    <img src = {this.props.img}></img>
                </li>

    );
}
}

export default SaleList;