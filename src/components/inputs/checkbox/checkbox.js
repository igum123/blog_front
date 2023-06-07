import React, { useRef } from "react";
import PropTypes from 'prop-types';

import styles from "./checkbox.module.css";

const propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    style: PropTypes.shape(PropTypes.any)
};

const defaultProps = {
    className: null,
    style: null,
    disabled: false,
    title: null
};

function Checkbox({ className, style, value, onChange, title, disabled }) {
    const ref = useRef();
    return (
        <span
            className={`${styles.inputContainer} ${value ? styles.active : ''} ${className}`}
            style={style} onClick={() => {
                if (ref && ref.current) {
                    ref.current.click();
                }
            }}>
            <div className={styles.button}>
                <i className="fas fa-check"></i>
            </div>
            <input type="checkbox"
                ref={ref}
                className={styles.input}
                checked={value}
                disabled={disabled}
                onChange={(e) => {
                    onChange(e.target.checked);
                }}
                title={title} />
        </span >
    );
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;