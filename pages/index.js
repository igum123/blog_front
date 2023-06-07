import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Page from '../src/views/index';
import Head from '../src/components/head';
import Config from '../src/config.json';
import Navigation from '../src/components/navigation/navigation';

const propTypes = {
    domaine: PropTypes.string.isRequired
};

const defaultProps = {
};

const Index = ({ domaine }) => {
    return (
        <Fragment>
            <Head
                title={`${Config.APP_NAME}`}
                description={`Apprenez à créer vos jeux vidéos`}
                url="/"
                img={`${process.env.NEXT_PUBLIC_API}/api/img/${Config.APP_NAME}.jpg`}
                domaine={domaine} />
            <div className="body-container">
                <Navigation domaine={domaine} />
                <Page domaine={domaine} />
            </div>
        </Fragment>
    );
};

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default Index;