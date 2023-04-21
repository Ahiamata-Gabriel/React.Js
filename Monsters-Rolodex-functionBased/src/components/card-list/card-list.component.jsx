import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
