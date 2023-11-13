import styled from "styled-components";
import { useGetUserOrdersQuery } from "../redux/slices/orderApiSlice";

const OrderSection = styled.div`
  margin-top: 50px;
  width: 100%;
  min-height: 100px;
  /* background-color: aqua; */
`;
const OrderItem = styled.div`
  max-width: 770px;
  margin-left: 30px;
  margin-right: 20px;
  height: 70px;
  background-color: #181818;
  display: flex;
  margin-bottom: 10px;
  padding-left: 10px;
  &:hover {
    background-color: #4a4e40;
    transform: translateY(-2px);
    transition: 300ms;
    cursor: pointer;
  }
  @media (max-width: 410px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const Section = styled.div`
  height: 70px;
  /* background-color: red; */
  width: 200px;
  margin: 2px;
  font-size: 13px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;

const Orders = () => {
  const { data, isLoading, isError } = useGetUserOrdersQuery();
  if (isLoading) {
    return (
      <OrderSection>
        <OrderItem>
          <Section>ID zamówienia</Section>
          <Section>Data zamówienia</Section>
          <Section>Kwota PLN</Section>
          <Section>More</Section>
        </OrderItem>
        <OrderItem>Loading...</OrderItem>
      </OrderSection>
    );
  }
  if (isError) {
    <OrderSection>
      <OrderItem>
        <Section>ID zamówienia</Section>
        <Section>Data zamówienia</Section>
        <Section>Kwota PLN</Section>
      </OrderItem>
      <OrderItem>Wystąpił błąd...</OrderItem>
    </OrderSection>;
  }
  return (
    <OrderSection>
      <OrderItem>
        <Section>ID zamówienia</Section>
        <Section>Data zamówienia</Section>
        <Section>Kwota PLN</Section>
      </OrderItem>
      {data.map((item) => {
        return (
          <OrderItem key={item._id}>
            <Section>{item._id}</Section>
            <Section>{item.createdAt.slice(0, 10)}</Section>
            <Section>{item.totalPrice} PLN</Section>
          </OrderItem>
        );
      })}
    </OrderSection>
  );
};

export default Orders;
