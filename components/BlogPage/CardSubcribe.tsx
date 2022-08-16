import React, {memo} from "react";
import styled from "styled-components";
import {ButtonNavBar, TextButtonWhite} from "../NavBar";

export const CardSubcribe = memo(function CardSubcribe() {
    return (
        <Container>
            <TextTitle>Subscribe to our Blog</TextTitle>
            <TextSubTitle>Get the latest posts in your email</TextSubTitle>
            <InputBox placeholder={'Enter your email address'}/>
                <ButtonNavBar style={{width:'100%'}}>
                    <TextButtonWhite>Subcribe</TextButtonWhite>
                </ButtonNavBar>
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  height: 100%;
  width: 100%;
  max-width: 520px;
padding:12% 20px;
`
const TextTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 0.025em;
  color: #1D1B29;
  margin: 10px 0;
`
const TextSubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: rgba(29, 27, 41, 0.5);
  margin: 10px 0;

`
const InputBox = styled.input`
  display: flex;
  width: 100%;
  border: 1.5px solid #CACACA;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(29, 27, 41, 0.5);
  background-color: white;
  border-radius: 6px;
  padding: 9px 12px;
  margin: 10px 0;

`