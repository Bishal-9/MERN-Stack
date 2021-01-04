import React, { useState } from 'react'
import axios from 'axios'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function login(event) {
        event.preventDefault();

        var user = {
            username: username,
            password: password
        }

        axios.post('/api/user/login', user)
        .then(res => {
            console.log(res)
            alert(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <div>            
            <form onSubmit={login}>
                <h1>Login</h1>
                <input type="text" placeholder="Username" className="form-control" value={username} onChange={e => {setUsername(e.target.value)}} />
                <input type="text" placeholder="Password" className="form-control" value={password} onChange={e => {setPassword(e.target.value)}} />
                <input type="submit" value="Login" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default Login;