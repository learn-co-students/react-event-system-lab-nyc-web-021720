// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
	handleOnKeyUp = () => {
		console.log('Entering password...')
	}
	render() {
		return(
			<input onKeyUp={this.handleOnKeyUp} type="password" />
		)
	}
}

export default Keypad