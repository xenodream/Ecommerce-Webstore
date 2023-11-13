import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Area = styled.div`
  max-width: 1700px;
  width: 100%;
  /* background-color: aqua; */
  min-height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 50px;
  @media (max-width: 1080px) {
    margin-bottom: 10px;
  }
`;

const CategoriesContainer = styled.div`
  width: 100%;

  /* background-color: aquamarine; */
  display: flex;
  @media (max-width: 1080px) {
    flex-direction: column;
    height: 1400px;
  }
`;

const CoatsCategory = styled.div`
  height: 550px;
  background-image: url("/images/coats.jpg");
  flex: 1;
  background-size: cover;
  background-position: bottom;
  margin-top: 10px;
  margin-right: 10px;
  @media (max-width: 1080px) {
    margin-right: 0;
  }
`;
const ShoesCategory = styled.div`
  height: 550px;
  flex: 1;
  background-color: #6d8a80;
  margin-top: 10px;
  margin-right: 10px;
  background-image: url("/images/shoes.jpg");
  background-size: cover;
  background-position: right;
  @media (max-width: 1080px) {
    margin-right: 0;
  }
`;

const JewelleryCategory = styled.div`
  height: 550px;
  flex: 1;
  background-color: bisque;
  margin-top: 10px;
  background-image: url("/images/jewellery.jpg");
  background-position: bottom;
  background-size: 110%;
`;
const Filter = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: rgba(20, 20, 20, 0.4);
  &:hover {
    background-color: #4d4a2f81;
    transition: 0.3s;
  }
  @media (max-width: 1080px) {
    height: 100%;
  }
`;

const CategoryTitle = styled.div`
  font-size: 32px;
  height: 100%;
  color: white;
  text-transform: uppercase;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Categories = () => {
  return (
    <Container>
      <Area>
        <CategoriesContainer>
          <CoatsCategory>
            <StyledLink to="/products/coats">
              <Filter>
                <CategoryTitle>fashionable coats</CategoryTitle>
              </Filter>
            </StyledLink>
          </CoatsCategory>

          <ShoesCategory>
            <StyledLink to="/products/shoes">
              <Filter>
                <CategoryTitle>elegant shoes</CategoryTitle>
              </Filter>
            </StyledLink>
          </ShoesCategory>
          <JewelleryCategory>
            <StyledLink to="products/jewellery">
              <Filter>
                <CategoryTitle>Luxury jewellery</CategoryTitle>
              </Filter>
            </StyledLink>
          </JewelleryCategory>
        </CategoriesContainer>
      </Area>
    </Container>
  );
};

export default Categories;
