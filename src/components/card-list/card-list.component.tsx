import { Monster } from '../../App';

import Card from '../card/card.component';
import './card-list.styles.css';

type CardListProps = {
  monsters: Monster[];
  className: string;

}

const CardList = ({ monsters, className }: CardListProps) => (
  <div className={className}>
    {monsters.map((monster) => {
      return <Card monster={monster}></Card>;
    })}
  </div>
);

export default CardList;
