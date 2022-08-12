import React, {memo} from "react";
import styled from "styled-components";

export const GradientBox = memo(function GradientBox() {
    return (
        <Container>
            <TextHeading>Ready to boost up your sales?</TextHeading>
            <TextNormal>Are you ready to join the race?</TextNormal>
            <br/>
            <Button>
                <TextButton>Get started</TextButton>
            </Button>
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(325.97deg, #004AF7 -8.5%, #00D0FF 66.04%);
  width: 100%;
  padding:60px 0;
  border-radius: 6px;
`
const TextHeading = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 55px;
  letter-spacing: 0.025em;
  color: #F6F6F7;
`
const TextNormal = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.025em;
  color: #F6F6F7;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 50px;
  background-color: white;
  border-radius: 6px;
  border: none;
`
const TextButton = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #18A0FB;
`