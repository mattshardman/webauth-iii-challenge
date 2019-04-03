import React, { useEffect } from 'react';
import axios from 'axios';

function Locked() {
    useEffect(() => {
        console.log(localStorage.getItem('token'))
    }, []);
    
    return (
        <div>
            hi
        </div>
    );
}

export default Locked;