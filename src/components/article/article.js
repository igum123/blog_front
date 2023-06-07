import React from "react";
import PropTypes from 'prop-types';

import Styles from './container.module.css';
import Api from '../../services/api';

const propTypes = {
    domaine: PropTypes.string.isRequired,
    article: PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
    }).isRequired,
    img: PropTypes.bool
};

const defaultProps = {
    img: false
};

function Article({ domaine, article, img }) {
    return (
        <article className={Styles.container}>
            {img && article.img && (
                <div className={Styles.imgContainer}>
                    <img className={Styles.img} crossOrigin="anonymous" src={`${Api.apiUrl}/api/img/${article.img}`} alt={article.title} />
                </div>
            )}
            <h2 className={Styles.title}><a className={Styles.link} href={`${domaine}/blog/${article.url}`}>{article.title}</a></h2>
            <p className={Styles.description}>{article.description}</p>
        </article>
    );
}

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;