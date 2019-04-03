import React, { useEffect } from 'react';
import axios from 'axios';

function Locked() {
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get("http://localhost:5000/api/restricted/users", { headers: { Authorization: `Bearer: ${token}`} })
            .then(r => console.log(r.data))
            .catch(e => console.log(e))
    }, []);

    return (
        <div>
            hi
        </div>
    );
}

export default Locked;