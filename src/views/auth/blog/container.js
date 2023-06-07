import React from "react";
import PropTypes from 'prop-types';

import Styles from './container.module.css';

import Article from '../../../components/article';
import Pagination from '../../../components/pagination';
import Button from '../../../components/inputs/button';

const propTypes = {
    domaine: PropTypes.string.isRequired,
    user: PropTypes.shape({}),
    articles: PropTypes.shape({
        current: PropTypes.number,
        items: PropTypes.arrayOf(PropTypes.shape({})),
        ax: PropTypes.number
    }).isRequired
};

const defaultProps = {
    user: null
};

function Blog({ domaine, user, articles }) {
    return (
        <div className={Styles.container}>
            <div className={Styles.btn}>
                <Button onClick={() => {
                    window.location = '/auth/blog/newArticle';
                }}>Créer un nouvel article</Button>
            </div>
            <div className={Styles.articles}>
                {articles && articles.items && articles.items.map((article, index) => {
                    return <Article key={article.id} domaine={`${domaine}/auth`} article={article} img={index < 2} />
                })}
            </div>
            {articles && <Pagination current={parseInt(articles.current)} max={parseInt(articles.max)} url="/auth/blog?page=" />}
        </div>
    );
}

Blog.propTypes = propTypes;
Blog.defaultProps = defaultProps;

export default Blog;