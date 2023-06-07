import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import styles from "./textButton.module.css";

const propTypes = {
    onClick: PropTypes.func.isRequired,
    defaultValue: PropTypes.string.isRequired,
    textBtn: PropTypes.any.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.shape(PropTypes.any),
    onEnter: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    type: PropTypes.string,
    notEditable: PropTypes.bool,
    error: PropTypes.bool,
    previousText: PropTypes.string
};

const defaultProps = {
    className: null,
    style: null,
    disabled: false,
    placeholder: null,
    title: null,
    onEnter: null,
    min: null,
    max: null,
    type: null,
    notEditable: null,
    error: null,
    previousText: null
};

function TextButton({ type, className, defaultValue, placeholder, onClick, textBtn, notEditable, error, previousText, min, max }) {
    const [value, setValue] = useState('');
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            onClick(value);
        }
    }
    useEffect(() => {
        if (defaultValue || (value && notEditable)) setValue(defaultValue);
    }, [notEditable, defaultValue]);
    return (
        <span className={`${styles.inputContainer} ${className}`}>
            {previousText && <p className={styles.previousText}>{previousText}</p>}
            <input type={type || "text"}
                className={`${styles.input} ${error ? styles.error : ''}`}
                value={value}
                placeholder={placeholder}
                onChange={(e) => {
                    if (notEditable) return;
                    setValue(e.target.value);
                }}
                min={min}
                max={max}
                onKeyDown={handleKeyDown} />
            <button className={styles.button} onClick={() => {
                onClick(value);
            }}>{textBtn}</button>
        </span>
    );
}

TextButton.propTypes = propTypes;
TextButton.defaultProps = defaultProps;

export default TextButton;