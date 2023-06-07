import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Page from '../../src/views/blog';
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

const Index = ({ user, domaine, articles }) => {
    let next = null;
    let previous = null;
    if (articles && parseInt(articles.current) > 0) {
        previous = `/blog?page=${parseInt(articles.current) - 1}`;
    }
    console.log(parseInt(articles.current), articles.max)
    if (articles && parseInt(articles.current) < articles.max - 1) {
        next = `/blog?page=${parseInt(articles.current) + 1}`;
    }
    return (
        <Fragment>
            <Head
                title={`Articles - page ${articles.current + 1}`}
                description={`Liste des articles`}
                url={articles ? `/blog?page=${articles.current}` : "/"}
                img={`${process.env.NEXT_PUBLIC_API}/api/img/${Config.APP_NAME}.jpg`}
                next={next}
                previous={previous}
                domaine={domaine} />
            <div className="body-container">
                <Navigation domaine={domaine} user={user} />
                <Page domaine={domaine} user={user} articles={articles} />
            </div>
        </Fragment>
    );
};


export async function getServerSideProps(ctx) {
    let domaine = process.env.NEXT_PUBLIC_API;
    const opts = { headers: { cookie: ctx.req.headers.cookie } };
    let result = await fetch(`${domaine}/api/v1/blog/articles${ctx.query && ctx.query.page ? `?page=${ctx.query.page}` : ''}`, opts);
    let formatResponse = (await result.json());
    if (formatResponse.error || !formatResponse.data || !formatResponse.data.items || !formatResponse.data.items.length) {
        return {
            notFound: true,
        };
    }
    let articles = formatResponse.data;
    return {
        props: { articles }
    };
}

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default Index;