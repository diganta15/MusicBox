import React from 'react';
import axios from 'axios';
import qs from 'qs';

const Login = () => {

    


    const login = async (e) => {
        e.preventDefault();

        const client_id = 'ff026312e7424829886cec729e575da6';
        const client_secret = '5a2308811ff4404f96251cc88cc81b0c';
        

        const headers = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: client_id,
                password: client_secret,
            },
        };

        const data = {
            grant_type: 'client_credentials',
        };



        try {
            const response = await axios.post(
                'https://accounts.spotify.com/api/token',
                qs.stringify(data),
                headers
            );
            console.log(response.data.access_token);
            return response.data.access_token;
        } catch (error) {
            console.log(error);
        }


    }

    return (
        <div>
            <h1>Login To Spotify</h1>
                <button onClick={login}>Log In</button>
        </div>
    )
}

export default Login
