import React, {Component} from 'react';
import { CardList } from './components/cardList/CardList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters: users}))
  }
  render() {
  return (
    <div className="App">
      <CardList>
      {this.state.monsters.map(monster => (
        <div key={ monster.id } className='card'>
        <h1> {monster.name} </h1>
        </div>
      ))}
      </CardList>
    </div>
  );
}}

export default App;
