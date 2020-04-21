// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component{
    handleFocus = (event) =>{
        console.log(event.type)
        if (event.type === 'blur'){
            console.log('Hey! Eyes on me!')
        }
        else if (event.type === 'focus'){
            console.log('Good!')
        }
    }

    render(){
        
        return(
            <button onFocus={this.handleFocus} onBlur={this.handleFocus}> Eyes on me!</button>
        )
    }
}