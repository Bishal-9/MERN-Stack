import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Userslist() {

    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        axios.post('/api/user/getUsers')
        .then(res => {
            console.log(res)
            setUsersList(res.data)   
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const usersData = usersList.map((user) => {
        return(
            <tr>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
            </tr>
        )
    })

    return(
        <div>
            <h1>Userslist</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                {usersData}
            </table>
        </div>
    )
}

export default Userslist