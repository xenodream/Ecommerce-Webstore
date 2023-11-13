import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { usePlaceOrderMutation } from "../redux/slices/orderApiSlice";
import { useUpdateProductsMutation } from "../redux/slices/productsApiSlice";
import { useNavigate } from "react-router-dom";

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

const ProductDetail = styled.div`
  width: 100%;
  /* background-color: #15835e; */
  height: 10px;
  font-size: 12px;
  font-weight: 300;
  margin-top: 10px;
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

//Summary

const SummarySection = styled.div`
  /* background-color: #833d3d; */
  flex: 1;
`;

const Summary = styled.div`
  width: 80%;
  background-color: #1c1c1c;
  min-height: 820px;
  margin-top: 80px;
  padding-bottom: 50px;
  border-radius: 3px;
  /* border: 2px solid #424242; */
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
  text-transform: uppercase;
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
  margin-left: -80px;
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
  const { cart } = useSelector((store) => store.cart);
  const { shipping } = useSelector((store) => store.shipping);
  const { loggedUser } = useSelector((store) => store.user);
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

  const [placeOrder] = usePlaceOrderMutation();
  const [updateProducts] = useUpdateProductsMutation();
  const navigate = useNavigate();
  const placeOrderHandler = async () => {
    navigate("/success");

    let address = shipping.address;
    let phone = shipping.phone;

    await placeOrder({
      address,
      phone,
      totalPrice: total.toFixed(2),
      items: cart.map((item) => {
        return {
          qty: item.quantity,
          image: item.image,
          price: item.price,
          product: item.id,
          size: item.size,
        };
      }),
    });
    await updateProducts(
      cart.map((item) => {
        if (item.size === "XS") {
          return {
            id: item.id,
            extraSmallQuantity: item.inStock - item.quantity,
          };
        } else if (item.size === "S") {
          return {
            id: item.id,
            smallQuantity: item.inStock - item.quantity,
          };
        } else if (item.size === "M") {
          return {
            id: item.id,
            mediumQuantity: item.inStock - item.quantity,
          };
        } else if (item.size === "L") {
          return {
            id: item.id,
            largeQuantity: item.inStock - item.quantity,
          };
        }
      })
    );
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
                      <ProductDetail>PRODUKT:{item.title} </ProductDetail>
                      <ProductDetail>ID:{item.id} </ProductDetail>
                      <ProductDetail>ROZMIAR: {item.size} </ProductDetail>
                      <ProductDetail>ILOŚĆ: {item.quantity} </ProductDetail>
                      <ProductCountAndPrice>
                        <ProductPrice>{item.price.toFixed(2)} PLN</ProductPrice>
                      </ProductCountAndPrice>
                    </DetailsSection>
                  </ProductItem>
                );
              })}
            </ProductList>
          </ProductSection>
          <SummarySection>
            <Summary>
              <>
                <Title>Podsumowanie zamówienia </Title>

                <SummaryDetails>
                  <Left>
                    <SubtotalTitle>IMIĘ</SubtotalTitle>
                    <SubtotalTitle>ADRES DOSTAWY</SubtotalTitle>
                    <SubtotalTitle>TELEFON</SubtotalTitle>
                    <SubtotalTitle>RAZEM</SubtotalTitle>
                    <SubtotalTitle>DOSTAWA</SubtotalTitle>
                    <SubtotalTitle>VAT(23%)</SubtotalTitle>
                    <SubtotalTitle>RABAT</SubtotalTitle>
                    <TotalTitle>SUMA</TotalTitle>
                  </Left>
                  <Right>
                    <Subtotal>{loggedUser.name}</Subtotal>
                    <Subtotal>
                      {shipping.city} {shipping.address}
                    </Subtotal>
                    <Subtotal>{shipping.phone}</Subtotal>
                    <Subtotal> {subtotal.toFixed(2)} PLN</Subtotal>
                    <Subtotal>{shippingPrice.toFixed(2)} PLN</Subtotal>
                    <Subtotal>{tax.toFixed(2)} PLN</Subtotal>
                    <Subtotal>{discount.toFixed(2)} PLN</Subtotal>
                    <Total>{total.toFixed(2)} PLN</Total>
                  </Right>
                </SummaryDetails>
                <Clause>
                  Składając zamówienie akceptujesz regulamin sklepu oraz
                  politykę prywatności. Dziękujemy za wybór naszych produktów.
                  Więcej informacji znajdziesz w zakładce Regulamin Sklepu.
                </Clause>
                <ButtonSection>
                  <CheckoutBtn onClick={placeOrderHandler}>
                    KUPUJĘ i PŁACĘ
                  </CheckoutBtn>
                </ButtonSection>
              </>
            </Summary>
          </SummarySection>
        </Area>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default ShoppingCart;
