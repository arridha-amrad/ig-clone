import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";

interface MyAuthCarouselProps {}

const MyAuthCarousel: React.FC<MyAuthCarouselProps> = () => {
  return (
    <AuthCarousel>
      <IPhoneXFrameContainer>
        <IPhoneXFrameCarousel>
          <Carousel
            showIndicators={false}
            showStatus={false}
            autoPlay
            infiniteLoop
            showThumbs={false}
            showArrows={false}
          >
            <IPhoneXFrameImage src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" />
            <IPhoneXFrameImage src="https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg" />
            <IPhoneXFrameImage src="https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg" />
            <IPhoneXFrameImage src="https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg" />
            <IPhoneXFrameImage src="https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg" />
          </Carousel>
        </IPhoneXFrameCarousel>
      </IPhoneXFrameContainer>
    </AuthCarousel>
  );
};

export default MyAuthCarousel;

export const AuthCarousel = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 940px) {
    display: flex;
  }
`;

export const IPhoneXFrameContainer = styled.div`
  height: 582px;
  width: 371px;
  position: relative;
  z-index: 3;
  background: url("https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png");
  background-position: center;
`;

export const IPhoneFrame = styled.div`
  position: absolute;
  left: 30px;
  top: -3px;
  width: inherit;
  z-index: 5;
`;

export const IPhoneFrame2 = styled.div`
  position: absolute;
  height: 420px;
  z-index: 1;
  top: -8px;
  left: -20px;
`;

export const IPhoneXFrame = styled.img`
  object-fit: contain;
  height: 618px;
`;

export const IPhoneX2Frame = styled.img`
  object-fit: contain;
  height: inherit;
  height: 580px;
`;

export const IPhoneXFrameCarousel = styled.div`
  width: 248px;
  position: absolute;
  right: 17px;
  top: 77px;
  z-index: -10;
`;

export const IPhoneXFrameImage = styled.img`
  height: 440px;
  object-fit: cover;
`;
