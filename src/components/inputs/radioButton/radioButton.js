import React from "react";
import PropTypes from 'prop-types';
import Radio from './radio';

import styles from "./radioButton.module.css";

const propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any,
        label: PropTypes.string
    })).isRequired,
    name: PropTypes.string.isRequired
};

const defaultProps = {
    className: null,
    disabled: false,
    placeholder: null,
    title: null
};

function RadioButton({ className, value, options, name, onChange, title, disabled }) {
    return (
        <div className={`${styles.radioButton} ${className}`} title={title} onChange={(e) => {
            onChange(e.target.value);
        }}>
            {options.map((option) => {
                return (
                    <div className={styles.item} key={option.value}>
                        <Radio value={option.value} disabled={disabled} selectedValue={value} name={name} />
                        <p className={styles.label}>{option.label}</p>
                    </div>
                );
            })}
        </div>
    );
}

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;

export default RadioButton;