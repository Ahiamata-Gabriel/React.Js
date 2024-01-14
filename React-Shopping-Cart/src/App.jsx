import './App.css';
import { products } from './assets/Data';
import { GiShoppingBag } from 'react-icons/gi';
import { useState } from 'react';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [cartsVisibility, setCartsVisibility] = useState(false);
  const [productsIncart, setProductsIncart] = useState([]);

  //   const newProduct = {
  //     ...product,
  //     count: 1,
  //   };
  //   setProductsIncart([...productsIncart, newProduct]);
  // };

  const addProductToCart = (product) => {
    // Check if the product is already in the cart
    const isProductInCart = productsIncart.some(
      (item) => item.id === product.id
    );

    if (!isProductInCart) {
      // If not in cart, add the product
      const newProduct = {
        ...product,
        count: 1,
      };
      setProductsIncart([...productsIncart, newProduct]);
    } else {
      // If already in cart, update the quantity
      setProductsIncart((oldState) => {
        return oldState.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              count: item.count + 1, // Increase quantity by 1
            };
          }
          return item;
        });
      });
    }
  };

  const onQuantityChange = (productId, count) => {
    setProductsIncart((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProductsIncart((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  return (
    <div className="App">
      <ShoppingCart
        visibility={cartsVisibility}
        products={productsIncart}
        onClose={() => setCartsVisibility(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
      />
      <div className="navbar">
        <h3 className="logo">Logo</h3>
        <button
          className="btn shopping-cart-btn"
          onClick={() => setCartsVisibility(true)}
        >
          <GiShoppingBag size={24} />
          {productsIncart.length > 0 && (
            <span className="product-count">{productsIncart.length}</span>
          )}
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
              <p>{product.description}</p>
              <span className="product-price">{product.price}$</span>
              <div className="buttons">
                <button className="btn">Detail</button>
                <button
                  className="btn"
                  onClick={() => addProductToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
