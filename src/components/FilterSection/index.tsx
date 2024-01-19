import { color } from "@constants/color";
import { ROUTES } from "@constants/routes";
import { Button, DatePicker, Form, Select } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const { Option } = Select;

const FilterSection = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(ROUTES.BOOKING);
  };

  return (
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
  );
};

export default FilterSection;

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

const Title = styled.span`
  font-weight: 700;
  font-size: 16px;
`;
