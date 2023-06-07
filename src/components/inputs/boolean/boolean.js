import React, { useRef } from "react";
import PropTypes from 'prop-types';

import styles from "./boolean.module.css";

const propTypes = {
    title: PropTypes.string,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.shape(PropTypes.any)
};

const defaultProps = {
    className: null,
    style: null,
    title: null
};

function Boolean({ className, style, value, onChange, title }) {
    const ref = useRef();
    return (
        <span
            className={`${styles.inputContainer} ${value ? styles.active : ''} ${className}`}
            style={style} onClick={() => {
                if (ref && ref.current) {
                    ref.current.click();
                }
            }}>
            <div className={styles.button}></div>
            <input type="checkbox"
                ref={ref}
                className={styles.input}
                checked={value}
                onChange={(e) => {
                    onChange(e.target.checked);
                }}
                title={title} />
        </span>
    );
}

Boolean.propTypes = propTypes;
Boolean.defaultProps = defaultProps;

export default Boolean;