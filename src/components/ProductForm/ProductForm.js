import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import productsData from '../../data/products';
import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const ProductForm = (props) =>{
    let sizes, addPrices= [];

    sizes = productsData.map(product => product.sizes.map(({ name }) => name));
    const [currentSize, setCurrentSize] = useState(sizes[props.id][0]);

    addPrices = productsData.map(product => product.sizes.map(({ additionalPrice }) => additionalPrice));
    const [currentAddPrice, setCurrentAddPrice] = useState(addPrices[props.id][0]);

    const updateAddPrice = (size) =>{
        const sizeId = sizes[props.id].indexOf(size);
        setCurrentAddPrice(addPrices[props.id][sizeId]);
    };

    const price = useMemo(()=>{
        return(props.basePrice + currentAddPrice);
    }, [currentAddPrice, props.basePrice]);

    const sendProductData = () => {
        console.log('Summary');
        console.log('========');
        console.log('name: ' + props.name + ' shirt');
        console.log('price: ' + (props.basePrice + currentAddPrice));
        console.log('size: ' + currentSize);
        console.log('size: ' + props.currentColor);
    };

    return (
        <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <form onSubmit={(event) => {event.preventDefault(); sendProductData();}}>
          <OptionSize 
            sizes={sizes}
            id={props.id}
            currentSize={currentSize}
            setCurrentSize={setCurrentSize}
            updateAddPrice={updateAddPrice}
          />
          <OptionColor
            colors={props.colors}
            id={props.id}
            currentColor={props.currentColor}
            setCurrentColor={props.setCurrentColor}
          />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    );
};

ProductForm.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    basePrice: PropTypes.number,
    name: PropTypes.string,
    colors: PropTypes.array,
    currentColor: PropTypes.string,
    setCurrentColor: PropTypes.func,
};

export default ProductForm;