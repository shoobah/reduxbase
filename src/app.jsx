import React, { Component } from 'react'
import { connect } from 'react-redux'
import { randomize, sortList } from './data/action-creators'
import Number from './number'
import List from './list'
import Pushbutton from './pushbutton'
  
class App extends Component {
  constructor( props) {
    super(props)
  }

  handleClick(){
    this.props.randomize(30);
  }
  
  handleSortClick(){
    this.props.sortList();
  }

  componentDidMount(){
  }

  render() {
    let style={
      fontFamily: 'arial'
    }
    let tag =  <div style={style}>
                  <h1>Slumpa nummer</h1>
                  <Pushbutton onClick={this.handleClick.bind(this)} type={'random'} />
                  <Pushbutton onClick={this.handleSortClick.bind(this)} type={'sort'} /><br/>
                  <List content={this.props.state.list} />
                </div>
    return tag;
  }
}

//Redux: mappar state som kommer från vår store ( som finns i data/reducer.js) till en prop i denna komponent
//då har vi alltid aktuell state
function mapStateToProps(state){
  return{
    state: state
  }
}

//Redux: mappar dispatch funktionen till props på denna komponent. Då kan vi använda this.props.randomzie(10) för att skicka en signal
//till vår store, via action-creators, att vi vill slumpa nya värden
function mapDispatchToProps(dispatch){
  return {
    randomize: (length) => dispatch(randomize(length)),
    sortList: () => dispatch(sortList())
  }
}

//Redux: connect ser till att vår komponent, App, är en "smart" komponent som lyssnar på om
//det händer något i vår store.
export default connect(mapStateToProps, mapDispatchToProps)(App)
