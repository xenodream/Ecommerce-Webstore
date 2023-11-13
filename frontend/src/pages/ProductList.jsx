import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
`;
const Area = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 80px;
  /* background-color: azure; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;

const FiltersContainer = styled.div`
  display: flex;
`;
const PriceFilter = styled.div`
  flex: 1;
  height: 40px;
  color: black;
  display: flex;
  justify-content: center;
`;
const SizeFilter = styled.div`
  flex: 1;
  height: 40px;
  /* background-color: #3e9e9e; */
  display: flex;
  justify-content: center;
  color: black;
`;

const Select = styled.select`
  width: 120px;
  height: 40px;
  background-color: transparent;
  border: 1px solid #868686;
  color: white;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 10px;
`;
const Option = styled.option`
  font-size: 12px;
  background-color: black;
  border: none;
`;

const ProductList = () => {
  const [filter, setFilter] = useState({});
  const handleFilter = (e) => {
    let value = e.target.value;
    let key = e.target.name;
    setFilter({
      ...filter,
      [key]: value,
    });
  };

  return (
    <>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Container>
        <Area>
          <FiltersContainer>
            <PriceFilter>
              <Select name="category" onChange={handleFilter}>
                <Option>Wszystko</Option>
                <Option value="shoes">Buty</Option>
                <Option value="coats">Kurtki</Option>
                <Option value="jewellery">Biżuteria</Option>
              </Select>
            </PriceFilter>
          </FiltersContainer>
        </Area>
      </Container>
      <Products filter={filter} />
      <Footer />
    </>
  );
};

export default ProductList;
