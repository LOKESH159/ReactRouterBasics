import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import HomeComponent from './HomeComponent';
import Items from './Items';
import Help from './Help';
import '../css/list.css';
import ItemList from './ItemList';


class Nav extends Component {
    
    render() {
        const listStyle = {
           listStyle:'none'

        };
        const ulStyle = {
            display :'block'
        };
        const navStyle = {
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center',
            minHeight:'10vh',
            backgroundColor:'blue',
            color:'white'
        }
        return (
            <div>
             <Router>
                <nav>
                    <ul className='nav-links'>
                        <Link to = '/Home'><li>Home</li></Link>
                        <Link to = '/Items'><li>Items</li></Link>
                        <Link to = '/Help'><li>Help</li></Link>
                    </ul>
                </nav>
                    <Switch>
                     <Route exact path = '/Home' component = {HomeComponent}/>
                     <Route exact path = '/Items' component = {Items}/>
                     <Route exact path = '/Help' component = {Help}/>
                     <Route exact path = '/Items/:userId' component = {ItemList}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Nav;