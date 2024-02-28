import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import productsData from '../../data/products';

const Product = props => {
  let colors = [];
  let sizes = [];
  colors = (productsData.map(product => product.colors));
  sizes = productsData.map(product => product.sizes.map(({ name }) => name));
  let id = props.id - 1;
  const [currentColor, setCurrentColor] = useState(colors[id][0]);
  const [currentSize, setCurrentSize] = useState(sizes[id][0]);

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes[id].map(size => <li><button type="button">{size}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors[id].map(color => <li><button type="button" className={clsx(styles.Button, styles['color' + color.charAt(0).toUpperCase() + color.slice(1)])}></button></li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string,
  basePrice: PropTypes.number,
};

export default Product;