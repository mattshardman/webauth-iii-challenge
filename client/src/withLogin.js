import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const withLogin = (Component) => {

    const WithLogin = props => {
        useEffect(() => {
            const token = localStorage.getItem("token");
            if (token) {
                props.history.replace("/users");
            } else {
                props.history.replace("/login")
            }

        }, []);
    
        return (
            <Component {...props} />
        );
    }

    return withRouter(WithLogin);
}

export default withLogin;