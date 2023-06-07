import React, { useCallback } from "react";
import PropTypes from 'prop-types';

import styles from "./container.module.css";

const propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    style: PropTypes.shape(PropTypes.any),
    min: PropTypes.object
};

const defaultProps = {
    className: null,
    style: null,
    disabled: false,
    placeholder: null,
    value: null,
    min: null
};

function Text({ className, style, value, placeholder, onChange, disabled, min }) {
    const twoDigits = useCallback((d) => {
        if (0 <= d && d < 10) return "0" + d.toString();
        if (-10 < d && d < 0) return "-0" + (-1 * d).toString();
        return d.toString();
    }, []);

    const formatDate = useCallback((date) => {
        const dateToFormat = new Date(date);
        return `${dateToFormat.getFullYear()}-${twoDigits(dateToFormat.getMonth() + 1)}-${twoDigits(dateToFormat.getDate())}T${twoDigits(dateToFormat.getHours())}:${twoDigits(dateToFormat.getMinutes())}`;
    }, []);
    return (
        <span
            className={`${styles.inputContainer} ${className} ${disabled ? styles.disable : ''}`}
            style={style}>
            <input type={'datetime-local'}
                className={styles.input}
                disabled={disabled}
                value={formatDate(value)}
                placeholder={placeholder}
                min={min ? formatDate(min) : null}
                onChange={(e) => {
                    const dateTimeArray = e.target.value.split('T');
                    const newDate = new Date(dateTimeArray[0]);
                    const timeSplit = dateTimeArray[1].split(':');
                    newDate.setUTCHours(timeSplit[0]);
                    newDate.setUTCMinutes(timeSplit[1]);
                    onChange(newDate);
                }} />
        </span >
    );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;