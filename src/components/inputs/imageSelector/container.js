import React, { useRef, useState } from "react";
import PropTypes from 'prop-types';

import Styles from './container.module.css';
import Api from "../../../services/api";

const propTypes = {
    onChange: PropTypes.func.isRequired,
    url: PropTypes.string,
    disabled: PropTypes.bool
};

const defaultProps = {
    url: undefined,
    disabled: false
};

function ImageSelector({ url, onChange, disabled }) {
    const [img, setImgIntern] = useState();
    const inputRef = useRef();
    return (
        <div className={Styles.container} onClick={() => {
            if (disabled) return;
            if (inputRef.current) {
                inputRef.current.click();
            }
        }} >
            <input
                ref={inputRef}
                className={Styles.input}
                type="file"
                onChange={(e) => {
                    const file = e.target.files[0];
                    setImgIntern(file);
                    onChange(file);
                }} />
            {(!!img || url) && (
                <div className={Styles.imgContainer}>
                    <img crossOrigin="true" src={img ? URL.createObjectURL(img) : `${Api.apiUrl}/api/img/${url}`} />
                </div>
            )}
            <div className={Styles.textContainer}>
                {!img && (<p>Clique ici pour choisir une image (300 pixels x 300 pixels)</p>)}
                {!!img && (<p>Clique ici pour modifier l'image (300 pixels x 300 pixels)</p>)}
            </div>
        </div >
    );
}

ImageSelector.propTypes = propTypes;
ImageSelector.defaultProps = defaultProps;

export default ImageSelector;