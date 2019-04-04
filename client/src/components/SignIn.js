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

function SignIn(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/api/auth/login", { user, password })
        localStorage.setItem('token', result.data);
        setUser("");
        setPassword("");
        props.history.replace("/users")
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" onChange={e => setUser(e.target.value)} />
      <Input type="text" onChange={e => setPassword(e.target.value)} />
      <button type="submit">login</button>
    </Form>
  );
}

export default SignIn;
