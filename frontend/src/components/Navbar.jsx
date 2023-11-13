import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../redux/slices/usersApiSlice";
import { logout } from "../redux/slices/userSlice";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 80px;
  /* background-color: #000000; */
`;

const Area = styled.div`
  width: 100%;
  max-width: 1700px;
  /* background-color: #2e2e2e; */
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

const LogoSection = styled.div`
  /* background-color: #4e4e4e; */
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Logo = styled.h1`
  z-index: 1;
  color: white;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 20px;
  padding-left: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const LinksSection = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* background-color: aquamarine; */
  @media (max-width: 560px) {
    display: none;
  }
`;
const LinkContainer = styled.div`
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 10px;
  font-size: 12px;
  @media (max-width: 560px) {
    display: none;
  }
`;

const CartSection = styled.div`
  flex: 1;
  /* background-color: #3c584f; */
  display: flex;
  align-items: center;
  margin-left: 70px;
  @media (max-width: 768px) {
    flex: 0.6;
    margin-left: 0px;
    margin-right: 20px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;

const Icon = styled.span`
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding-left: 20px;
`;

const Total = styled.div`
  font-size: 12px;
  color: white;
  margin: 5px;
`;

//mobile menu

const BurgerSection = styled.div`
  z-index: 1;
  display: none;
  margin-top: 20px;
  margin-right: 20px;
  width: 50px;
  height: 40px;
  /* background-color: #435c5c; */

  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const BurgerLine = styled.div`
  width: 20px;
  height: 2px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 3px;
`;
const MobileNav = styled.div`
  display: none;
  overflow: hidden;
  transition: 0.3s;
  @media (max-width: 560px) {
    z-index: 0;
    display: block;
    width: 100%;
    height: ${({ open }) => (open ? "320px" : "0px")};
  }
`;
const MobileLinkSection = styled.div`
  width: 100%;
  height: 70px;
  background-color: #050505;
  border-bottom: 1px solid;
  border-color: #141414;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 11px;
  text-transform: uppercase;
  padding-left: 20px;
`;

const StyledLinkMobile = styled(Link)`
  text-decoration: none;
  color: white;
  padding-left: 20px;
`;
const Navbar = () => {
  const user = useSelector((store) => store.user);
  const { cart } = useSelector((store) => store.cart);
  const [logoutUser] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());

      navigate("/");
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleNav = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <>
      <Container>
        <Area>
          <LogoSection>
            <Logo>
              <StyledLink to="/">FASHIONSTORE</StyledLink>
            </Logo>
          </LogoSection>
          <LinksSection>
            {user.loggedUser !== null ? (
              <LinkContainer>
                <StyledLink to="/profile">{user.loggedUser.name}</StyledLink>
                <StyledLink onClick={logoutHandler}>LOGOUT</StyledLink>
              </LinkContainer>
            ) : (
              <>
                <LinkContainer>
                  <StyledLink to="/login">Sign in</StyledLink>
                </LinkContainer>
                <LinkContainer>
                  <StyledLink to="/register">Register</StyledLink>
                </LinkContainer>
              </>
            )}
          </LinksSection>
          <CartSection>
            <Icon className="material-symbols-outlined">
              <StyledLink to="/cart">shopping_bag</StyledLink>
            </Icon>
            <Total>{subtotal.toFixed(2)} PLN</Total>
          </CartSection>
          <BurgerSection onClick={handleNav} open={open}>
            <BurgerLine></BurgerLine>
            <BurgerLine></BurgerLine>
            <BurgerLine></BurgerLine>
          </BurgerSection>
        </Area>
      </Container>

      <MobileNav open={open}>
        <MobileLinkSection>
          <StyledLink to="/" onClick={() => setOpen(false)}>
            Home
          </StyledLink>
        </MobileLinkSection>
        <MobileLinkSection>
          <Icon className="material-symbols-outlined">
            <StyledLink to="/cart">shopping_bag</StyledLink>
          </Icon>
          <Total>CART ({subtotal.toFixed(2)} PLN)</Total>
        </MobileLinkSection>

        {user.loggedUser !== null ? (
          <>
            <MobileLinkSection>
              <StyledLinkMobile to="/profile">
                {user.loggedUser.name}
              </StyledLinkMobile>
            </MobileLinkSection>
            <MobileLinkSection>
              <StyledLinkMobile onClick={logoutHandler}>
                Wyloguj się
              </StyledLinkMobile>
            </MobileLinkSection>
          </>
        ) : (
          <>
            <MobileLinkSection>
              <StyledLinkMobile to="/login">Sign in</StyledLinkMobile>
            </MobileLinkSection>

            <MobileLinkSection>
              <StyledLinkMobile to="/register">Register</StyledLinkMobile>
            </MobileLinkSection>
          </>
        )}
      </MobileNav>
    </>
  );
};

export default Navbar;
