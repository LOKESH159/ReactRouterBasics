import React, { Component } from 'react';
import ItemList from './ItemList';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
class Items extends Component {
    constructor(props){
        super(props);
        this.state = {
            dogsList:[]
        };
    }
    async componentWillMount(){
        let items = await fetch("https://dog.ceo/api/breeds/list/all");
        console.log(items);
        let response = await items.json();
        let data = response["message"];
        var list   =  [];
        for(let x in data){
              list.push(x);
        }
        this.setState({
            dogsList:list
        },()=>{
            console.log(this.state.dogsList);
        });
      
        
        // this.setState({
        //     dogsList:list
        // },()=>{
        //     console.log(this.state.dogsList);
        // });
    }
    render() {
        var list = this.state.dogsList;
        return (
            <div>
          
                 { 
                   list.map(x =>(
                    <h3 key={x}>           
                        <Link to={`/Items/${x}`}>{x}</Link>                               
                     </h3>
                   ))
               }
        
           
            </div>   
        );
    }
}

export default Items;