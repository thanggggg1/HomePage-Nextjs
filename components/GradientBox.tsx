import React, {memo} from "react";
import styled from "styled-components";
import {fontScale} from "../utils/fontScale";
import Link from "next/link";

export const GradientBox = memo(function GradientBox(props:any) {
    return (
        <Container className={'content_bg_footer'}>
            <TextHeading>
                It is time to <TextHeadingGreen>Boost up</TextHeadingGreen> your sale
            </TextHeading>
            <TextNormal>Are you ready to join the race?</TextNormal>
            <br/>
            <Link href={'https://apps.shopify.com/partners/sortecom-team'}>
                <Button>
                    {props.isProtection ? <TextButton>Activate Protection</TextButton> : <TextButton>Get started</TextButton>}
                </Button>
            </Link>
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 60px 0;
  border-radius: 6px;
`
const TextHeading = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: ${p => fontScale(40)}px;
  line-height: 55px;
  letter-spacing: 0.025em;
  color: #F6F6F7;
  text-align: center;
`
const TextHeadingGreen = styled(TextHeading)`
  color: #30C973;
`
const TextNormal = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: ${p => fontScale(20)}px;
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
  font-size: ${p => fontScale(20)}px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #004AF7;
`