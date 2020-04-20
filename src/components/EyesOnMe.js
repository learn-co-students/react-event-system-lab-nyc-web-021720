// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {
    render() {
    return(
    <button onFocus={()=> console.log('Good!') }  onBlur={()=> console.log('Hey! Eyes on me!')}>

    </button>
        )
    }
  }
  export default EyesOnMe