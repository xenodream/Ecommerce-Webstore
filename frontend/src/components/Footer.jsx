import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #000000;
`;
const Area = styled.div`
  width: 100%;
  max-width: 1700px;
  min-height: 600px;
  background-color: #000000;
  margin-left: auto;
  margin-right: auto;
`;
const NavSection = styled.div`
  height: 350px;
  width: 100%;
  /* background-color: #3f6161; */
  justify-content: center;
  align-items: center;
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const DescSection = styled.div`
  min-height: 100px;
  width: 100%;
  /* background-color: aquamarine; */
  padding: 0px 20px;
  box-sizing: border-box;
  text-align: justify;
  margin-left: auto;
  margin-right: auto;
  color: #757575;
  font-size: 11px;
  font-weight: 200;
  line-height: 1.8;
`;
const Logo = styled.p`
  height: 30px;
  /* background-color: #707038; */
  flex: 1;
  color: #dfdfdf;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 20px;
  padding-left: 20px;
  @media (max-width: 900px) {
    margin-top: 90px;
    padding-left: 0;
  }
`;
const Links = styled.div`
  height: 30px;
  /* background-color: #723434; */
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
  @media (max-width: 900px) {
    margin-right: 0;

    margin-bottom: 50px;
  }
`;

const Link = styled.a`
  color: #949494;
  text-transform: uppercase;
  margin-left: 40px;
  font-weight: 400;
  font-size: 11px;
  @media (max-width: 1080px) {
    margin-left: 0;
    text-align: center;
    margin-bottom: 10px;
    padding: 10px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Area>
        <NavSection>
          <Logo>FASHIONSTORE</Logo>
          <Links>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Terms of use</Link>
            <Link>Privacy Policy</Link>
          </Links>
        </NavSection>
        <DescSection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          obcaecati error, quod voluptate, culpa aut ducimus minima omnis,
          itaque enim praesentium eaque consectetur sed molestias ipsum unde
          odit saepe assumenda. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Mollitia, quae labore, quis vel inventore optio,
          aliquam est non laboriosam tempora sed cumque voluptates laborum
          praesentium temporibus illum veritatis enim ut? praesentium temporibus
          illum veritatis enim ut? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Mollitia adipisci necessitatibus laudantium ullam
          culpa pariatur accusamus ut iste soluta voluptates odio corporis saepe
          doloremque, commodi dolorum eligendi! Maxime, quae molestias. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati
          error, quod voluptate, culpa aut ducimus minima omnis, itaque enim
          praesentium eaque consectetur sed molestias ipsum unde odit saepe
          assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Mollitia, quae labore, quis vel inventore optio, aliquam est non
          laboriosam tempora sed cumque voluptates laborum praesentium
          temporibus illum veritatis enim ut? praesentium temporibus illum
          veritatis enim ut? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Mollitia adipisci necessitatibus laudantium ullam culpa pariatur
          accusamus ut iste soluta voluptates odio corporis saepe doloremque,
          commodi dolorum eligendi!
        </DescSection>
      </Area>
    </Container>
  );
};

export default Footer;
