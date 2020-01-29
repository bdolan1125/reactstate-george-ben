import React from 'react'

// export default class HelloWorld extends React.Component {
//   state = {
//     who: "world"
//   };

// handleClick = (arg) => {
//   this.setState({
//      who: arg
    
//   })
// }

// render() {
//   return (
//     <div className='hello-world'>
// <p>Hello, {this.state.who}</p>
//         <button onClick={() => this.handleClick ('World')}>World</button>
//         <button onClick={() => this.handleClick ('Friend')}>Friend</button>
//         <button onClick={() => this.handleClick ('React')}>React</button>
//     </div>
//   )
// }
// };

// export default class Bomb extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {count:0}
    
//   this.interval = setInterval( () => this.timer(), 1000);
// }
 
// timer() {
//   console.log(this.state)
//   this.setState({count:this.state.count+1})
  
// };
// render(){
// if(this.state.count >= 8){
//   clearInterval(this.interval)
//   return(
//     <div className='bomb'>
//       <p>boom</p>
//     </div>
//   )
// } else if(this.state.count % 2 !== 0){
//   return(
//     <div className='bomb'>
//       <p>tock</p>
//     </div>
//   )
// } else if(this.state.count % 2 === 0){
//   return(
//     <div className='bomb'>
//       <p>tick</p>
//     </div>)
// }
// }};

export default class RouletteGun extends React.Component {

  defaultProps = {
    bulletInChamber: 8
  }

  constructor(props) {
    super(props) 
    this.state = {bulletInChamber: this.props.bulletInChamber}
  }
 
 state = {
   chamber: null,
   spinningTheChamber: false
 }
     generateRandomNumber() {
     let newValue = Math.floor(Math.random() * 8);
     let chamberValue = Math.floor(Math.random() * 8);
     this.setState({bulletInChamber: newValue, spinningTheChamber: !this.state.spinningTheChamber, chamber: chamberValue})
     
   };

 PullTheTrigger () {
  this.setState({spinningTheChamber: !this.state.spinningTheChamber});


  setTimeout( () => this.generateRandomNumber(), 2000) 
//   this.interval = setInterval( () => this.timer(), 1000);
 };

 safeOrNot () {
  if(this.state.spinningTheChamber === true) {
    return (<p>spinning the chamber and pulling the trigger! ...</p>)
  } if (this.state.chamber === this.state.bulletInChamber) {
    return (<p>BANG!!!!</p>)
  } else {
    return (<p>You're Safe!</p>)
  }
 }
  render() {
    return (<div>
      <button onClick =  {e => this.PullTheTrigger() }>Pull The Trigger </button> 
      {this.safeOrNot()}  
     </div>)
  }
}
