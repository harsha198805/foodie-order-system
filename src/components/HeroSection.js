import React from "react";
import styled from "styled-components";
import foodBackground from '../assets/food6.jpg';


const HeroSectionContainer = styled.section`
  background: url(${foodBackground}) no-repeat center center/cover;
  color: white;
  padding: 6rem 0;
  text-align: center;
  background-size: cover;
`;

const HeroContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`;

const HeroText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const HeroButton = styled.button`
  background-color: #e53e29;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #c03a1d;
  }
`;

const HeroSection = () => {
  return (
    <HeroSectionContainer id="home">
      <HeroContent>
        <HeroTitle>Welcome to Foodie</HeroTitle>
        <HeroText>Order your favorite food from local restaurants and have it delivered right to your doorstep!</HeroText>
        <HeroButton>Order Now</HeroButton>
      </HeroContent>
    </HeroSectionContainer>
  );
};

export default HeroSection;
