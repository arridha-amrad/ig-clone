import styled from "styled-components";

interface VSpacerProps {
  aa_length?: string;
}

export const VSpacer = styled.div<VSpacerProps>`
  height: ${(props) => props.aa_length || "10px"};
`;

export const SpacerFromNavbar = styled.div`
  height: 53px;
  @media (min-width: 640px) {
    height: 84px;
  }
`;

export const SpacerFromNavbarProfile = styled.div`
  height: 53px;
  @media (min-width: 736px) {
    height: 84px;
  }
`;
