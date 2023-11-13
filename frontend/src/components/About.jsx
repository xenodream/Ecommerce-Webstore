import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 0px;
  background-color: #0a0a0a;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Area = styled.div`
  width: 100%;
  max-width: 1700px;
  /* background-color: aqua; */
  min-height: 650px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftSection = styled.div`
  flex: 1;
  background-color: #0a0a0a;
  padding-top: 20px;
  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
`;
const RightSection = styled.div`
  flex: 1;
  background-image: url("/images/about-img.jpg");
  background-position: center;
  background-size: cover;
  min-height: 550px;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #ececec;
  text-transform: uppercase;
  font-weight: 200;
  /* background-color: pink; */
  height: 90px;
  display: flex;
  align-items: center;
  padding-left: 50px;
  @media (max-width: 768px) {
    font-size: 20px;
    padding-left: 20px;
  }
`;

const UxLine = styled.div`
  height: 0.5px;
  width: 100px;
  background-color: #5c5c5c;
  margin-left: 50px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-left: 20px;
    margin-bottom: 30px;
  }
`;
const Desc = styled.div`
  color: #9b9b9b;
  font-size: 15px;
  text-align: justify;
  line-height: 210%;
  font-weight: 300;
  width: 75%;
  word-spacing: 1px;
  padding-left: 50px;
  @media (max-width: 768px) {
    font-size: 13px;
    padding-left: 20px;
    width: 90%;
  }
`;
const Button = styled.button`
  margin-left: 50px;
  width: 131px;
  height: 46px;
  background-color: #6b6451;
  border: none;
  font-size: 12px;

  color: #f8f8f8;
  font-weight: 300;

  margin-top: 70px;
  @media (max-width: 768px) {
    margin-left: 20px;
    font-size: 10px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const About = () => {
  return (
    <Container>
      <Area>
        <LeftSection>
          <Title>Tworzymy wyjątkowy fashion</Title>
          <UxLine></UxLine>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            mauris commodo quis. Orci nulla pellentesque dignissim enim sit. Sem
            viverra aliquet eget sit amet. Amet porttitor eget dolor morbi non
            arcu risus quis varius. Scelerisque in dictum non consectetur a. Ac
            auctor augue mauris augue. Nulla facilisi nullam vehicula ipsum.
            Netus et malesuada fames ac turpis egestas maecenas pharetra. Nec
            nam aliquam sem et tortor consequat.
          </Desc>
          <Button>STORE</Button>
        </LeftSection>
        <RightSection></RightSection>
      </Area>
    </Container>
  );
};

export default About;
