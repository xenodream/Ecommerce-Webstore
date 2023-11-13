import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { useGetProductDetailsQuery } from "../redux/slices/productsApiSlice";
import Footer from "../components/Footer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  color: white;
  width: 100%;
`;

const Area = styled.div`
  max-width: 1700px;
  /* background-color: aqua; */
  min-height: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
  @media (max-width: 990px) {
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
  }
`;

const ImgContainer = styled.div`
  flex: 0.7;
  /* background-color: #865353; */
  min-height: 800px;
  @media (max-width: 990px) {
    min-height: 10px;
    margin-bottom: 100px;
  }
`;
const ProductImg = styled.img`
  width: 100%;
`;

const DetailsContainer = styled.div`
  min-height: 800px;
  flex: 1;
  /* background-color: aquamarine; */
`;

const Title = styled.div`
  min-height: 100px;
  /* background-color: #373b3b; */
  font-size: 32px;
  font-weight: 300;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding-left: 100px;
  @media (max-width: 990px) {
    padding-left: 10px;
    min-height: 10px;
  }
`;
const Line = styled.div`
  width: 20px;
  height: 1px;
  background-color: white;
  margin-left: 100px;
  margin-top: 50px;
  @media (max-width: 990px) {
    margin-left: 10px;
  }
`;
const Description = styled.div`
  font-size: 17px;
  margin-top: 50px;
  /* background-color: #464642; */
  line-height: 1.7;
  word-spacing: 2px;
  font-weight: 200;
  padding-left: 100px;
  @media (max-width: 990px) {
    padding-left: 10px;
  }
`;
const SizeAndQuantity = styled.div`
  /* background-color: blue; */
  height: 170px;
  display: flex;
`;
const SizeContainer = styled.div`
  /* background-color: #94946e; */
  margin-left: 100px;
  flex: 1;
  display: flex;
  align-items: center;
  @media (max-width: 990px) {
    margin-left: 10px;
  }
`;

const Size = styled.div`
  background-color: white;
  color: black;
  margin-right: 5px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  border-radius: 1px;
  transition: 0.5s;
`;
const QuantityContainer = styled.div`
  /* background-color: #5a5752; */
  flex: 1;
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
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const DecrementButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 0px;
  color: white;
  margin-left: -2px;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const Counter = styled.div`
  height: 38px;

  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 12px;

  border-top: 1px solid white;
  border-bottom: 1px solid white;
  border-radius: 0px;
`;

const BtnContainer = styled.div`
  height: 100px;
  margin-left: 100px;
  /* background-color: blanchedalmond; */
  display: flex;
  align-items: center;
  @media (max-width: 990px) {
    margin-left: 10px;
  }
`;

const Btn = styled.button`
  width: 350px;
  height: 60px;
  background-color: #867d67;
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 13px;
  transition: 0.3s;
  &:hover {
    border: 1px solid #867d67;
    background-color: transparent;
    color: #867d67;
  }
`;

const Loading = styled.h1`
  color: white;
  font-weight: 200;
  text-align: center;
  margin-top: 100px;
`;

