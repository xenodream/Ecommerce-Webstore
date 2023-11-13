import styled from "styled-components";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-image: url("/images/background.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 900px;
`;

const TitleSection = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: aqua; */
`;
const Title = styled.h1`
  color: white;
  font-size: 80px;
  font-weight: 100;
  letter-spacing: 2px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
const Desc = styled.p`
  margin-top: 0px;
  text-transform: uppercase;
  font-size: 11px;
  color: white;
  letter-spacing: 0.5px;
  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

const ButtonsSection = styled.div`
  /* background-color: orange; */
  min-height: 100px;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  width: 131px;
  height: 46px;
  font-size: 12px;
  background-color: ${(props) => (props.$primary ? "#6b6451" : "transparent")};
  border: ${(props) => (props.$primary ? "none" : "2px solid white")};
  color: white;
  font-weight: 200;
  margin: 5px;
  border-radius: 2px;
  @media (max-width: 768px) {
    font-size: 10px;
    border: ${(props) => (props.$primary ? "none" : "1px solid white")};
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Banner = () => {
  return (
    <Container>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <TitleSection>
        <Title>FASHIONSTORE</Title>
        <Desc>get the best high quality clothes | from designers</Desc>
      </TitleSection>
      <ButtonsSection>
        <Button>ABOUT</Button>
        <Button $primary>
          <StyledLink to="/products">STORE</StyledLink>
        </Button>
      </ButtonsSection>
    </Container>
  );
};

export default Banner;
