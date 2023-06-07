import React, { useRef } from "react";
import PropTypes from 'prop-types';

import styles from "./radio.module.css";

const propTypes = {
    value: PropTypes.bool.isRequired,
    selectedValue: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired
};

const defaultProps = {
    disabled: false
};

function RadioButton({ value, selectedValue, name, disabled }) {
    const ref = useRef();
    return (
        <div
            className={`${styles.inputContainer} ${value && value === selectedValue ? styles.active : ''}`}
            onClick={() => {
                if (ref && ref.current) {
                    ref.current.click();
                }
            }}>
            <div className={styles.button}>
            </div>
            <input type="radio"
                ref={ref}
                name={name}
                value={value}
                className={styles.input}
                disabled={disabled} />
        </div>
    );
}

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;

export default RadioButton;