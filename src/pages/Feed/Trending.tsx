import Post from "@components/Post/Post";
import React from "react";
import styled from "styled-components";

const Trending = () => {
  return (
    <Wrapper>
      <p>Trending</p>

      <PostContainer>
        {Array(10)
          .fill(1)
          .map((_, index) => (
            <Post key={index} />
          ))}
        <Post />
      </PostContainer>
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

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
`;
