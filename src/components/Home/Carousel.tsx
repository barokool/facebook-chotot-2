import React from "react";
import { Carousel, Card, Button, Avatar } from "antd";
import "./style.css";

const { Meta } = Card;

const customArrowStyle = {
  color: "white", // Màu chữ của mũi tên
  fontSize: "24px", // Kích thước chữ của mũi tên
  background: "rgba(0, 0, 0, 0.5)", // Màu nền của mũi tên
};

const contentStyle: React.CSSProperties = {
  margin: 0,
};

const CarouselComponent: React.FC = () => {
  return (
    <Carousel
      slidesToShow={4}
      draggable={true}
      arrows={true}
      className="giabao"
      prevArrow={<div style={customArrowStyle}>{"<"}</div>}
    >
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div>
            <Card
              style={contentStyle}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                avatar={
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </div>
        ))}
    </Carousel>
  );
};

export default CarouselComponent;
