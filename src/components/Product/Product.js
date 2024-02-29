import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import productsData from '../../data/products';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {
  let colors = (productsData.map(product => product.colors));
  let id = props.id - 1;
  const [currentColor, setCurrentColor] = useState(colors[id][0]);

  return (
    <article className={styles.product}>
      <ProductImage currentColor={currentColor} name={props.name}/>
      <ProductForm 
        title={props.title}
        basePrice={props.basePrice}
        name={props.name}
        id={id}
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string,
  basePrice: PropTypes.number,
  name: PropTypes.string,
};

export default Product;