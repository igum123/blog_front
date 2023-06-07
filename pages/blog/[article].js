import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Page from '../../src/views/article';
import Head from '../../src/components/head';
import Config from '../../src/config.json';
import Navigation from '../../src/components/navigation/navigation';

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
                title={article ? article.title : `${Config.APP_NAME}`}
                description={article ? article.description : ``}
                url={article ? `${domaine}/blog/${article.url}` : "/"}
                img={`${process.env.NEXT_PUBLIC_API}/api/img/${article.img}`}
                domaine={domaine}
                css="/article.css" />
            <div className="body-container">
                <Navigation domaine={domaine} user={user} />
                <Page domaine={domaine} user={user} article={article} />
            </div>
        </Fragment>
    );
};


export async function getServerSideProps(ctx) {
    let domaine = process.env.NEXT_PUBLIC_API;
    const opts = { headers: { cookie: ctx.req.headers.cookie } };
    const articleUrl = ctx.req.url.substring(ctx.req.url.lastIndexOf('/') + 1);
    let result = await fetch(`${domaine}/api/v1/blog/article/${articleUrl}`, opts);
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