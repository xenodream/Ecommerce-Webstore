import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setShipping } from "../redux/slices/shippingSlice";
import { useNavigate } from "react-router-dom";

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

const ShippingScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(setShipping({ address, city, postalCode, phone }));
    navigate("/checkout");
  };
  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <Area>
          <LoginContainer>
            <Title>Shipping address</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Description>
            <AuthForm onSubmit={submitFormHandler}>
              <Input
                required
                type="text"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              ></Input>
              <Input
                required
                type="text"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
              ></Input>
              <Input
                required
                type="text"
                placeholder="Postal Code"
                onChange={(e) => setPostalCode(e.target.value)}
              ></Input>
              <Input
                required
                type="text"
                placeholder="Phone number"
                onChange={(e) => setPhone(e.target.value)}
              ></Input>

              <SubmitInput type="submit" value="Checkout"></SubmitInput>
            </AuthForm>
          </LoginContainer>
        </Area>
      </Container>
      <Footer />
    </>
  );
};

export default ShippingScreen;
