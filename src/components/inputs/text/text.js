import React from "react";
import PropTypes from 'prop-types';

import styles from "./text.module.css";

const propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.shape(PropTypes.any),
    onEnter: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    type: PropTypes.string,
    disabled: PropTypes.bool
};

const defaultProps = {
    value: '',
    className: null,
    style: null,
    disabled: false,
    placeholder: null,
    title: null,
    onEnter: null,
    min: null,
    max: null,
    type: null,
    disabled: false
};

function Text({ className, style, value, placeholder, onChange, onEnter, min, max, title, type, disabled }) {
    return (
        <span
            className={`${styles.inputContainer} ${className} ${disabled ? styles.disable : ''}`}
            style={style}>
            <input type={type || 'text'}
                className={styles.input}
                value={value}
                placeholder={placeholder}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
                disabled={disabled}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && onEnter) {
                        onEnter();
                    }
                }}
                min={min}
                max={max}
                title={title} />
        </span >
    );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;