import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { popularProducts } from '../assets/data';

const Container = styled.div`
  paddimg: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((popularProduct) => (
        <Product popularProduct={popularProduct} key={popularProduct.id} />
      ))}
    </Container>
  );
};

export default Products;
