import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

function Header(props) {
    const clickHandler = () => {
        localStorage.removeItem('token');
        props.history.replace("/login");
    }

    return (
        <Container>
            <button onClick={clickHandler}>log out</button>
        </Container>
    );
}

export default Header;