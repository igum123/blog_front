import React from "react";
import PropTypes from 'prop-types';

import styles from "./colorPicker.module.css";

const propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

const defaultProps = {
};

function ColorPicker({ value, onChange }) {
    return (
        <div className={styles.container}>
            <input className={styles.colorInput} type="color" value={value} onChange={(e) => {
                onChange(e.target.value);
            }} />
            <input className={styles.textInput} maxLength="7" type="text" value={value} onChange={(e) => {
                onChange(e.target.value.substr(0, 7));
            }} />
        </div>
    );
}

ColorPicker.propTypes = propTypes;
ColorPicker.defaultProps = defaultProps;

export default ColorPicker;