import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types'

const OptionColor = (props) =>{
  const prepareColorClassName = color => {
    return styles['color' + color.charAt(0).toUpperCase() + color.slice(1)];
  };
    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors[props.id].map(color => 
              <li key={color}>
                <button type="button" 
                  className={clsx(prepareColorClassName(color), props.currentColor === color && styles.active)}
                  onClick={() => props.setCurrentColor(color)}>
                </button>
              </li>)}
            </ul>
        </div>
    );
};

OptionColor.propTypes = {
  id: PropTypes.number,
  colors: PropTypes.array,
  currentColor: PropTypes.string,
  setCurrentColor: PropTypes.func,
};

export default OptionColor;