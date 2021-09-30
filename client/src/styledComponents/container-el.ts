import styled from "styled-components";

export const MyContainer = styled.div`
  max-width: 935px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media (min-width: 600px) {
    width: 600px;
  }

  @media (min-width: 1000px) {
    width: 100%;
  }
`;

export const NavContainer = styled(MyContainer)`
  @media (min-width: 600px) {
    width: 100%;
  }
`;

export const ProfileContainer = styled(MyContainer)`
  @media (min-width: 600px) {
    width: 100%;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeWrapperLeft = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
`;

export const HomeWrapperRight = styled.div`
  width: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const HomeProfile = styled.div`
  height: 80px;
  width: calc(inherit - 600px);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* border: 1px solid #333; */
`;

// export const ProfileContainer = styled.div`
//   display: flex;
//   flex-basis: 150%;
//   height: inherit;
//   justify-content: start;
//   align-items: center;
// `;

export const SmallCircleImg = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;
