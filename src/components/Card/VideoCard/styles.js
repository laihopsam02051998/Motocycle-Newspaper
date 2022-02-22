import styled from "styled-components";

export const PostTitle = styled.div`
  font-size: 1.9rem;
  text-transform: uppercase;
  font-weight: 700;
  transition: 0.6s ease;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  margin-bottom: 2rem;
`;

export const PostIntro = styled.div`
  position: absolute;
  bottom: -200px;
  left: 0px;
  padding: 0rem 1rem;
  line-height: 1.5rem;
  transition: 0.6s ease;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  margin-bottom: 1rem;
  height: 10rem;
  /* background-color: yellow; */
`;

export const VideoCardContainer = styled.div`
  position: relative;
  width: 22rem;
  height: 30rem;
  /* background-color: red; */
  border-radius: 12px;
  overflow: hidden;
  color: white;
  cursor: pointer;
  margin: 2rem 1rem;
  &:hover img {
    width: 140%;
    transition: 0.6s ease;
    transition-delay: 0.1s;
  }
  &:hover ${PostTitle} {
    margin-bottom: 12rem;
    transition: 0.6s ease;
    transition-delay: 0.1s;
  }
  &:hover ${PostIntro} {
    bottom: 40px;
    transition: 0.6s ease;
    transition-delay: 0.1s;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
export const VideoContent = styled.div`
  position: absolute;
  width: 22rem;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.281);
  padding: 1rem;
  z-index: 1;
  height: 100%;
`;

export const PostDate = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1.5px;
`;
