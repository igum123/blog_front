import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Page from '../../../src/views/auth/article';
import Head from '../../../src/components/head';
import Navigation from '../../../src/components/navigation/navigation';

const propTypes = {
    domaine: PropTypes.string.isRequired,
    user: PropTypes.shape({

    })
};

const defaultProps = {
    user: null
};

const Index = ({ user, domaine, article }) => {
    return (
        <Fragment>
            <Head
                title={`Administration`}
                description={`description`}
                img={'/img/logo.pnj'}
                url={"/"}
                domaine={domaine} />
            <div className="body-container">
                <Navigation domaine={domaine} user={user} />
                <Page domaine={domaine} user={user} articles={article} />
            </div>
        </Fragment>
    );
};


export async function getServerSideProps(ctx) {
    let domaine = process.env.NEXT_PUBLIC_API;
    const opts = { headers: { token: ctx.req.cookies['Acbvhz345dJZv'] } };
    let result = await fetch(`${domaine}/api/v1/blog/articles`, opts);
    let formatResponse = (await result.json());
    if (formatResponse.error) {
        return {
            notFound: true,
        };
    }
    let article = formatResponse.data;
    return {
        props: { article }
    };
}

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default Index;