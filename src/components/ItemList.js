import React, { Component } from 'react';

class ItemList extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state={
            path:''
        }
    }
    async componentDidMount(){
       let image = 'https://dog.ceo/api/breed/'+this.props.match.params.userId+'/images/random';   
       let imageRequest = await fetch(image);
       let imageData = await imageRequest.json();
       let imagePath = imageData["message"];
       console.log(imagePath) ;
       this.setState({
           path:imagePath
       });
    }
    render() {
        const imgStyle = {
            padding:'20px'
        }
        return (
            <div style={imgStyle}>
                <img src={this.state.path} alt='loading...'></img>
            </div>
                  
        );
    }
}

export default ItemList;