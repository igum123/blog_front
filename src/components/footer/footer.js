import React from "react";
import PropTypes from 'prop-types';

import styles from "./container.module.css";
import Config from "../../config.json";

const propTypes = {
    domaine: PropTypes.string.isRequired
};

const defaultProps = {
};

function Footer({ domaine }) {
    return (
        <div className={styles.footer} >
            <p className={styles.item}>Copyright © 2021 | {Config.APP_NAME}</p>
            <a className={styles.item} href={`${domaine}/mentions-legales`}>Mentions légales</a>
            <a className={styles.item} href={`${domaine}/politiques-de-confidentialite`}>Politiques de confidentialité</a>
        </div >
    );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;