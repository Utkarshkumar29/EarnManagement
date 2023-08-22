import React from "react";
import {
  Box11,
  Box12,

  Box1Container,
  RoadmapContainer,
  Box2Container,
  Box21,
  Box22,

  Box3Container,
  Box3Wrapper,
  
  Box4Container,
  Box4Wrapper,
  RoadmapHeading,

  WhiteBox,
  Year,
  Quater,
  Q1Description,
  RoadmapDescription,
  Box3,
  Box4,
  TextWrapper,
  RoadTextContainer,
  RoadmapWrapper,
  CircleWrapper,
  Circle,
  CircleContainer,

} from "../../styles/roadmap";
import ShadowBox from "../../components/boxShadow";
import ShadowBox1 from "../../components/boxShadow1";
import CirlceImage from '../../assets/images/HourGlass.png'

const Box3content = [{ content: "" }, { content: "" }, { content: "" }];

const outerDiv = [
  { content: "", style: {} },
  { content: "", style: { position: "relative", top: "297px" } },
  { content: "", style: { position: "relative", top: "594px" } },
];

const outDiv = [
  { content: "", style: { position: "relative", top: "-600.5px" } },
  { content: "", style: { position: "relative", top: "-303.5px" } },
];

const Box4content = [{ content: "" }, { content: "" }];

const RoadMap = () => {
  return (
    <RoadmapContainer>
      <RoadmapWrapper>
        <Box1Container>
          <Box11></Box11>
          <Box12>
            <RoadTextContainer>
              <RoadmapHeading>Road Map</RoadmapHeading>
              <RoadmapDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </RoadmapDescription>
            </RoadTextContainer>

            <CircleContainer>
              <CircleWrapper>
                <Circle>
                  <img src={CirlceImage} alt="error" />
                </Circle>
              </CircleWrapper>
            </CircleContainer>
          </Box12>
        </Box1Container>

        <Box2Container>
          <Box21>
            <WhiteBox />
          </Box21>
          <Box22>
            <TextWrapper
              paddingLeft="140px"
              side600="110px"
              left600="-30px"
              side380="0px"
              left380="-80px"
              top="60px"
            >
              <Year>2023</Year>
              <Quater>Q1</Quater>
              <Q1Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse id purus augue. Lorem ipsum dolor
              </Q1Description>
            </TextWrapper>
          </Box22>
        </Box2Container>

        <Box3Container>
          {outerDiv.map((outerItem, outerIndex) => (
            <Box3Wrapper style={outerItem.style}>
              {Box3content.map((innerItem, innerIndex) => (
                <Box3 key={innerIndex}>
                  {innerIndex === 1 && (
                    <>
                      <ShadowBox />
                      <TextWrapper
                        direction="rtl"
                        paddingRight="140px"
                        side600="110px"
                        side380="50px"
                      >
                        <Year>2023</Year>
                        <Quater>Q1</Quater>
                        <Q1Description>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse id purus augue. Lorem ipsum dolor{" "}
                        </Q1Description>
                      </TextWrapper>
                    </>
                  )}
                </Box3>
              ))}
            </Box3Wrapper>
          ))}
        </Box3Container>

        <Box4Container>
          {outDiv.map((outerItem, outerIndex) => (
            <Box4Wrapper style={outerItem.style}>
              {Box4content.map((innerItem, innerIndex) => (
                <Box4 key={innerIndex} style={innerItem.styles}>
                  {innerIndex === 1 && (
                    <>
                      <ShadowBox1 />
                      <TextWrapper
                        paddingLeft="140px"
                        distance600="100px"
                        distance380="50px"
                      >
                        <Year>2023</Year>
                        <Quater>Q1</Quater>
                        <Q1Description>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse id purus augue. Lorem ipsum dolor{" "}
                        </Q1Description>
                      </TextWrapper>
                    </>
                  )}
                </Box4>
              ))}
            </Box4Wrapper>
          ))}
        </Box4Container>
      </RoadmapWrapper>
    </RoadmapContainer>
  );
};

export default RoadMap;
