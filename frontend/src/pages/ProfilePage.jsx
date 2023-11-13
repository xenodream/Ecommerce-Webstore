import styled from "styled-components";
import { useUpdateUserMutation } from "../redux/slices/usersApiSlice";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedUser } from "../redux/slices/userSlice";
import { useGetUserQuery } from "../redux/slices/usersApiSlice";
import Orders from "../components/Orders";
const Container = styled.div`
  width: 100%;
  margin-top: 70px;
`;

const Area = styled.div`
  max-width: 1700px;
  /* background-color: blue; */
  margin-left: auto;
  margin-right: auto;
  min-height: 300px;
`;

const Header = styled.div`
  width: 100%;
  min-height: 100px;
  /* background-color: #57524c; */
  font-size: 32px;
  padding-left: 40px;
  box-sizing: border-box;
  font-weight: 500;
  color: white;
  @media (max-width: 410px) {
    padding-left: 20px;
  }
`;

const Loading = styled.div`
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: 200;
`;

const InfoSection = styled.div`
  width: 100%;
  /* background-color: green; */
  min-height: 200px;
  display: flex;
  @media (max-width: 1120px) {
    flex-direction: column;
  }
`;

//Left section
const LeftSection = styled.div`
  flex: 1;
  /* background-color: #396666; */
  color: white;
`;

const Title = styled.div`
  padding-left: 30px;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 20px;
  font-size: 19px;
  margin-top: 50px;
  color: white;
  @media (max-width: 410px) {
    padding-left: 20px;
  }
`;
const Description = styled.div`
  padding-left: 30px;
  font-size: 13px;
  color: #acacac;
  padding-right: 50px;
  font-weight: 300;
  line-height: 1.5;
  @media (max-width: 410px) {
    padding-left: 20px;
  }
`;

const Form = styled.form`
  padding-left: 30px;
  margin-top: 50px;
  @media (max-width: 410px) {
    padding-left: 20px;
  }
`;
const Input = styled.input`
  display: block;
  width: 330px;
  height: 66px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #3d3d3d;
  background-color: transparent;
  font-size: 11px;

  padding-left: 10px;
  color: white;
`;
const InputSubmit = styled.input`
  width: 131px;
  height: 46px;
  font-size: 12px;
  text-transform: uppercase;
  background-color: #6b6451;
  border: none;
  color: white;
  margin-top: 20px;
`;
//Right section
const RightSection = styled.div`
  flex: 1;

  /* background-color: #473821; */
`;

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetUserQuery();
  const { loggedUser } = useSelector((store) => store.user);
  const dbName = loggedUser.name;
  const dbEmail = loggedUser.email;
  const [name, setName] = useState(dbName);
  const [email, setEmail] = useState(dbEmail);
  const [password, setPassword] = useState("");
  const [updateUser] = useUpdateUserMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    const id = data._id;
    const res = await updateUser({ id, name, email, password });

    dispatch(setLoggedUser({ name, email }));
  };

  if (isLoading) {
    return (
      <>
        <Announcement></Announcement>
        <Navbar />
        <Area>
          <Loading>Loading...</Loading>
        </Area>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Announcement></Announcement>
        <Navbar />
        <Area>
          <Loading>Nie można załadować strony</Loading>
        </Area>
      </>
    );
  }

  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <Area>
          <Header>
            <p>Witaj, {data.name}</p>
          </Header>
          <InfoSection>
            <LeftSection>
              <Title>Informacje o kliencie</Title>
              <Description>
                W tej sekcji możesz zweryfikować inforacje podane podczas
                rejestracji. W razie potrzeby możesz zaktualizować dane.
              </Description>
              <Form>
                <Input
                  type="text"
                  placeholder="IMIE"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Input>
                <Input
                  type="text"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Input>
                <Input
                  type="password"
                  placeholder="HASŁO"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Input>
                <InputSubmit
                  type="submit"
                  onClick={submitHandler}
                  value="ZAKTUALIZUJ"
                ></InputSubmit>
              </Form>
            </LeftSection>
            <RightSection>
              <Title>Informacje o zamówieniach</Title>
              <Description>
                W tej sekcji możesz zweryfikować inforacje podane podczas
                rejestracji. W razie potrzeby możesz zaktualizować dane.
              </Description>
              <Orders />
            </RightSection>
          </InfoSection>
        </Area>
      </Container>
    </>
  );
};

export default ProfilePage;
