import React, {memo} from "react";
import styled from "styled-components";
import Image from "next/image";
import {IMG_CARD_PROBLEM} from "../../assets";
import {DivSpaceBetWeen} from "../../pages";
import {fontScale} from "../../utils/fontScale";
import Link from "next/link";
import UseWindowSize from "../../utils/useWindowSize";

export const CardBlog = memo(function CardBlogHomePage() {
    const {width}=UseWindowSize();
    return (
        <Container width={width}>
            <Image src={IMG_CARD_PROBLEM}/>
            <ContentDiv>
                <DivSpaceBetWeen width={width}>
                    <TextCategory>Marketing</TextCategory>
                    <TextTime>Published 04.08.22</TextTime>
                </DivSpaceBetWeen>
                <Link href={'/Blog/posts/123'} passHref>
                    <TextTitle>Various kinds of app for every
                        problems</TextTitle>
                </Link>
                <TextContent>We provide apps that deal with daily struggles
                    of a merchant.</TextContent>
            </ContentDiv>
        </Container>
    )
})
const Container = styled.div<{width:number}>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  max-width: 520px;
  height: 100%;
  box-shadow: 0px 2px 4px 0px #0000001A;
  border-radius: 6px;
  margin-bottom: ${p=>p.width > 1024 ? 20 : 0}px;
`
const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const TextCategory = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: ${p => fontScale(12)}px;
  line-height: 16px;
  letter-spacing: 0.025em;
  color: #18A0FB;

`
const TextTime = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: ${p => fontScale(12)}px;
  line-height: 16px;
  letter-spacing: 0.025em;
  color: rgba(29, 27, 41, 0.5);
`
const TextTitle = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: ${p => fontScale(20)}px;
  line-height: 27px;
  letter-spacing: 0.025em;
  color: #1D1B29;
  cursor: pointer;
  &:hover{
    color: #18A0FB;
  }
`
const TextContent = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: ${p => fontScale(16)}px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: rgba(29, 27, 41, 0.5);
`

