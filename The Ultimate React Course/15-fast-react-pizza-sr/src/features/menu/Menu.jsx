import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  return <h1>Menu</h1>;
}

const loader = () => {
  return getMenu();
};

export default Menu;
