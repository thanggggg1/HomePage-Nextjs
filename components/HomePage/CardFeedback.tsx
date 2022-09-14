import {memo} from "react";
import styled from "styled-components";
import Image from "next/image";
import {IC_CONTENT_01, IC_FIVE_STAR} from "../../assets";
import {LeftDiv} from "../HomePage/CardContentSection";
import {fontScale} from "../../utils/fontScale";


const NUM_OF_LINES=4

interface CardFeedbackProps {
    name: string;
    iconUri: string;
    content: string;
}

export const CardFeedback = memo(function CardFeedback(props: CardFeedbackProps) {
    const {name, iconUri, content} = props;
    return (
        <Container>
            <LeftDiv>
                <Image src={IC_CONTENT_01}/>
                <TextHeading>{name}</TextHeading>
            </LeftDiv>
            <br/>
            <LeftDiv>
                <Image src={IC_FIVE_STAR}/>
            </LeftDiv>
            <br/>
            <ContentDiv>
                <TextNormal>{content}</TextNormal>
            </ContentDiv>
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #F6F6F7;
  border-radius: 6px;
`
const TextHeading = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: ${p => fontScale(28)}px;
  line-height: 38px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const TextNormal = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: ${p => fontScale(16)}px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const ContentDiv = styled.div`
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px; /* fallback */
  max-height: 120px; /* fallback */
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
`
