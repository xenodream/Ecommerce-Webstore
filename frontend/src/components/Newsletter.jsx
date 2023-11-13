import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Area = styled.div`
  width: 100%;
  max-width: 1700px;
  /* background-color: aqua; */
  min-height: 650px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;
const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #eeeeee;
  @media (max-width: 1050px) {
    flex-direction: column;
    padding-bottom: 120px;
  }
`;
const LeftSection = styled.div`
  flex: 1;
  background-image: url("/images/newsletter.jpg");
  background-position: center;
  background-size: cover;
  min-height: 550px;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #1b1b1b;
  text-transform: uppercase;
  font-weight: 200;
  /* background-color: pink; */
  height: 90px;
  display: flex;
  align-items: center;
  padding-left: 80px;
  @media (max-width: 1050px) {
    font-size: 24px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;

const UxLine = styled.div`
  height: 1px;
  width: 100px;
  background-color: #444444;
  margin-left: 80px;
  margin-bottom: 50px;
  @media (max-width: 1050px) {
    margin-left: auto;
    margin-right: auto;
    width: 15px;
    margin-bottom: 20px;
    font-weight: 600;
  }
`;
const Desc = styled.div`
  color: #000000;
  font-size: 15px;
  text-align: justify;
  line-height: 192%;
  font-weight: 200;
  max-width: 520px;
  padding-left: 80px;
  @media (max-width: 1050px) {
    padding-left: 30px;
    padding-right: 30px;
    margin-left: auto;
    margin-right: auto;
    font-size: 13px;
    line-height: 180%;
  }
`;

const InputSection = styled.div`
  height: 100px;
  margin-left: 80px;
  max-width: 810px;

  height: 66px;
  margin-top: 80px;
  display: flex;
  @media (max-width: 1050px) {
    margin-left: auto;
    margin-right: auto;
    /* background-color: aqua; */
  }
`;
const Button = styled.button`
  width: 150px;
  height: 66px;
  background-color: transparent;
  border: 1px solid #3d3d3d;

  color: #0a0a0a;
  font-weight: 300;
  border-radius: 5px;
  margin-left: 10px;
  @media (max-width: 1050px) {
    max-width: 100px;
  }
`;

const Input = styled.input`
  width: 324px;
  height: 62px;
  border: none;
  border: 1px solid #3d3d3d;
  border-radius: 5px;
  background-color: transparent;
  @media (max-width: 1050px) {
    max-width: 230px;
  }
`;
const Newsletter = () => {
  return (
    <Container>
      <Area>
        <RightSection>
          <Title>Odbierz kupon rabatowy - 15%</Title>
          <UxLine></UxLine>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            mauris commodo quis. Sit amet mauris commodo quis.
          </Desc>
          <InputSection>
            <Input></Input>
            <Button>SUBMIT</Button>
          </InputSection>
        </RightSection>
        <LeftSection></LeftSection>
      </Area>
    </Container>
  );
};

export default Newsletter;
