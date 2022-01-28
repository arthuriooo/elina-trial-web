import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import Triangle from "./Triangle.svg";

const spin = keyframes`
from {transform: rotate(0deg)}
to {transform: rotate(360deg)}
`;

const spin2 = keyframes`
from {transform: rotate(0deg)}
to {transform: rotate(1440deg)}
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(#da22ff, #9733ee);
`;

const Title = styled.p`
  color: white;
  font-size: 40px;
  padding: 0 20px;
  font-weight: bold;
  text-align: center;

  margin: 50px 0 0;
`;

const Circle = styled(motion.div)`
  width: 300px;
  height: 310px;
  border-radius: 50%;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  margin-top: -60px;

  z-index: 40;

  overflow: hidden;

  /* animation: ${spin2} ${({ isSpinnable, spins }) =>
    isSpinnable && `${spins}s`}
    infinite; */
`;

// const CircleText = styled.p``;

const CircleHalf = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  z-index: 50;

  overflow: hidden;

  border-top-left-radius: 1000px;
  border-top-right-radius: 1000px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 5px 0;

  /* background: white; */
  background: linear-gradient(#a8ff78, #78ffd6);

  /* > div { */
  /* background: linear-gradient(#11998e, #38ef7d); */
  /* background: white; */
  /* border-radius: 50%; */
  /* overflow: hidden; */

  /* z-index: 80; */
  /* } */

  box-shadow: 0px 0px 400px 10px rgba(255, 255, 255, 0.5);

  > p {
    z-index: 100;

    font-size: 30px;
    font-weight: bold;
    color: black;
  }

  &:last-child {
    transform: rotate(180deg);
    background: linear-gradient(#ff416c, #ff4b2b);

    /* > div { */
    /* background: linear-gradient(#ed213a, #93291e); */
    /* } */
  }
`;

const Back = styled.div`
  position: absolute;
  width: 300%;
  height: 300%;

  animation: ${spin} 2s infinite;

  border: 4px solid blue;
  box-sizing: border-box;
`;

const Arrow = styled.img`
  width: 80px;
  margin: 0;

  z-index: 200;
`;

const Button = styled.div`
  border: 4px solid white;
  font-size: 30px;
  font-weight: bold;
  color: white;
  width: 80%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 60px;
  border-radius: 20px;
`;

function App() {
  const [isSpinnable, setIsSpinnable] = useState(false);
  const [spins, setSpins] = useState(0);
  const [prevSpins, setPrevSpins] = useState(0);

  // useEffect(() => {
  //   if (isSpinnable) {
  //     setTimeout(() => {
  //       setIsSpinnable(false);
  //       // setSpins(0);
  //     }, spins * 800);
  //   }
  // }, [isSpinnable, spins]);

  // const getRandomSpins = () => {
  //   return Math.random() * 80;
  // };

  const onClickButton = () => {
    setSpins(0);
    // setIsSpinnable(true);
    setIsSpinnable((prev) => !prev);

    const turns = Math.floor(Math.random() * 200);
    const degrees = Math.random() * 80;
    const sign = Math.random() <= 0.5 ? -1 : 1;

    // console.log("random 1", spinsAmount);
    const spinsAmount = 360 * turns + degrees * sign;

    if (prevSpins % 2 === 0) {
      setSpins(spinsAmount);
    } else {
      setSpins(spinsAmount * -1);
    }

    // const spinsAmount = prevSpins % 2 === 0 ? spinsAmount : spinsAmount * -1;
    console.log("random 1", spins);
    setPrevSpins((prev) => prev++);

    // setTimeout(() => {
    //   setIsSpinnable(false);
    // }, spins * 800);

    // setTimeout(() => {
    //   setIsSpinnable(false);
    //   // setSpins(0);
    // }, spins * 1000);
  };

  return (
    <Wrapper>
      <Title>Пройдёт ли Элина испыталку?</Title>
      <Arrow alt="" src={Triangle} />
      <Circle
        isSpinnable={isSpinnable}
        spins={spins}
        animate={{
          rotate: spins,
          transition: {
            rotate: {
              duration: spins / 8000,
            },
          },
        }}
      >
        {/* <motion.div
          animate={{
            rotate: isSpinnable ? 1440 : 0,
          }}
        > */}
        <CircleHalf>
          {/* <Back /> */}
          <p>Пройдет</p>
        </CircleHalf>
        {/* </motion.div> */}
        <CircleHalf>
          {/* <Back /> */}
          <p>Не пройдет</p>
        </CircleHalf>
      </Circle>
      <Button onClick={onClickButton}>Крутить</Button>
    </Wrapper>
  );
}

export default App;
