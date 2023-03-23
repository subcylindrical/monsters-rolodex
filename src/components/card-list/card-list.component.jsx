import { Component } from 'react';
import Card from '../card/card.component.jsx';
import './card-list.styles.css';

class CardList extends Component {
  render() {
    console.log('render from card-list');
    const { monsters, className } = this.props;
    return (
      <div className={className}>
        {monsters.map((monster) => {
          return <Card monster={monster}></Card>;
        })}
      </div>
    );
  }
}

export default CardList;
