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
    const [showBlog, setShowBlog] = useState(false);
    useEffect(() => {
        Api.get('/api/v1/blog/articles').then((response) => {
            if (response.response.data.items.length > 0) {
                setShowBlog(true);
            }
        });
    }, []);
    return (
        <div className={Styles.container}>
            <a className={Styles.imgContainer} href={`${domaine}`}>
                <img className={Styles.logo} src={`${domaine}/img/logo_white.png`} alt="Logo MeetCo" />
            </a>
            {showBlog && <nav className={Styles.nav}>
                <a className={Styles.link} href={`${domaine}/blog`}>BLOG</a>
            </nav>}
        </div>
    );
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default Navigation;