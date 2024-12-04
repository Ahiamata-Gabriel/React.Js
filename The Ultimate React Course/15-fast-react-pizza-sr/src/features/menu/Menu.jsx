import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  return <h1>Menu</h1>;
}

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

export default Menu;
