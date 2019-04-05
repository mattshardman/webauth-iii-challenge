import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  position: relative;
  box-sizing: border-box;
  width: 400px;
  height: 400px;
  border: 1px rgb(218, 220, 224) solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 80%;
  height: 40px;
  border: 1px rgb(218, 220, 224) solid;
  padding: 0 15px;
  border-radius: 5px;
  outline: none;
  margin: 10px 0;
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 80%;
  height: 40px;
  background: #1a73e8;
  border-radius: 5px;
  border: none;
  margin: 10px 0;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const SignUpButton = styled.div`
  width: 80%;
  height: 40px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
`;

function Login(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post("http://localhost:5000/api/auth/login", {
        user,
        password
      });
      localStorage.setItem("token", result.data);
      setUser("");
      setPassword("");
      props.history.replace("/users");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div style={{ width: "100%", position: "absolute", top: 0 }}>
          {loading && <LinearProgress style={{ flexGrow: 1 }} />}
        </div>
        <h2>Log In</h2>
        <Input
          type="text"
          placeholder="Username"
          onChange={e => setUser(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
        <SignUpButton>
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#484848" }}
          >
            Create Account
          </Link>
        </SignUpButton>
      </Form>
    </Container>
  );
}

export default Login;
