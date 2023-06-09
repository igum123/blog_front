import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import Styles from './container.module.css';
import Api from '../../services/api';

import Dialog from '../../components/dialog';
import Text from '../../components/inputs/text';
import Button from '../../components/inputs/button';

const propTypes = {
    directShow: PropTypes.bool
};

const defaultProps = {
    directShow: false
};

function Newsletters({ directShow }) {
    const [show, setShow] = useState(false);
    const [showThanks, setShowThanks] = useState(false);
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [error, setError] = useState('');
    useEffect(() => {
        let timeout = setTimeout(() => {
            setShow(true);
        }, 1000 * 5);
        return () => {
            clearTimeout(timeout);
        }
    }, []);

    useEffect(() => {
        if (directShow) {
            setShow(true);
        }
    }, [directShow]);
    return (
        <Dialog className={Styles.container} showCloseBtn showing={show} close={() => {
            setShow(false);
            setError('');
            setShowThanks('');
        }}>
            {!showThanks && (
                <div>
                    <p>Reçois des informations sur le développement de jeux-vidéo</p>
                    <Text className={Styles.input} value={email} onChange={(value) => setEmail(value)} placeholder="Email" />
                    <Text className={Styles.input} value={firstname} onChange={(value) => setFirstname(value)} placeholder="Prénom" />
                    <p className={Styles.error}>{error}</p>
                    <Button className={Styles.btn} onClick={() => {
                        if (email && firstname) {
                            Api.post('/api/v1/newsletters', { email, firstname }).then(() => {
                                setShowThanks(true);
                            });
                        } else {
                            setError('Tu dois rentrer ton email et ton prénom');
                        }
                    }}>Je veux recevoir des conseils sur le développement de jeux-vidéo</Button>
                </div>
            )}
            {showThanks && (
                <div>
                    <p>Merci de t'être inscris, tu recevras tous les lundi un mail avec des conseils sur le dev de jeux-vidéo.</p>
                    <p>Si tu n'as pas reçu de mail, regarde dans tes spams ou dans l'onglet promotion</p>
                    <Button onClick={() => {
                        setEmail('');
                        setFirstname('');
                        setShow(false);
                        setError('');
                        setShowThanks('');
                    }}>Fermer</Button>
                </div>
            )}
        </Dialog>
    );
}

Newsletters.propTypes = propTypes;
Newsletters.defaultProps = defaultProps;

export default Newsletters;