import React from "react";
import PropTypes from 'prop-types';

import Styles from './container.module.css';

const propTypes = {
    domaine: PropTypes.string.isRequired,
    user: PropTypes.shape({}),
    article: PropTypes.shape({

    })
};

const defaultProps = {
    user: null,
    article: null
};

function Article({ domaine, user, article }) {
    return (
        <div className={Styles.container}>
            {article && <div dangerouslySetInnerHTML={{ __html: article.content }}></div>}
        </div>
    );
}

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;