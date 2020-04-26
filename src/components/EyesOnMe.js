// My version!!!! better!
// import React from 'react';

// class EyesOnMe extends React.Component{
//    state = {
//        event: 'blur'
//    }
//     handleClick = () => {
//         if(this.state.event==='blur'){
//             console.log('Hey! Eyes on me!')
//             this.setState({
//                 event: 'focus'
//             })
//         }
//         if(this.state.event==='focus'){
//             console.log('Good!')
//             this.setState({
//                 event: 'blur'
//             })

//         }
//    }
//     render(){
//        return (
//            <button onClick={this.handleClick}>{this.state.event}</button>
//        ) 
//     }
// }

// export default EyesOnMe
  
import React from 'react';

class EyesOnMe extends React.Component {

  onFocus = () => console.log('Good!')

  onBlur = () => console.log('Hey! Eyes on me!')

  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur}>
        Eyes on me, please!
      </button>
    )
  }
}

export default EyesOnMe;