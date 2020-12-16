import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick }) => (
    <div className={styles.ButtonWrap}>
        <button type="button" className={styles.Button} onClick={onClick}>
            Load more
        </button>
    </div>

);

export default Button;


Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};
