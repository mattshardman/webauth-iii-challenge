import React, { useState } from "react";
import axios from 'axios';
import styled from "styled-components";

const Form = styled.form`
  width: 500px;
  height: 600px;
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
`;

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/auth/login", { user, password })
        .then(r => {
            localStorage.setItem('token', r.data);
            setUser("");
            setPassword("");
        });
   
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" onChange={e => setUser(e.target.value)} />
      <Input type="text" onChange={e => setPassword(e.target.value)} />
      <button type="submit">login</button>
    </Form>
  );
}

export default Login;
