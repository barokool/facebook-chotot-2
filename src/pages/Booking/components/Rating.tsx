import { Rate } from "antd";
import React from "react";
import styled from "styled-components";

const Rating = () => {
  return (
    <Container>
      <Flex>
        <RatingAverage>
          <span>4.5</span>
        </RatingAverage>
        <Rate value={5} disabled />
        <p>6391 đánh giá</p>
      </Flex>
    </Container>
  );
};

export default Rating;

const Container = styled.div`
  padding: 16px;
`;

const Flex = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const RatingAverage = styled.div`
  border-radius: 2px;
  background: rgb(0, 96, 196);
  color: white;
  font-size: 16px;
  padding: 3px 10px;
`;
