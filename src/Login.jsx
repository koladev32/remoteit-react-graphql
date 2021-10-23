import React, {useState} from "react";
import axios from "axios";


const Login = (key, value) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('https://api.remote.it/apv/v27/user/login', {
            username: email,
            password: password
        }, {
            headers: {
                "Content-Type": "application/json",
                "apikey": "QTNGNDRGMEItRkYzOC00N0U3LTg2QkEtRTkxMURBNUNFOTI1"
            }
        }).then( r => {
            localStorage.setItem("username", email);
            localStorage.setItem("authHash", r.data.service_authhash);
        }).catch(e => {
            setError(e.response.data.reason);
        })

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="email"
                    name="username"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    required
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit"/>
            </form>
            {error && <div>{error}</div>}
        </div>
    )
}

export default Login;
