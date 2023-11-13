import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductSection = styled.div`
  width: 350px;
  margin: 40px;
  /* background-color: yellow; */
  @media (max-width: 960px) {
    width: 250px;
    margin: 30px;
  }
  @media (max-width: 760px) {
    width: 150px;
    margin: 5px;
  }
`;

const ImgSection = styled.div`
  width: 350px;
  height: 350px;
  background-color: azure;
  @media (max-width: 960px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 760px) {
    width: 150px;
    height: 150px;
  }
`;
const Img = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  @media (max-width: 960px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 760px) {
    width: 150px;
    height: 150px;
  }
`;

const PriceSection = styled.div`
  height: 50px;
  /* background-color: #296969; */
  color: white;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
`;
const DescSection = styled.div`
  height: 100px;
  /* background-color: beige; */
  color: #cecece;
  font-size: 15px;
  text-align: justify;
  line-height: 140%;
  font-weight: 200;
  margin-bottom: 20px;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 960px) {
    font-size: 11px;
    text-align: left;
    text-overflow: ellipsis;
    height: 30px;
  }
  @media (max-width: 760px) {
    margin-bottom: 5px;
  }
`;
const ButtonSection = styled.div`
  height: 50px;
  /* background-color: yellow; */
`;

const Button = styled.button`
  width: 111px;
  height: 41px;
  background-color: transparent;
  border: 2px solid #998e73;
  font-size: 11px;
  color: white;
  letter-spacing: 0.5px;
  font-weight: 100;
  @media (max-width: 960px) {
    width: 100px;
    height: 35px;
    font-size: 9px;
  }
  @media (max-width: 760px) {
  }
`;

const StyledLink = styled(Link)``;

const Product = ({ product }) => {
  return (
    <ProductSection>
      <ImgSection>
        <Img src={product.img}></Img>
      </ImgSection>
      <PriceSection>{product.price.toFixed(2)} PLN</PriceSection>
      <DescSection>{product.title}</DescSection>
      <ButtonSection>
        <StyledLink to={`/product/${product._id}`}>
          <Button>DETAILS</Button>
        </StyledLink>
      </ButtonSection>
    </ProductSection>
  );
};

export default Product;
