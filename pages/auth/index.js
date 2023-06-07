import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Page from '../../src/views/auth/home';
import Head from '../../src/components/head';
import Navigation from '../../src/components/navigation/navigation';

const propTypes = {
    domaine: PropTypes.string.isRequired,
    user: PropTypes.shape({

    })
};

const defaultProps = {
    user: null
};

const Index = ({ user, domaine }) => {
    return (
        <Fragment>
            <Head
                title={`Administration`}
                description={`Home`}
                img={'/img/logo.pnj'}
                url={"/"}
                domaine={domaine} />
            <div className="body-container">
                <Navigation domaine={domaine} user={user} />
                <Page domaine={domaine} user={user} />
            </div>
        </Fragment>
    );
};

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default Index;