import styled from "styled-components";

export const NormalImage = styled.img`
  width: 100%;
  height: ${(props) => props.height};
  object-fit: cover;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0.5rem;
  border-radius: 8px;
  background-color: #e4eff5;
  overflow: hidden;
  cursor: pointer;
  width: 18.6rem;
  height: 26rem;
  :hover img {
    transform: scale(1.2);
    transition: 0.6s ease;
  }
`;
