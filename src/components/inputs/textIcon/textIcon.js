import React from "react";
import PropTypes from 'prop-types';

import styles from "./textIcon.module.css";

const propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
    icon: PropTypes.any.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.shape(PropTypes.any),
    onEnter: PropTypes.func,
    type: PropTypes.string
};

const defaultProps = {
    className: null,
    style: null,
    disabled: false,
    placeholder: null,
    title: null,
    onEnter: null,
    type: null
};

function TextIcon({ className, style, type, value, placeholder, onChange, onEnter, title, icon }) {
    return (
        <span
            className={`${styles.inputContainer} ${className}`}
            style={style}>
            <input type={type || "text"}
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
                {icon}
            </div>
        </span>
    );
}

TextIcon.propTypes = propTypes;
TextIcon.defaultProps = defaultProps;

export default TextIcon;