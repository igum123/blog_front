import React, { Fragment } from 'react';
import DefaultApp from 'next/app';
import PropTypes from 'prop-types';
import '../styles/default.css';
import '../public/lib/fontawesome/css/all.min.css';

const propTypes = {
    Component: PropTypes.any.isRequired,
    pageProps: PropTypes.shape({

    }).isRequired
};

const defaultProps = {
};

function MyApp({ Component, pageProps }) {
    return <Fragment>
        <Component {...pageProps} />
    </Fragment>;
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await DefaultApp.getInitialProps(appContext);
    let domaine = process.env.NEXT_PUBLIC_DOMAIN;
    return { pageProps: { ...appProps.pageProps, domaine } };
};

MyApp.propTypes = propTypes;
MyApp.defaultProps = defaultProps;

export default MyApp;