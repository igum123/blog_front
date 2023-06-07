import React, { useState } from "react";
import PropTypes from 'prop-types';

import styles from './container.module.css';

const propTypes = {
    domaine: PropTypes.string.isRequired
};

const defaultProps = {
};

function Index({ domaine }) {
    return (
        <div className={styles.container}>
            index
        </div>
    );
}

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default Index;