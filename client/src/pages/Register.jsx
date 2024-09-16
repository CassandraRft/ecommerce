import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("./media/background.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatching the register thunk action
    dispatch(register({
      name: inputs.name,
      lastName: inputs.lastName,
      username: inputs.username,
      email: inputs.email,
      password: inputs.password,
    }));
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            value={inputs.name}
            onChange={handleChange}
            placeholder="name"
          />
          <Input
            name="lastName"
            value={inputs.lastName}
            onChange={handleChange}
            placeholder="last name"
          />
          <Input
            name="username"
            value={inputs.username}
            onChange={handleChange}
            placeholder="username"
          />
          <Input
            name="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="email"
            type="email"
          />
          <Input
            name="password"
            value={inputs.password}
            onChange={handleChange}
            placeholder="password"
            type="password"
          />
          <Input
            name="confirmPassword"
            value={inputs.confirmPassword}
            onChange={handleChange}
            placeholder="confirm password"
            type="password"
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;