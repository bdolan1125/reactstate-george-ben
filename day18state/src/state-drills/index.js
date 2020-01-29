import React from 'react'

export default class HelloWorld extends React.Component {
  state = {
    who: "world"
  };

handleClick = (arg) => {
  this.setState({
     who: arg
    
  })
}

render() {
  return (
    <div className='hello-world'>
<p>Hello, {this.state.who}</p>
        <button onClick={() => this.handleClick ('World')}>World</button>
        <button onClick={() => this.handleClick ('Friend')}>Friend</button>
        <button onClick={() => this.handleClick ('React')}>React</button>
    </div>
  )
}
};

class Bomb extends React.Component {
  state = {
    count: 0
  }

let interval = setInterval(callback, timeInMs)

render() {(
  return (
    <div className='bomb' >
    <p>'tick'</p>
    </div>
  ))
}
};
  