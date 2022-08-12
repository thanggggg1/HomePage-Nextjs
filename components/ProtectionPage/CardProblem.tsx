import {memo} from "react";
import styled from "styled-components";
import Image from "next/image";
import {IMG_CARD_PROBLEM} from "../../assets";

export const CardProblem = memo(function CardProblem() {
    return (
        <Container>
            <Image src={IMG_CARD_PROBLEM}/>
            <TextTitle>Your work belongs to you!</TextTitle>
            <TextContent>Original images and content are valuable digital assets that must be well-protected to prevent
                replication.</TextContent>
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const TextTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 170%;
  letter-spacing: 0.025em;
  color: #1D1B29;
  margin-top: 20px;
`
const TextContent = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 170%;
  letter-spacing: 0.025em;
  color: #1D1B29;
  margin-top: 20px;

`