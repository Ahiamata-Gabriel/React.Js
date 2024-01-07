import React from 'react';
import styled from 'styled-components';
import { categories } from '../assets/data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Container>
  );
};

export default Categories;
