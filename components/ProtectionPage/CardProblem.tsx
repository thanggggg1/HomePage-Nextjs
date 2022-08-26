import {memo} from "react";
import styled from "styled-components";
import Image from "next/image";
import {IMG_CARD_PROBLEM} from "../../assets";
import {fontScale} from "../../utils/fontScale";

export const CardProblem = memo(function CardProblem(props:any) {
    return (
        <Container>
            <div style={{width:'100%'}}>
                <Image src={IMG_CARD_PROBLEM} layout={'responsive'}/>
            </div>
            <TextTitle>{props.title}</TextTitle>
            <TextContent>{props.content}</TextContent>
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
const TextTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: ${p=> fontScale(20)}px;
  line-height: 170%;
  letter-spacing: 0.025em;
  color: #1D1B29;
  margin-top: 20px;
`
const TextContent = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: ${p=> fontScale(20)}px;
  line-height: 170%;
  letter-spacing: 0.025em;
  color: #1D1B29;
  margin-top: 20px;

`