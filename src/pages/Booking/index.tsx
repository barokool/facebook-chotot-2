import FilterSection from "@components/FilterSection";
import Header from "layouts/Header";
import React from "react";
import styled from "styled-components";

const banner = {
  link: "#",
  banner:
    "https://resell-ticket.s3.ap-southeast-2.amazonaws.com/banner/98d728fa-3b76-42d7-b573-34ace9e3f81d.jpg",
};

const BookingPage = () => {
  return (
    <Container>
      <Wrapper>
        <BannerContainer>
          <Header />
        </BannerContainer>

        <Banner>
          <a href="#">
            <img src={banner?.banner} alt={banner?.banner} />
          </a>
        </Banner>

        <FilterSection />
      </Wrapper>
    </Container>
  );
};

export default BookingPage;

const Container = styled.div``;
const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1440px;
`;
const BannerContainer = styled.div``;
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
