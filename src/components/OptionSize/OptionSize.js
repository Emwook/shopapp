import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = (props) =>{
    return (
    <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
            {props.sizes[props.id].map(size =>
            <li key={size}><button type="button"
                className={clsx(props.currentSize === size && styles.active)}
                onClick={() => {props.setCurrentSize(size); props.updateAddPrice(size);}}>{size}
            </button></li>)}
        </ul>
    </div>
      );
};

OptionSize.propTypes = {
    sizes: PropTypes.array,
    id: PropTypes.number,
    currentSize: PropTypes.string,
    setCurrentSize: PropTypes.func,
    updateAddPrice: PropTypes.func,
};

export default OptionSize;