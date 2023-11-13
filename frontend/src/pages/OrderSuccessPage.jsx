import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Area = styled.div`
  max-width: 1700px;
  margin-left: auto;
  margin-right: auto;
`;
const SuccessTitle = styled.h1`
  text-align: center;
  color: white;
  font-weight: 200;
`;
const SuccessDescription = styled.p`
  font-weight: 200;
  color: #bebebe;
  text-align: center;
  padding: 20px;
  line-height: 1.5;
  word-spacing: 1px;
`;
const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  width: 131px;
  height: 46px;
  font-size: 12px;
  background-color: #6b6451;
  color: white;
  font-weight: 200;
  margin: 5px;
  border: none;
  border-radius: 2px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
const OrderSuccessPage = () => {
  const { loggedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  return (
    <Container>
      <Area>
        <SuccessTitle>Dziękujemy za złożone zamówienie</SuccessTitle>
        <SuccessDescription>
          Wysłaliśmy potwierdzenie zamówienia Twój email {loggedUser.email}{" "}
          Wszystkie zamówione produkty w Fashionstore możesz również znaleźć na
          swoim profilu w sekcji zamówienia. Mamy nadzieję że zamówienie spełni
          Twoje oczekiwania. Pozdrawiamy, zespół Fashionstore.
        </SuccessDescription>
        <ButtonContainer>
          <StyledLink to="/">
            <Button onClick={clearCartHandler}>HOME</Button>
          </StyledLink>
        </ButtonContainer>
      </Area>
    </Container>
  );
};

export default OrderSuccessPage;
