import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
    console.log('constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state.monsters);
          }
        );
      });
    console.log('mount');
  }

  render() {
    console.log('render');
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => {
          return (
            <h1 class='chicken' key={monster.id}>
              {monster.name}
            </h1>
          );
        })}
      </div>
    );
  }
}

export default App;

// { name: 'Spib' }, { name: 'Vromp' }, { name: 'Krutz' }
