import React from "react";
import PropTypes from 'prop-types';

import Styles from './container.module.css';

import Article from '../../components/article';
import Pagination from '../../components/pagination';

const propTypes = {
    domaine: PropTypes.string.isRequired,
    articles: PropTypes.shape({
        current: PropTypes.any,
        items: PropTypes.arrayOf(PropTypes.shape({})),
        max: PropTypes.any
    }).isRequired
};

const defaultProps = {
};

function Blog({ domaine, articles }) {
    return (
        <div className={Styles.container}>
            <div className={Styles.articles}>
                {articles && articles.items && articles.items.map((article, index) => {
                    return <Article key={article.id} domaine={`${domaine}`} article={article} img={index < 2} />
                })}
            </div>
            {articles && <Pagination current={parseInt(articles.current)} max={parseInt(articles.max)} url="/blog?page=" />}
        </div>
    );
}

Blog.propTypes = propTypes;
Blog.defaultProps = defaultProps;

export default Blog;