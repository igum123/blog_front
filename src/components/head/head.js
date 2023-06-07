import React from "react";
import PropTypes from 'prop-types';
import Head from 'next/head';

const propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    domaine: PropTypes.string.isRequired,
    next: PropTypes.string,
    previous: PropTypes.string,
    noFollow: PropTypes.bool
};

const defaultProps = {
    next: null,
    previous: null,
    noFollow: false
};

function HeadInfos({ title, description, url, img, domaine, next, previous, noFollow, css }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />

            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <link rel="icon" type="image/png" href={`${domaine}/img/favicon.png`} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${domaine}${url}`} />
            <meta property="og:title" content={title} />
            <meta property="og:description"
                content={description} />
            <meta property="og:image" content={`${img}`} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`${domaine}${url}`} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description"
                content={description} />
            <meta property="twitter:image" content={`${img}`} />

            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link rel="canonical" href={`${domaine}${url}`} />
            {previous && <link rel="prev" href={`${domaine}${previous}`} />}
            {next && <link rel="next" href={`${domaine}${next}`} />}
            {noFollow && <meta name="robots" content="noindex" />}
            <meta name="facebook-domain-verification" content="mxmlhqk45atxhbxmj7lqrzmk0fyg1y" />
            {css && <link rel="stylesheet" href={css}></link>}
        </Head>
    );
}

HeadInfos.propTypes = propTypes;
HeadInfos.defaultProps = defaultProps;

export default HeadInfos;