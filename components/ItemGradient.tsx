import React, {memo} from "react";
import styled from "styled-components";
import {IMG_BACKGROUND_BLACK} from "../assets";
import {fontScale} from "../utils/fontScale";

export const ItemGradient = memo(function ItemGradient(props:any) {
    return (
        <Container className={'content_bg_black'} isCenter={props.greenText}>
            {props.greenText && <TextGreen>{props.greenText}</TextGreen>}
            <Text>{props.text}</Text>
        </Container>
    )
})
const Container = styled.div<{isCenter:boolean}>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: ${p=>!p.isCenter && 'center' };
  padding:60px 40px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
`
const Text = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: ${p=> fontScale(32)}px;
  line-height: 44px;
  letter-spacing: 0.025em;
  color: #FFFFFF;
`
const TextGreen = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: ${p=> fontScale(14)}px;
  line-height: 16px;
  letter-spacing: 0.025em;
  color: #30C973;
`