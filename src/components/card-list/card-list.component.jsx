import Card from '../card/card.component.jsx';
import './card-list.styles.css';

const CardList = ({ monsters, className }) => (
  <div className={className}>
    {monsters.map((monster) => {
      return <Card monster={monster}></Card>;
    })}
  </div>
);

export default CardList;
