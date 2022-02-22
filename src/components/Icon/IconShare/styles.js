import styled from "styled-components";

export const Icon = styled.div`
  padding: 0rem 0.6rem;
  text-align: right;
  i {
    color: black;
    padding: 0.4rem 0.5rem;
    border: 1px solid white;
    border-radius: 20px;
    transition: 0.6s ease;
    width: 31px;
    height: 30px;
    background-color: white;
  }
  :hover i {
    color: white;
    transform: scale(1.2);
    transition: 0.6s ease;
    background-color: black;
  }
`;
