import styled from "styled-components";

const OrDivider = () => {
  return (
    <OrTextWrapper>
      <Line />
      <OrText>OR</OrText>
    </OrTextWrapper>
  );
};

export default OrDivider;

export const OrTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding: 1rem 0;
  width: 100%;
  height: 100%;
  position: relative;
`;

interface OrTextProps {
  aa_bg?: string;
}
export const OrText = styled.span<OrTextProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.aa_bg || "#fff"};
  padding: 0 1rem;
  color: #a5a5a5;
  font-size: 14px;
  font-weight: 600;
`;

export const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #dbdbdb;
`;
