import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { changeQuantity } from "../redux/slices/cartSlice";

const Container = styled.div`
  color: white;
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Area = styled.div`
  box-sizing: border-box;
  max-width: 1700px;
  width: 100%;
  /* background-color: beige; */
  min-height: 200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding-left: 20px;
  margin-top: 60px;
  margin-bottom: 100px;
  @media (max-width: 1150px) {
    flex-direction: column;
    padding-right: 20px;
  }
`;

const ProductSection = styled.div`
  flex: 1;
  /* background-color: #3f3f3f; */
  min-height: 400px;
`;

const Button = styled.button`
  width: 111px;
  height: 41px;
  background-color: #998e73;
  border: none;
  font-size: 11px;
  color: white;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    border: 1px solid #998e73;
    background-color: transparent;
    color: #998e73;
  }
`;

//Product List

const ProductList = styled.div`
  width: 100%;
  max-width: 500px;
  /* background-color: aquamarine; */
  min-height: 200px;
  margin-top: 50px;
  transition: 1.3s;
`;

const ProductItem = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  margin-top: 40px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #131313;
  }
`;

const ImageSection = styled.div`
  width: 160px;
  height: 160px;
  /* background-color: aqua; */
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const DetailsSection = styled.div`
  /* background-color: #5656a7; */
  width: 300px;
  height: 160px;
  padding-left: 20px;
`;

const ProductName = styled.div`
  width: 100%;
  /* background-color: #15835e; */
  height: 20px;
  font-size: 12px;
  font-weight: 300;
  margin-top: 10px;
`;
const ProductID = styled.div`
  width: 100%;
  /* background-color: #87b9a8; */
  height: 20px;
  font-size: 12px;
  font-weight: 300;
`;
const ProductSize = styled.div`
  width: 100%;
  /* background-color: #afb8b5; */
  height: 20px;
  font-size: 12px;
  font-weight: 300;
`;
const ProductCountAndPrice = styled.div`
  width: 100%;
  height: 100px;
  /* background-color: #445155; */
  display: flex;
`;

const ProductPrice = styled.div`
  /* background-color: #4b4b57; */
  flex: 1;
  height: 100px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;
const ProductCounterSection = styled.div`
  /* background-color: #566656; */
  flex: 1;
  height: 100px;
  display: flex;
  align-items: center;
`;

const ProductCounter = styled.div`
  width: 155px;
  height: 41px;
  /* background-color: aqua; */
  display: flex;
`;

const IncrementButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 0px;
  color: white;
  margin-right: -2px;
`;
const DecrementButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 0px;
  color: white;
  margin-left: -2px;
`;
const Counter = styled.div`
  height: 38px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  font-size: 12px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  border-radius: 0px;
`;

//Summary

const SummarySection = styled.div`
  /* background-color: #833d3d; */
  flex: 1;
`;

