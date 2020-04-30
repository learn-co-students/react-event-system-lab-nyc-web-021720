// Code EyesOnMe Component Here
// In the components/EyesOnMe.js file, create a EyesOnMe React component.
// In that component, render a button.
// On that button, add event handlers that listens for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.

import React from 'react'

class EyesonMe extends React.Component {  // In the components/EyesOnMe.js file, create a EyesOnMe React component.

onFocus = () => console.log("Good!")    // When the focus event fires, use console.log to print out the text 'Good!'.


onBlur = () => console.log("Hey! Eyes on me!")  // When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.

render(){
    return(
        <button onFocus={this.onFocus} onBlur={this.onBlur}>
            Eyes on me, please!
        </button>
    )
}
}

export default  EyesonMe 

