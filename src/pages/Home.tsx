import { Form, Image } from "antd";
import Header from "layouts/Header";
import React from "react";
import styled from "styled-components";
import { Select, Row, Col, DatePicker, Button } from "antd";
import { Content } from "antd/es/layout/layout";
import FilterSection from "@components/FilterSection";
import CarouselComponent from "@components/Home/Carousel";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <BannerContainer>
          <Header />
          <BannerUnderHeader />
        </BannerContainer>
      </Wrapper>

      <FilterSection />

      <Wrapper>
        <HeadingSection>Popular Routes</HeadingSection>
        <CarouselComponent />
      </Wrapper>
    </Container>
  );
};

export default Home;

//https://787.vn/vi/
//https://www.figma.com/file/6Fib6dxrx5f2vgCn5c1waJ/Tour-Guide---travel-agency%2Ftravel-booking-website-(Community)?type=design&node-id=37-2&mode=design&t=2gtq6pp1c6GbFw6h-0

const BannerUnderHeader: React.FC = () => {
  return (
    <Content>
      {/* Your page content goes here */}
      <div style={{ position: "relative", textAlign: "center" }}>
        <img
          src="https://static.vexere.com/production/banners/910/leaderboard_1440x480.jpg"
          alt="Banner"
          style={{ width: "100%", height: "auto" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Title style={{ color: "#fff" }}>Your Banner Heading</Title>
        </div>
      </div>
    </Content>
  );
};

const Container = styled.div``;

const Title = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

const HeadingSection = styled.h1`
  text-align: left;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0px;
  opacity: 1;
  margin-bottom: 16px;
`;

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1440px;
`;

const BannerContainer = styled.div``;
