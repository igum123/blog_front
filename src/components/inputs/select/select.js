import React from "react";
import PropTypes from 'prop-types';

import styles from "./select.module.css";

const propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any,
        label: PropTypes.string
    })).isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.shape(PropTypes.any)
};

const defaultProps = {
    className: null,
    style: null,
    disabled: false,
    placeholder: null,
    title: null
};

function Select({ value, onChange, options, placeholder, className, disabled, title, style }) {
    return (
        <select
            value={value}
            onChange={(e) => {
                for (let option of options) {
                    if (e.target.value + '' === option.value + '') {
                        onChange(option);
                        return;
                    }
                }
                onChange(null);
            }}
            style={style}
            className={`${styles.select} ${className}`}
            disabled={disabled}
            title={title} >
            {placeholder && !value && (<option value="">{placeholder}</option>)}
            {options && options.map((option) => {
                return (<option key={option.value} value={option.value}>{option.label}</option>);
            })}
        </select>
    );
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;