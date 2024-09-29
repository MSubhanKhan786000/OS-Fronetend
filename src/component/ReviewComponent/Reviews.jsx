import React from "react";
import styled, { keyframes, css } from "styled-components";

// Import the image using require
const reviewImage = require("../../assets/review.jpg");

function Reviews() {
  const row1 = [
    {
      image: reviewImage,
      name: "John Doe",
      text: "Over third given bring lights divide saying. Fowl, all creeping second saw creature isn't gathered likeness shall fruitful saying let.",
    },
    {
      image: reviewImage,
      name: "Rina Sen",
      text: "Tree the whales fifth for their whose. Deep From fruitful spirit creature morning, fowl greater said, it first creepeth after.",
    },
    {
      image: reviewImage,
      name: "Adam Smith",
      text: "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    },
    {
      image: reviewImage,
      name: "Sophie Turner",
      text: "Fruitful darkness greater form. Second give you'll spirit created multiply, made. Together divide from firmament shall.",
    },
  ];

  return (
    <AppContainer>
      <Wrapper>
        <Text>With Great Outcomes.</Text>
        <Note>Our customers have gotten offers from awesome companies.</Note>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ReviewCard key={index}>
                <ProfileImage src={el.image} />
                <ReviewName>{el.name}</ReviewName>
                <ReviewText>{el.text}</ReviewText>
              </ReviewCard>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ReviewCard key={index + row1.length}>
                <ProfileImage src={el.image} />
                <ReviewName>{el.name}</ReviewName>
                <ReviewText>{el.text}</ReviewText>
              </ReviewCard>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Reviews;

// Styled components
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #000000;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ReviewCard = styled.div`
  width: 230px;
  min-height: 250px;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 4px 12px 4px #fff8dc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const ReviewName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: rgb(58, 65, 74);
`;

const ReviewText = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: rgb(58, 65, 74);
  word-wrap: break-word;
  white-space: normal;
`;
