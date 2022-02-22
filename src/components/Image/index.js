import styled from "styled-components";

export const NormalImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ObjectFitImage = styled(NormalImage)`
  object-fit: ${(props) => props.objectFit};
  object-position: 50% 50%;
  transition: 0.6s ease;
`;

export const ObjectFitBikerImage = styled(ObjectFitImage)`
  object-fit: ${(props) => props.objectFit};
  object-position: 50% 50%;
  transition: 0.6s ease;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 140%;
  height: 300%;
  z-index: 1;
`;
