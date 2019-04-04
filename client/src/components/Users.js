import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get("http://localhost:5000/api/restricted/users", { headers: { Authorization: `Bearer: ${token}`} })
            .then(r => setUsers(r.data))
            .catch(e => console.log(e))
    }, []);

    return (
        <div>
           Users: { users.map(each => <p>{each.user}</p>)}
        </div>
    );
}

export default Users;
