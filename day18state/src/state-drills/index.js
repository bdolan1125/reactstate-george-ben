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

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count:0}
    
  this.interval = setInterval( () => this.timer(), 1000);
}
 
timer() {
  console.log(this.state)
  this.setState({count:this.state.count+1})
  
};
render(){
if(this.state.count >= 8){
  clearInterval(this.interval)
  return(
    <div className='bomb'>
      <p>boom</p>
    </div>
  )
} else if(this.state.count % 2 !== 0){
  return(
    <div className='bomb'>
      <p>tock</p>
    </div>
  )
} else if(this.state.count % 2 === 0){
  return(
    <div className='bomb'>
      <p>tick</p>
    </div>)
}
}};