import React, { Component } from 'react'
import Number from './number'
import List from './list'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      list: []
    }
  }

  handleClick(){
    let giveMeRandom = () => (Math.round(Math.random()*1000))
    let newList = []
    for(let i=0; i<10; i++){
      newList.push(giveMeRandom())
    }
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div>
        <h1>Slumpa nummer</h1>
        <button onClick={this.handleClick.bind(this)} >Knapp!</button><br/>
        <List content={this.state.list} />
      </div>
    );
  }
}
