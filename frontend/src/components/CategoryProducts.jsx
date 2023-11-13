import styled from "styled-components";
import Product from "./Product";
import { useGetProductsByCategoryQuery } from "../redux/slices/productsApiSlice";

const Container = styled.div`
  width: 100%;
  background-color: #0a0a0a;
`;

const Area = styled.div`
  width: 100%;
  max-width: 1700px;
  min-height: 300px;
  background-color: #0a0a0a;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding: 50px;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 500px) {
    padding: 10px;
  }
`;

const LoadingTitle = styled.h1`
  color: white;
  font-weight: 200;
`;
const Title = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: white;
  font-weight: 600;
`;
const CategoryProducts = ({ category }) => {
  const { data, isLoading, isError } = useGetProductsByCategoryQuery(category);
  if (isLoading) {
    return (
      <Container>
        <Area>
          <LoadingTitle>Loading...</LoadingTitle>
        </Area>
      </Container>
    );
  }
  if (isError) {
    return (
      <Container>
        <Area>Error</Area>
      </Container>
    );
  }

  return (
    <Container>
      <Area>
        <Title>{category}</Title>
        {data.map((product) => {
          return <Product product={product} key={product._id}></Product>;
        })}
      </Area>
    </Container>
  );
};

export default CategoryProducts;
