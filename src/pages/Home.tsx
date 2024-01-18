import { Form, Image } from "antd";
import Header from "layouts/Header";
import React from "react";
import styled from "styled-components";
import { Select, Row, Col, DatePicker, Button } from "antd";
import { color } from "@constants/color";
import { Content } from "antd/es/layout/layout";

const banner = {
  link: "#",
  banner:
    "https://resell-ticket.s3.ap-southeast-2.amazonaws.com/banner/98d728fa-3b76-42d7-b573-34ace9e3f81d.jpg",
};
const { Option } = Select;
const Home = () => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const handleSearch = () => {};
  return (
    <Container>
      <Wrapper>
        <BannerContainer>
          <Header />
          <BannerUnderHeader />
          {/* <Flex>
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
          </Flex> */}
        </BannerContainer>
      </Wrapper>

      {/* <Banner>
        <a href="#">
          <img src={banner?.banner} alt={banner?.banner} />
        </a>
      </Banner> */}

      <WrapComponent>
        <FormWrapper>
          <FilterWrapper>
            <ItemFilter>
              <Title>Departure</Title>
              <Select placeholder="Nơi đi" style={{ width: "100%" }}>
                <Option value="Hanoi">Hà Nội</Option>
                <Option value="HoChiMinh">Hồ Chí Minh</Option>
                <Option value="Danang">Đà Nẵng</Option>
              </Select>
            </ItemFilter>
            <ItemFilter>
              <Title>Destination</Title>
              <Select placeholder="Nơi đến" style={{ width: "100%" }}>
                <Option value="Tokyo">Tokyo</Option>
                <Option value="Seoul">Seoul</Option>
                <Option value="Singapore">Singapore</Option>
              </Select>
            </ItemFilter>
            <ItemFilter>
              <Title>Time</Title>
              <DatePicker placeholder="Ngày đi" style={{ width: "100%" }} />
            </ItemFilter>
            <ItemFilter>
              <Button
                type="primary"
                onClick={handleSearch}
                style={{ width: "100%", background: `${color.primary}` }}
              >
                Search
              </Button>
            </ItemFilter>
          </FilterWrapper>
        </FormWrapper>
      </WrapComponent>
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

// ------------

// -------------------------------------------------
const Container = styled.div``;

const Title = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

const FormWrapper = styled(Form)`
  width: 100%;
  padding: 15px;
  background: white;
  border-radius: 6px;
  border: 1px solid rgb(237, 242, 247);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 1px;
  margin-bottom: 15px;
`;

const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  -moz-box-pack: justify;
  justify-content: space-between;
  gap: 10px;
  margin-top: -10px;
`;

const ItemFilter = styled.div`
  padding: 10px 5px;
  width: 20%;
  flex: 1 1 0%;
`;

const WrapComponent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 20px 30px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
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
