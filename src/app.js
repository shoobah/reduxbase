import React, { Component } from 'react'
import List from './list'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Superlive!!</h1>
        <List content={['rune','nisse','ulla','tore','greta']} />
      </div>
    );
  }
}
