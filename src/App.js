import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
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
          () => {}
        );
      });
    console.log('mount');
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toUpperCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // console.log('render from app.js');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const monsterSearch = monsters.filter((monster) => {
      return monster.name.toUpperCase().includes(searchField);
    });

    return (
      <div className='App'>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='search monster'
          className='monsters-search-box'
        ></SearchBox>
        <CardList monsters={monsterSearch} className='card-list' />
      </div>
    );
  }
}

export default App;

// { name: 'Spib' }, { name: 'Vromp' }, { name: 'Krutz' }
