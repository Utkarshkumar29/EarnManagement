import React from "react";
import Select from "react-select";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  TextBox1,
  TextBox2,
  TextBox3,
  TextBox4,
  GuildHeading,
  GuildDescription,
  InputWrapper,
  Input,
  ArrowContainer,
  ArrowImage,
  Guild,
  InputContainer,
  TextWrapper,
  CoinWrapper,
  StackofCoin1,
  StackofCoin2,
  Coin
} from "../../styles/gorrilla";
import GorillaImage from "../../assets/images/Gorrila.png";
import Etherium from "../../assets/images/Etherium-2.png";
import Coins from "../../assets/images/Sandglass&Bitcoin.png";
import Arrow from "../../assets/images/Vector.png";

const options = [
  { label: "C++", value: "C++" },
  { label: "Owner", value: "Owner" },
];

const Gorilla = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroLeft>
          <Guild>
            <GuildHeading>Guild Hub of the Metaverse</GuildHeading>
            <GuildDescription>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                sagittis mattis hendrerit. Praesent vel risus in risus
                vestibulum aliquet.{" "}
              </p>
            </GuildDescription>
            <InputContainer>
              <InputWrapper>
                <Input placeholder="Enter your Email Address" />
                <Select
                  value={options.value}
                  options={options}
                  defaultValue={options[1]}
                  styles={{
                    control: (any) => ({
                      ...any,
                      background: "none",
                      color: "white",
                      border: "none",
                      position: "relative",
                      left: "10%",
                      width: "100%",
                      marginRight: "0px",
                    }),

                    menu: (any) => ({
                      ...any,
                      background: "black",
                      border: "none",
                      color: "white",
                    }),

                    option: (any, state) => ({
                      ...any,
                      background: state.isFocused ? "blue" : "black",
                    }),

                    indicatorsContainer: (any) => ({
                      border: "none",
                    }),

                    singleValue: (provided) => ({
                      ...provided,
                      color: "white",
                      display: "flex",
                      width: "100%",
                      paddingLeft: "-20px",
                    }),

                    dropdownIndicator: (any) => ({
                      ...any,
                      paddingLeft: "10px",
                    }),
                  }}
                />

                <ArrowContainer>
                  <ArrowImage src={Arrow} alt="error"></ArrowImage>
                </ArrowContainer>
              </InputWrapper>
            </InputContainer>
          </Guild>
        </HeroLeft>
        <HeroRight>
          <img src={GorillaImage} alt="error"></img>
          
          <TextWrapper>
            <TextBox1>
              <p>Automate payments for quick transparent cashout?</p>
            </TextBox1>

            <TextBox2><p>You mean, i can track my scholars’ performance</p></TextBox2>

            <TextBox3>
              <p>All on one platform that doesn’t lag? You’re Kidding</p>
            </TextBox3>

            <TextBox4><p>Search and Breed Axies and NFTs</p></TextBox4>
            
            <Coin src={Etherium} alt="error"></Coin>
            <StackofCoin1 src={Coins} alt="error"></StackofCoin1>
            <StackofCoin2 src={Coins} alt="error"></StackofCoin2>
          </TextWrapper>

        </HeroRight>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Gorilla;
