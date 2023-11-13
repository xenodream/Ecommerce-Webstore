import styled from "styled-components";
import Product from "./Product";
import { useGetProductsQuery } from "../redux/slices/productsApiSlice";

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
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
`;

const LoadingTitle = styled.h1`
  color: white;
  font-weight: 200;
`;

const Products = ({ filter }) => {
  const { data, isLoading, isError } = useGetProductsQuery();

  console.log(filter.size);
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
  console.log(data);

  return (
    <Container>
      <Area>
        {filter.category === "coats" ? (
          data
            .filter((item) => item.category === "coats")
            .map((product) => {
              return <Product product={product} key={product._id}></Product>;
            })
        ) : (
          <>
            {filter.category === "jewellery" ? (
              data
                .filter((item) => item.category === "jewellery")
                .map((product) => {
                  return (
                    <Product product={product} key={product._id}></Product>
                  );
                })
            ) : (
              <>
                {filter.category === "shoes" ? (
                  data
                    .filter((item) => item.category === "shoes")
                    .map((product) => {
                      return (
                        <Product product={product} key={product._id}></Product>
                      );
                    })
                ) : (
                  <>
                    {data.map((product) => {
                      return (
                        <Product product={product} key={product._id}></Product>
                      );
                    })}
                  </>
                )}
              </>
            )}
          </>
        )}
      </Area>
    </Container>
  );
};

export default Products;
