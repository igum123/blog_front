import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Page from '../src/views/404';
import Head from '../src/components/head';
import Config from '../src/config.json';
import Navigation from '../src/components/navigation/navigation';

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
                title={`${Config.APP_NAME}`}
                description={`Créez et gérez facilement vos sondages`}
                url="/"
                img={`${process.env.NEXT_PUBLIC_API}/api/img/${Config.APP_NAME}.jpg`}
                domaine={domaine} />
            <div className="body-container">
                <Navigation domaine={domaine} user={user} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%", height: 'calc(100vh - 50px)', fontWeight: 'bold' }}>Page non trouvée !</div>
            </div>
        </Fragment>
    );
};

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default Index;