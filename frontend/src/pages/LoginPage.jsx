import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useState } from "react";
import { useLoginUserMutation } from "../redux/slices/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedUser } from "../redux/slices/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
`;

const Area = styled.div`
  max-width: 1700px;
  min-height: 600px;
  /* background-color: aqua; */
  margin-left: auto;
  margin-right: auto;
`;

const LoginContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  min-height: 100px;
  /* background-color: #727272; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  color: white;
  padding-top: 20px;
  padding-bottom: 40px;
  /* border: 1px solid #3d3d3d; */
`;
const Title = styled.h1`
  font-size: 32px;
  /* background-color: bisque; */
  display: flex;
  justify-content: center;
  font-weight: 500;
`;
const Description = styled.p`
  font-size: 12px;
  display: flex;
  justify-content: center;
  /* background-color: blue; */
  font-weight: 200;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  color: #8a8a8a;
`;
const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;
const Input = styled.input`
  max-width: 600px;
  height: 70px;
  margin-bottom: 15px;
  background-color: transparent;
  border: 1px solid #3d3d3d;
  border-radius: 3px;
  width: 90%;
  padding-left: 10px;
  color: white;
`;

const SubmitInput = styled.input`
  background-color: white;
  width: 111px;
  height: 41px;
  background-color: #998e73;
  color: white;
  border: none;
  text-transform: uppercase;
  margin-top: 30px;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useLoginUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await loginUser({ email, password }).unwrap();
      dispatch(setLoggedUser(response));
      navigate("/");
    } catch (err) {
      toast.error(err.data);
    }
  };
  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <Area>
          <LoginContainer>
            <Title>Log in</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Description>
            <AuthForm onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></Input>
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></Input>
              <SubmitInput type="submit" value="login"></SubmitInput>
              <ToastContainer
                progressClassName="toastProgress"
                bodyClassName="toastBody"
              />
            </AuthForm>
          </LoginContainer>
        </Area>
      </Container>
      <Footer />
    </>
  );
};

export default LoginPage;
