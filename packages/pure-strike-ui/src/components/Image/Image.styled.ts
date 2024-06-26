import styled from "styled-components";
import { ImageProps } from "./Image.types";
import { getResponsiveStyles } from "~/foundation/responsive";

const Image = styled.img<ImageProps>`
  display: block;
  cursor: ${({ cursor }) => cursor};
  object-fit: ${({ objectFit }) => objectFit};
  ${(props) => getResponsiveStyles("width", props.width)};
  ${(props) => getResponsiveStyles("height", props.height)};
  ${(props) => getResponsiveStyles("border-radius", props.borderRadius)};
`;

export default Image;
