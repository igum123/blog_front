import React, { useState } from "react";
import PropTypes from 'prop-types';

const propTypes = {
    domaine: PropTypes.string.isRequired
};

const defaultProps = {
};

function Error404({ domaine }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%", height: 'calc(100vh - 50px)', fontWeight: 'bold' }}>Page non trouvée !</div>
    );
}

Error404.propTypes = propTypes;
Error404.defaultProps = defaultProps;

export default Error404;