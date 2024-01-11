import product1 from './images/product-1.png';
import product2 from './images/product-2.png';
import product3 from './images/product-3.png';
import product4 from './images/product-4.png';
import product5 from './images/product-5.jpg';
import product6 from './images/product-6.png';

export const products = [
  {
    id: 1,
    name: 'Vivamus vitae',
    rating: 4.3,
    description:
      'Vivamus vitae neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.',
    price: 199,
    image: `${product1}`,
  },
  {
    id: 2,
    name: 'Fusce sit amet ipsum',
    rating: 4.2,
    description:
      'Maecenas fermentum urna egestas urna ullamcorper sodales. Sed a enim imperdiet, tempus massa a, iaculis tellus.',
    price: 229,
    image: `${product2}`,
  },
  {
    id: 3,
    name: 'Etiam volutpat aliquam',
    rating: 3.2,
    description:
      'Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo',
    price: 99,
    image: `${product3}`,
  },
  {
    id: 4,
    name: 'Lorem ipsum dolor',
    rating: 4.8,
    description:
      'Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.',
    price: 119,
    image: `${product4}`,
  },
  {
    id: 5,
    name: 'Ultrices nisl',
    rating: 4.5,
    description:
      'Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.',
    price: 85,
    image: `${product5}`,
  },
  {
    id: 6,
    name: 'Curabitur in elementum tortor',
    rating: 3.8,
    description:
      ' Mauris convallis diam nibh, non malesuada enim facilisis non. Etiam sapien augue, molestie a porta sed',
    price: 149,
    image: `${product6}`,
  },
];
