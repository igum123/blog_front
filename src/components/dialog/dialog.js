import React from "react";
import PropTypes from 'prop-types';

import styles from "./dialog.module.css";

const propTypes = {
    showing: PropTypes.bool.isRequired,
    className: PropTypes.string,
    close: PropTypes.func.isRequired,
    showCloseBtn: PropTypes.bool
};

const defaultProps = {
    className: null,
    showCloseBtn: true
};

function Dialog({ showing, close, className, showCloseBtn, children }) {

    return (
        <div className={`${styles.dialog} ${showing ? styles.show : ''}`} onClick={() => {
            close();
        }}>
            <div className={`${styles.dialogContent} ${className ? className : ''}`} onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}>
                {showCloseBtn && <div className={styles.close} onClick={close}><i className="fa-solid fa-xmark"></i></div>}
                {children}
            </div>
        </div>
    );
}

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;