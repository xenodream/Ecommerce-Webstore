import styled from "styled-components";
const Container = styled.div`
  background-color: #998e73;
  color: #000000;
  height: 25px;
  font-size: 12px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 9px;
  }
`;
const Announcement = () => {
  return (
    <Container>
      Subscribe to our newsletter and get -15% coupon code | fashionstore
    </Container>
  );
};

export default Announcement;
