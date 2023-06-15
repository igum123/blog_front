import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import Styles from './container.module.css';

import Api from '../../services/api';

const propTypes = {
    domaine: PropTypes.string.isRequired,
    user: PropTypes.shape({})
};

const defaultProps = {
    user: null
};

function Navigation({ domaine, user }) {
    return (
        <div className={Styles.container}>
            <a className={Styles.imgContainer} href={`${domaine}`}>
                {false && <img className={Styles.logo} src={`${domaine}/img/logo_white.png`} alt="Logo MeetCo" />}
                <p className={Styles.title}>LOWEN-GAME</p>
            </a>
            <nav className={Styles.nav}>
                <a className={Styles.link} href={`${domaine}/blog`}>BLOG</a>
            </nav>
        </div>
    );
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default Navigation;