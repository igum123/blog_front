import React, { useState } from "react";
import { setCookies } from 'cookies-next';

import Styles from './container.module.css';

import Text from '../../components/inputs/text';
import Password from '../../components/inputs/password';
import Button from '../../components/inputs/button';
import Api from '../../services/api';



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className={Styles.container}>
            <Text placeholder="Email" value={email} onChange={setEmail} />
            <Password placeholder="Password" value={password} onChange={setPassword} />

            <Button onClick={() => {
                Api.post('/api/v1/login', { email, password }).then((response) => {
                    setCookies('Acbvhz345dJZv', response.response.data);
                    window.location = '/auth';
                })
            }}>Se connecter</Button>
        </div>
    );
}

export default Login;