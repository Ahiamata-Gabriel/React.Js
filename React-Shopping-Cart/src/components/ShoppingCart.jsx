import React, { useState } from 'react';
import './ShoppingCart.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoMdRemove } from 'react-icons/io';
import { IoMdAdd } from 'react-icons/io';

const ShoppingCart = ({
  visibility,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) => {
  // Calculate total price
  const total = products.reduce((acc, product) => {
    return acc + product.price * product.count;
  }, 0);

  return (
    <div
      className="modal"
      style={{
        display: visibility ? 'block' : 'none',
      }}
    >
      <div className="shoppingCart">
        <div className="header">
          <h2>Shopping Cart</h2>
          <button className="btn close-btn" onClick={onClose}>
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <div className="cart-products">
          {products.length === 0 && (
            <span className="empty-text">Your Basket is Empty</span>
          )}
          {products.map((product) => (
            <div className="cart-product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <span className="product-price">
                  {product.price * product.count}$
                </span>

                <div>
                  <button
                    className="btn quantity-btn"
                    onClick={() =>
                      onQuantityChange(product.id, product.count - 1)
                    }
                    disabled={product.count === 1}
                  >
                    <IoMdRemove />
                  </button>
                  <span className="quantity">{product.count}</span>
                  <button
                    className="btn quantity-btn"
                    onClick={() =>
                      onQuantityChange(product.id, product.count + 1)
                    }
                  >
                    <IoMdAdd />
                  </button>
                </div>

                <button
                  className="btn remove-btn"
                  onClick={() => onProductRemove(product)}
                >
                  <RiDeleteBin6Line size={20} />
                </button>
              </div>
            </div>
          ))}
          {products.length > 0 && (
            <div className="total-price">
              <span>Total: {total}$</span>
              <button className="btn checkout-btn">Proceed to checkout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
