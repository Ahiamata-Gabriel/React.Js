import './App.css';
import { products } from './assets/Data';
import { GiShoppingBag } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h3 className="logo">Logo</h3>
        <button className="btn shopping-cart-btn">
          <GiShoppingBag size={24} />
        </button>
      </div>
      <main>
        <h2 className="title">Products</h2>
        <div className="products">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img
                className="product-image"
                src={product.image}
                alt={product.image}
              />
              <h4 className="product-name">{product.name}</h4>
              {/* <RatingStars rating={product.rating} /> */}
              <p>{product.description}</p>
              <span className="product-price">{product.price}$</span>
              <div className="buttons">
                <button className="btn">Detail</button>
                <button className="btn">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
