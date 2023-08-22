import React from "react";
import {
  Circle,
  CircleWrapper,
  Circlecontainer,
  Content,
  CopyContainer,
  Copyright,
  CopyrightWrapper,
  DiscordWrapper,
  FingertipHeading,
  Fingertipcontent,
  FooterContainer,
  FooterWrapper,
  IconWrapper,
  InfoWrapper,
  LinkContainer,
  LinkWrapper,
  MobileWrapper,
  TipsWrapper,
} from "../../styles/footer";
import DiscordImage from "../../assets/images/DiscordP.png";
import MobileImage from "../../assets/images/Mobile.png";
import DiscordWhite from "../../assets/images/Discord.png";
import Twitter from "../../assets/images/Twitter.png";
import DiscordBlack from '../../assets/images/DiscordB.png'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <InfoWrapper>
          <TipsWrapper>
            <FingertipHeading>FingerTip</FingertipHeading>
            <Fingertipcontent>
              <Content>Home</Content>
              <Content>Blog</Content>
              <Content>Roadmap</Content>
              <Content>Contact</Content>
            </Fingertipcontent>
          </TipsWrapper>

          <TipsWrapper>
            <FingertipHeading>Resources</FingertipHeading>
            <Fingertipcontent>
              <Content>Discord</Content>
              <Content>Twitter</Content>
              <Content>Instagram</Content>
              <Content>Youtube</Content>
            </Fingertipcontent>
          </TipsWrapper>

          <TipsWrapper>
            <FingertipHeading>About</FingertipHeading>
            <Fingertipcontent>
              <Content>lorem</Content>
              <Content>lorem</Content>
              <Content>lorem</Content>
              <Content>lorem</Content>
            </Fingertipcontent>
          </TipsWrapper>
        </InfoWrapper>

        <LinkContainer>
          <LinkWrapper>
            <DiscordWrapper>
              <img src={DiscordImage} alt="error" />
              <p style={{color:"#7289da"}}>Join us on Discord</p>
            </DiscordWrapper>

            <MobileWrapper>
              <img src={MobileImage} alt="error" />
              <p>(239) 555-0193</p>
            </MobileWrapper>
          </LinkWrapper>

          <IconWrapper>
            <img src={DiscordWhite} alt="error" />
            <img src={Twitter} alt="error" />
          </IconWrapper>
        </LinkContainer>

      </FooterWrapper>

      <Circlecontainer>
      <CircleWrapper>
          <Circle>
            <img src={DiscordBlack} alt="error" />
            <p>Join Discord</p>
          </Circle>
        </CircleWrapper>
        </Circlecontainer>

        <CopyrightWrapper>
          <Copyright>@copyright. play 2022</Copyright>
        </CopyrightWrapper>
    </FooterContainer>
  );
};

export default Footer;
