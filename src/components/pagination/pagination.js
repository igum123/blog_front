import React, { useMemo } from "react";
import PropTypes from 'prop-types';

import Styles from './container.module.css';

const propTypes = {
    current: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
};

const defaultProps = {
    user: null
};

function Pagination({ current, max, url }) {
    const pageToShow = useMemo(() => {
        let result = [];
        let start = Math.max(0, current - 3);
        let finish = Math.min(Math.max(5, current + 2), max);
        for (let i = start; i < finish; i++) {
            result.push(i);
        }
        return result;
    }, [current]);
    return (
        <div className={Styles.container}>
            {current > 0 && (
                <a className={Styles.number} href={`${url}${current - 1}`}>
                    <i className="fa-solid fa-chevron-left"></i>
                </a>
            )}
            {pageToShow && pageToShow.map((pageNb) => {
                return (
                    <a key={pageNb} className={`${Styles.number} ${pageNb === current ? Styles.selected : ''}`} href={`${url}${pageNb}`}>
                        {pageNb + 1}
                    </a>
                );
            })}

            {current < max - 1 && (
                <a className={Styles.number} href={`${url}${current + 1}`}>
                    <i className="fa-solid fa-chevron-right"></i>
                </a>
            )}
        </div>
    );
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;