import React, { useState } from 'react'
import axios from 'axios'

function Register() {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function register(event) {
        event.preventDefault();

        var user = {
            name: name,
            username: username,
            password: password
        }

        axios.post('/api/user/register', user)
        .then(res => {
            console.log(res)
            alert(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <div>            
            <form onSubmit={register}>
                <h1>Register</h1>
                <input type="text" placeholder="Name" className="form-control" value={name} onChange={e => {setName(e.target.value)}} />
                <input type="text" placeholder="Username" className="form-control" value={username} onChange={e => {setUsername(e.target.value)}} />
                <input type="text" placeholder="Password" className="form-control" value={password} onChange={e => {setPassword(e.target.value)}} />
                <input type="submit" value="Register" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default Register;