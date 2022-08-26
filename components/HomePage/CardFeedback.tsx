import {memo} from "react";
import styled from "styled-components";
import Image from "next/image";
import {IC_CONTENT_01, IC_FIVE_STAR} from "../../assets";
import {RowSection} from "../../pages";
import {LeftDiv} from "../HomePage/CardContentSection";
import {fontScale} from "../../utils/fontScale";

export const CardFeedback = memo(function CardFeedback(){
    return (
<Container>
    <LeftDiv>
        <Image src={IC_CONTENT_01}/>
        <TextHeading>Store A</TextHeading>
    </LeftDiv>
    <br/>
    <LeftDiv>
        <Image src={IC_FIVE_STAR}/>
    </LeftDiv>
    <br/>
    <TextNormal>We provide apps that deal with daily struggles of a merchant.</TextNormal>
</Container>
    )
})
const Container = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  padding:40px 20px;
  background-color: #F6F6F7;
  border-radius: 6px;
;
`
const TextHeading = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: ${p=> fontScale(28)}px;
  line-height: 38px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const TextNormal = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: ${p=> fontScale(16)}px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`

