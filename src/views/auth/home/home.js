import React, { useEffect, useMemo, useState } from "react";
import PropTypes from 'prop-types';

import Styles from './container.module.css';
import ApiService from '../../../services/api';

const propTypes = {
    domaine: PropTypes.string.isRequired
};

const defaultProps = {
};

function Home({ domaine }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        ApiService.get('/api/v1/user').then((response) => {
            setUser(response.response.data);
        })
    }, []);
    const isAdmin = useMemo(() => {
        if (user && user.isAdmin) return true;
        return false;
    }, [user]);
    return (
        <div className={Styles.container}>
            {isAdmin && (
                <a className={Styles.link} href='/auth/blog'>
                    <span className={Styles.text}>
                        Blog
                    </span>
                </a>
            )}
        </div>
    );
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;