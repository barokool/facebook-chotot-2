import React from "react";
import styled from "styled-components";

const groupDepatureData = [
  {
    hour: "06:00",
    place: "Bến xe Miền Đông",
  },
  {
    hour: "06:30",
    place: "Bến xe Miền Tây",
  },
  {
    hour: "07:00",
    place: "Bến xe Miền Trung",
  },
];

const groupDestinationData = [
  {
    hour: "06:00",
    place: "Bến xe Miền Đông",
  },
  {
    hour: "06:30",
    place: "Bến xe Miền Tây",
  },
  {
    hour: "07:00",
    place: "Bến xe Miền Trung",
  },
];

const DepartureDestination = () => {
  return (
    <Container>
      <Flex>
        <Note>Lưu ý</Note>
        <NoteContent>
          Các mốc thời gian đón, trả bên dưới là thời gian dự kiến. Lịch này có
          thể thay đổi tùy tình hình thưc tế.
        </NoteContent>
      </Flex>
      <DepatureDestinationWrapper>
        <DepartureContainer>
          <p style={{ fontWeight: 600 }}>Điểm đón</p>
          <Group>
            {groupDepatureData.map((item, index) => (
              <GroupItem key={index}>
                <p>{item.hour}</p>
                <p>{item.place}</p>
              </GroupItem>
            ))}
          </Group>
        </DepartureContainer>
        <DestinationContainer>
          <p style={{ fontWeight: 600 }}>Điểm trả</p>
          <Group>
            {groupDestinationData.map((item, index) => (
              <GroupItem key={index}>
                <p>{item.hour}</p>
                <p>{item.place}</p>
              </GroupItem>
            ))}
          </Group>
        </DestinationContainer>
      </DepatureDestinationWrapper>
    </Container>
  );
};

export default DepartureDestination;

const Container = styled.div`
  padding: 16px;
`;

const Note = styled.h2`
  font-weight: bold;
  font-size: 16px;
  color: rgb(0, 96, 196);
`;

const NoteContent = styled.p`
  white-space: pre-line;
`;

const DepatureDestinationWrapper = styled.div`
  display: flex;
`;

const DepartureContainer = styled.div`
  width: 50%;
  margin-top: 20px;
`;

const DestinationContainer = styled.div`
  margin-top: 20px;
  width: 50%;
`;

const Group = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GroupItem = styled.div`
  display: flex;
  gap: 20px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
