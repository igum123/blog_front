import React from "react";
import PropTypes from 'prop-types';

import styles from "./button.module.css";

const propTypes = {
    style: PropTypes.shape(PropTypes.any),
    onClick: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
    danger: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    title: PropTypes.string
};

const defaultProps = {
    className: null,
    title: null,
    danger: false,
    disabled: false
};

function Button({ onClick, danger, className, disabled, title, children, style }) {
    return (
        <button
            onClick={(e) => {
                onClick(e);
            }}
            style={style}
            className={`${styles.btn} ${danger ? styles.danger : ''} ${className}`}
            disabled={disabled}
            title={title} >
            {children}
        </button>
    );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;