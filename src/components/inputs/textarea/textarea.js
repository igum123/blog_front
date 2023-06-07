import React from "react";
import PropTypes from 'prop-types';

import styles from "./textarea.module.css";

const propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    placeholder: PropTypes.string
};

const defaultProps = {
    className: null,
    placeholder: null,
    title: null,
    value: ''
};

function TextArea({ value, placeholder, onChange, title, className }) {
    function getNumberOfLines(text) {
        if (!text) text = '';
        var lines = text.split(/\r|\r\n|\n/);
        return lines.length;
    }
    return (
        <textarea
            style={{ height: Math.max(getNumberOfLines(value) * 25, 3 * 25) }}
            className={`${styles.textarea} ${className ? className : ''}`}
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
                onChange(e.target.value);
            }}
            title={title} />
    );
}

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;