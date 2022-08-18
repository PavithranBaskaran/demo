import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import React from "react";
import styled from "styled-components";
import model1 from "../img/model-png-1976.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
function Slider() {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper>
        <Slide >
          <ImgContainer>
            <Image src={model1} />
          </ImgContainer>
          <InfoContainer>
            <Title>Summer Sale</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
              provident itaque dolorum doloribus qui consequuntur, maiores nisi
              repudiandae voluptatum quibusdam odio inventore fuga corrupti
              laudantium tempora accusantium quam architecto? Hic.
            </Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>

        <Slide>
          <ImgContainer>
            <Image src={model1} />
          </ImgContainer>
          <InfoContainer>
            <Title>Super Sale</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
              provident itaque dolorum doloribus qui consequuntur, maiores nisi
              repudiandae voluptatum quibusdam odio inventore fuga corrupti
              laudantium tempora accusantium quam architecto? Hic.
            </Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>

        <Slide>
          <ImgContainer>
            <Image src={model1} />
          </ImgContainer>
          <InfoContainer>
            <Title>Mega Sale</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
              provident itaque dolorum doloribus qui consequuntur, maiores nisi
              repudiandae voluptatum quibusdam odio inventore fuga corrupti
              laudantium tempora accusantium quam architecto? Hic.
            </Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>

        <Slide>
          <ImgContainer>
            <Image src={model1} />
          </ImgContainer>
          <InfoContainer>
            <Title>Popular Sale</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
              provident itaque dolorum doloribus qui consequuntur, maiores nisi
              repudiandae voluptatum quibusdam odio inventore fuga corrupti
              laudantium tempora accusantium quam architecto? Hic.
            </Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>

      <Arrow direction="right">
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
}

export default Slider;