const Summary = styled.div`
  width: 80%;
  background-color: #1c1c1c;
  height: 820px;
  margin-top: 80px;
  border-radius: 3px;
  @media (max-width: 1150px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  background-color: #292929;
  height: 170px;
  letter-spacing: 1px;
  font-weight: 200;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SummaryDetails = styled.div`
  margin-top: 50px;
  width: 100%;
  /* background-color: #657575; */
  display: flex;
  padding-left: 100px;
  box-sizing: border-box;
  @media (max-width: 1150px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Left = styled.div`
  /* background-color: aqua; */
  flex: 1;
  min-height: 100px;
`;
const Right = styled.div`
  flex: 1;
  /* background-color: green; */
  min-height: 100px;
`;

const SubtotalTitle = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: #7e7ec5; */
  font-size: 14px;
  letter-spacing: 0.5px;
`;
const DiscountTitle = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: #616181; */
  font-size: 14px;
  letter-spacing: 0.5px;
`;
const ShippingTitle = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: #6a6aca; */
  font-size: 14px;
  letter-spacing: 0.5px;
`;

const TaxTitle = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: #6a6aca; */
  font-size: 14px;
  letter-spacing: 0.5px;
`;
const TotalTitle = styled.div`
  width: 100%;
  height: 150px;
  /* background-color: #215c57; */
  letter-spacing: 0.5px;
  font-size: 25px;
  display: flex;
  align-items: center;
`;

const Subtotal = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: #7e7ec5; */
  font-size: 14px;
  letter-spacing: 0.5px;
`;
const Discount = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: #616181; */
  font-size: 14px;
  letter-spacing: 0.5px;
`;
const Shipping = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: #6a6aca; */
  font-size: 14px;
  letter-spacing: 0.5px;
`;
const Tax = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: #6a6aca; */
  font-size: 14px;
  letter-spacing: 0.5px;
`;

const Total = styled.div`
  width: 100%;
  height: 150px;
  /* background-color: #0a3a36; */
  letter-spacing: 0.5px;
  font-size: 25px;
  display: flex;
  align-items: center;
`;

const Clause = styled.div`
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 200;
  /* background-color: #3e4643; */
  width: 70%;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  color: #bababa;
  line-height: 1.4;
  text-align: justify;
  @media (max-width: 1150px) {
    font-size: 12px;
    width: 90%;
  }
`;

const ButtonSection = styled.div`
  height: 100px;
  /* background-color: aqua; */
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`;

const CheckoutBtn = styled.button`
  width: 200px;
  height: 61px;
  background-color: #998e73;
  color: white;
  border: none;
  margin-top: 20px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    border: 1px solid #998e73;
    background-color: transparent;
    color: #998e73;
  }
`;
const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  //calculate shippingPrice
  let shippingPrice;
  if (subtotal > 100) {
    shippingPrice = 0;
  } else {
    shippingPrice = 20.0;
  }

  let tax = (subtotal + shippingPrice) * 0.23;
  let discount = 10.0;
  let total = subtotal + shippingPrice + tax - discount;

  const handleChangeQuantity = (type, cartId, itemSize) => {
    if (type === "increment") {
      dispatch(changeQuantity({ cartId, itemSize, type: "increment" }));
    } else {
      dispatch(changeQuantity({ cartId, itemSize, type: "decrement" }));
    }
  };

  return (
    <>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Container>
        <Area>
          <ProductSection>
            <StyledLink to="/">
              <Button>RETURN</Button>
            </StyledLink>

            <ProductList>
              {cart.map((item) => {
                return (
                  <ProductItem key={item.id}>
                    <ImageSection>
                      <Image src={item.image}></Image>
                    </ImageSection>
                    <DetailsSection>
                      <ProductName>PRODUKT: {item.title} </ProductName>
                      <ProductID>ID: {item.id} </ProductID>
                      <ProductSize>ROZMIAR: {item.size} </ProductSize>
                      <ProductCountAndPrice>
                        <ProductCounterSection>
                          <ProductCounter>
                            <IncrementButton
                              onClick={() =>
                                handleChangeQuantity(
                                  "increment",
                                  item.id,
                                  item.size
                                )
                              }
                            >
                              +
                            </IncrementButton>
                            <Counter>{item.quantity}</Counter>
                            <DecrementButton
                              onClick={() =>
                                handleChangeQuantity(
                                  "decrement",
                                  item.id,
                                  item.size
                                )
                              }
                            >
                              -
                            </DecrementButton>
                          </ProductCounter>
                        </ProductCounterSection>
                        <ProductPrice> {item.price.toFixed(2)}PLN</ProductPrice>
                      </ProductCountAndPrice>
                    </DetailsSection>
                  </ProductItem>
                );
              })}
            </ProductList>
          </ProductSection>
          <SummarySection>
            <Summary>
              {subtotal > 0 ? (
                <>
                  <Title>Podsumowanie zamówienia </Title>

                  <SummaryDetails>
                    <Left>
                      <SubtotalTitle>RAZEM</SubtotalTitle>
                      <ShippingTitle>DOSTAWA</ShippingTitle>
                      <TaxTitle>VAT(23%)</TaxTitle>
                      <DiscountTitle>RABAT</DiscountTitle>
                      <TotalTitle>SUMA</TotalTitle>
                    </Left>
                    <Right>
                      <Subtotal> {subtotal.toFixed(2)} PLN</Subtotal>
                      <Shipping>{shippingPrice.toFixed(2)} PLN</Shipping>
                      <Tax>{tax.toFixed(2)} PLN</Tax>
                      <Discount>{discount.toFixed(2)} PLN</Discount>
                      <Total>{total.toFixed(2)} PLN</Total>
                    </Right>
                  </SummaryDetails>
                  <Clause>
                    Składając zamówienie akceptujesz regulamin sklepu oraz
                    politykę prywatności. Dziękujemy za wybór naszych produktów.
                    Więcej informacji znajdziesz w zakładce Regulamin Sklepu.
                  </Clause>
                  <ButtonSection>
                    <StyledLink to="/shipping">
                      <CheckoutBtn>DOSTAWA</CheckoutBtn>
                    </StyledLink>
                  </ButtonSection>
                </>
              ) : (
                <>
                  <Title>Twój koszyk jest pusty </Title>

                  <SummaryDetails>
                    <Left>
                      <SubtotalTitle>RAZEM</SubtotalTitle>
                      <ShippingTitle>DOSTAWA</ShippingTitle>
                      <TaxTitle>VAT(23%)</TaxTitle>
                      <DiscountTitle>RABAT</DiscountTitle>
                      <TotalTitle>SUMA</TotalTitle>
                    </Left>
                    <Right>
                      <Subtotal> 0.00 PLN</Subtotal>
                      <Shipping>0.00PLN</Shipping>
                      <Tax>0.00 PLN</Tax>
                      <Discount>0.00 PLN</Discount>
                      <Total>0.00 PLN</Total>
                    </Right>
                  </SummaryDetails>
                  <Clause>
                    Składając zamówienie akceptujesz regulamin sklepu oraz
                    politykę prywatności. Dziękujemy za wybór naszych produktów.
                    Więcej informacji znajdziesz w zakładce Regulamin Sklepu.
                  </Clause>
                  <ButtonSection>
                    <StyledLink to="/products">
                      <CheckoutBtn>SKLEP</CheckoutBtn>
                    </StyledLink>
                  </ButtonSection>
                </>
              )}
            </Summary>
          </SummarySection>
        </Area>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default ShoppingCart;
