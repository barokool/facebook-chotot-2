import { Image } from "antd";
import Header from "layouts/Header";
import React from "react";
import styled from "styled-components";

const banner = {
  link: "#",
  banner:
    "https://resell-ticket.s3.ap-southeast-2.amazonaws.com/banner/98d728fa-3b76-42d7-b573-34ace9e3f81d.jpg",
};
const Home = () => {
  return (
    <Container>
      <Wrapper>
        <BannerContainer>
          <Header />
          <Flex>
            <Left>
              <h1>Share the newz !</h1>
              <button>Get started</button>
              <AvailableContainer>
                <span>Available in</span>
                <div>
                  <button>App Store</button>
                  <button>Play Store</button>
                </div>
              </AvailableContainer>
            </Left>
            <Right>
              <Image
                preview={false}
                width={400}
                height={"100%"}
                src="/src/assets/images/imgpsh_fullsize_anim.png"
              />
            </Right>
          </Flex>
        </BannerContainer>
      </Wrapper>

      <Banner>
        <a href="#">
          <img src={banner?.banner} alt={banner?.banner} />
        </a>
      </Banner>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background: #1e418d;
`;

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1440px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const Left = styled(Flex)`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    color: white;
    font-size: 50px;
    font-weight: 600;
  }

  button {
    max-width: 150px;
    width: 100%;
    background: #0a235a;
    color: white;
    font-weight: 400;
    font-size: 16px;
    border-radius: 10px;
    padding: 12px;
  }
`;

const Right = styled(Flex)`
  width: 50%;
`;

const BannerContainer = styled.div``;

const AvailableContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 20px;
  max-width: 300px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 12px;

  button {
    width: fit-content;
    background: #1e418d;
  }

  div {
    display: flex;
    gap: 20px;
    /* padding: 10px 20px; */
  }

  span {
    color: #1e418d;
    font-weight: 700;
  }
`;

const Banner = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  height: 480px;
  border-radius: 20%;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    align-self: center;
  }
  @media (max-width: ${(props) => props.theme.breakPoint.md}px) {
    height: fit-content;
    padding: 40px 0;
  }
`;
