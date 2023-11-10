import Post from "@components/Post/Post";
import React from "react";
import styled from "styled-components";

const Trending = () => {
  return (
    <Wrapper>
      <p>Trending</p>

      <Post />
    </Wrapper>
  );
};

export default Trending;

const Wrapper = styled.section`
  //maxwidth 500px and center
  max-width: 500px;
  margin: 0 auto;
  margin-top: 20px;
`;
