import React from "react";
import { Box51, Box52, ContactContainer, ContactDescription, ContactHeading, ContactWrapper,Info,InputContainer,Submit,TextWrapper,Input,Text, CirlceWrapper, Circle  } from "../../styles/contact";

const Contact = () => {
  return (
    <ContactContainer>
    <ContactWrapper top="-6px">
      <Box51 />
      <Box52>
        <ContactHeading>Contact Us</ContactHeading>
        <ContactDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ContactDescription>

        <InputContainer>
          <TextWrapper>
            <Info>
              <Text>Earnmanagement.com</Text>
              <Text>US  +1 (872) 288 9283</Text>
              <Text>US  +1 (872) 288 9283</Text>
            </Info>
            <Submit>
              <Input placeholder="Your Name"/>
              <Input placeholder="Your Email Address"/>
              <Input placeholder="Describe your needs"/>
            </Submit>
          </TextWrapper>
        <CirlceWrapper>
          <Circle>Submit Request</Circle>
        </CirlceWrapper>
        </InputContainer>


      </Box52>
      
    </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
