import React from 'react'

class Keypad extends React.Component {

  handleImputPassword = () => {console.log('Entering password...')}

  render() {
    return (
      <div>
        <input type='password' onKeyUp={this.handleImputPassword}/>
      </div>
    )
  }
}

export default Keypad
