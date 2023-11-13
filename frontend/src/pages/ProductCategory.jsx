import styled from "styled-components";
import Navbar from "../components/Navbar";
import CategoryProducts from "../components/CategoryProducts";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const { category } = useParams();
  return (
    <>
      <Announcement></Announcement>
      <Navbar></Navbar>

      <CategoryProducts category={category} />
      <Footer />
    </>
  );
};

export default ProductList;
