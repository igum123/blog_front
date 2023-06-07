import React, { useState } from "react";
import PropTypes from 'prop-types';

import styles from "./password.module.css";

const propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.shape(PropTypes.any),
    onEnter: PropTypes.func
};

const defaultProps = {
    className: null,
    style: null,
    disabled: false,
    placeholder: null,
    title: null,
    onEnter: null
};

function Password({ className, style, value, placeholder, onEnter, onChange, title }) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <span
            className={`${styles.inputContainer} ${className}`}
            style={style}>
            <input type={showPassword ? "text" : "password"}
                className={styles.input}
                value={value}
                placeholder={placeholder}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && onEnter) {
                        onEnter();
                    }
                }}
                title={title} />
            <div className={styles.eye} >
                {!showPassword && <i onClick={() => {
                    setShowPassword(true);
                }} className="fas fa-eye"></i>}
                {showPassword && <i onClick={() => {
                    setShowPassword(false);
                }} className="fas fa-eye-slash"></i>}
            </div>
        </span>
    );
}

Password.propTypes = propTypes;
Password.defaultProps = defaultProps;

export default Password;