const PriceContainer = styled.div`
  width: 100%;
  min-height: 50px;
  /* background-color: aqua; */
  padding-left: 100px;
  box-sizing: border-box;
  font-size: 30px;
  @media (max-width: 990px) {
    padding-left: 10px;
  }
`;

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  let { id } = useParams();
  const { data, isLoading, isError } = useGetProductDetailsQuery(id);

  if (isLoading) {
    return (
      <>
        <Announcement />
        <Navbar />
        <Container>
          <Area>
            <Loading>Loading...</Loading>
          </Area>
        </Container>
        <Footer />
      </>
    );
  }

  if (isError) {
    return (
      <Container>
        <Area>
          <Loading>Nie można wyświetlić tej strony</Loading>
        </Area>
      </Container>
    );
  }

  function handleQuantity(param) {
    if (param === "increment") {
      setQuantity(quantity + 1);
    } else if ((param = "decrement") && quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function SizeHandler(param) {
    if (param === "XS") {
      setSize("XS");
    } else if (param === "S") {
      setSize("S");
    } else if (param === "M") {
      setSize("M");
    } else if (param === "L") {
      setSize("L");
    }
  }

  const addToCartHandler = () => {
    if (size === "" || quantity === 0) {
      toast.error("Wybierz rozmiar i ilość produktu");
    }
    if (size !== "" && quantity !== 0) {
      toast.success("Dodano produkt do koszyka");
      if (size === "XS") {
        dispatch(
          addToCart({
            id: id,
            quantity: quantity,
            size: size,
            image: data[0].img,
            title: data[0].title,
            price: data[0].price,
            inStock: data[0].extraSmallQuantity,
          })
        );
      } else if (size === "M") {
        dispatch(
          addToCart({
            id: id,
            quantity: quantity,
            size: size,
            image: data[0].img,
            title: data[0].title,
            price: data[0].price,
            inStock: data[0].mediumQuantity,
          })
        );
      } else if (size === "S") {
        dispatch(
          addToCart({
            id: id,
            quantity: quantity,
            size: size,
            image: data[0].img,
            title: data[0].title,
            price: data[0].price,
            inStock: data[0].smallQuantity,
          })
        );
      } else if (size === "L") {
        dispatch(
          addToCart({
            id: id,
            quantity: quantity,
            size: size,
            image: data[0].img,
            title: data[0].title,
            price: data[0].price,
            inStock: data[0].largeQuantity,
          })
        );
      }
    }
  };

  return (
    <>
      <Announcement />
      <Navbar />
      {data.map((productDetails) => {
        return (
          <Container key={productDetails._id}>
            <Area>
              <ProductContainer>
                <ImgContainer>
                  <ProductImg src={productDetails.img}></ProductImg>
                </ImgContainer>

                <DetailsContainer>
                  <Title>{productDetails.title}</Title>
                  <Line></Line>
                  <Description>{productDetails.description}</Description>
                  {data[0].extraSmallQuantity === 0 &&
                  data[0].smallQuantity === 0 &&
                  data[0].mediumQuantity === 0 &&
                  data[0].largeQuantity === 0 ? (
                    <SizeAndQuantity>
                      <SizeContainer>Produkt niedostępny</SizeContainer>
                    </SizeAndQuantity>
                  ) : (
                    <>
                      <SizeAndQuantity>
                        <SizeContainer>
                          {data[0].extraSmallQuantity > 0 && (
                            <Size
                              style={
                                size === "XS"
                                  ? { backgroundColor: "#867d67" }
                                  : { backgroundColor: "white" }
                              }
                              className="XS"
                              onClick={() => SizeHandler("XS")}
                            >
                              XS
                            </Size>
                          )}
                          {data[0].smallQuantity > 0 && (
                            <Size
                              style={
                                size === "S"
                                  ? { backgroundColor: "#867d67" }
                                  : { backgroundColor: "white" }
                              }
                              className="S"
                              onClick={() => SizeHandler("S")}
                            >
                              S
                            </Size>
                          )}
                          {data[0].mediumQuantity > 0 && (
                            <Size
                              style={
                                size === "M"
                                  ? { backgroundColor: "#867d67" }
                                  : { backgroundColor: "white" }
                              }
                              className="M"
                              onClick={() => SizeHandler("M")}
                            >
                              M
                            </Size>
                          )}
                          {data[0].largeQuantity > 0 && (
                            <Size
                              style={
                                size === "L"
                                  ? { backgroundColor: "#867d67" }
                                  : { backgroundColor: "white" }
                              }
                              className="L"
                              onClick={() => SizeHandler("L")}
                            >
                              L
                            </Size>
                          )}
                        </SizeContainer>
                        <QuantityContainer>
                          <ProductCounter>
                            <IncrementButton
                              onClick={() => handleQuantity("increment")}
                            >
                              +
                            </IncrementButton>
                            <Counter>
                              {size === "XS" ? (
                                <div>
                                  {quantity <= data[0].extraSmallQuantity
                                    ? quantity
                                    : setQuantity(quantity - 1)}
                                </div>
                              ) : (
                                <div>
                                  {size === "S" ? (
                                    <div>
                                      {quantity <= data[0].smallQuantity
                                        ? quantity
                                        : setQuantity(quantity - 1)}
                                    </div>
                                  ) : (
                                    <div>
                                      {size === "M" ? (
                                        <div>
                                          {quantity <= data[0].mediumQuantity
                                            ? quantity
                                            : setQuantity(quantity - 1)}
                                        </div>
                                      ) : (
                                        <div>
                                          {quantity <= data[0].largeQuantity
                                            ? quantity
                                            : setQuantity(quantity - 1)}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}
                            </Counter>
                            <DecrementButton
                              onClick={() => handleQuantity("decrement")}
                            >
                              -
                            </DecrementButton>
                          </ProductCounter>
                        </QuantityContainer>
                      </SizeAndQuantity>

                      <PriceContainer>
                        {productDetails.price.toFixed(2)} PLN
                      </PriceContainer>
                      <BtnContainer>
                        <Btn onClick={addToCartHandler}>Add to cart</Btn>
                      </BtnContainer>
                    </>
                  )}
                </DetailsContainer>
              </ProductContainer>
              <ToastContainer
                progressClassName="toastProgress"
                bodyClassName="toastBody"
              />
            </Area>
          </Container>
        );
      })}
      <Footer />
    </>
  );
};

export default ProductDetails;
