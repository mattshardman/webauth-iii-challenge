import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  box-sizing: border-box;
  width: 400px;
  height: 400px;
  border: 1px rgb(218, 220, 224) solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const SignInButton = styled.div`
  width: 80%;
  height: 40px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
`;

function SignUp(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:5000/api/auth/register",
        { user, password, department }
      );
      localStorage.setItem("token", result.data);
      props.history.replace("/users");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <Input
          type="department"
          placeholder="Department"
          value={department}
          onChange={e => setDepartment(e.target.value)}
        />
        <Button type="submit">Create Account</Button>
        <SignInButton>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#484848" }}
          >
            Log In
          </Link>
        </SignInButton>
      </Form>
    </Container>
  );
}

export default SignUp;
