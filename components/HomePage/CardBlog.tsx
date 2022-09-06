import React, {memo} from "react";
import styled from "styled-components";
import Image from "next/image";
import {IMG_BLOG_EXAMPLE} from "../../assets";
import {ButtonNavBar, TextButtonWhite} from "../NavBar";
import {fontScale} from "../../utils/fontScale";
import UseWindowSize from "../../utils/useWindowSize";

export const CardBlogHomePage = memo(function CardBlogHomePage() {
    const {width}=UseWindowSize();
    return (
        <Container width={width}>
            <LeftSection width={width}>
                <TextHeading>Various kinds of app for every problems</TextHeading>
                <br/>
                <TextNormal>We provide apps that deal with daily struggles of a merchant.</TextNormal>
                <ListBullets>
                    <ItemList>Sending email/SMS in bulk</ItemList>
                    <ItemList>Special gift offers</ItemList>
                    <ItemList>Disable right-click & Content protection</ItemList>
                </ListBullets>
                <ButtonItem width={width}>
                    <ButtonNavBar>
                        <TextButtonWhite>Read full story</TextButtonWhite>
                    </ButtonNavBar>
                </ButtonItem>
            </LeftSection>
            <RightSection width={width}>
                <Image src={IMG_BLOG_EXAMPLE}/>
            </RightSection>
        </Container>
    )
})
const Container = styled.div<{width:number}>`
  display: flex;
  flex-direction: ${p=>p.width > 1024 ? 'row' : 'column'};
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 10%;
  margin-top: 20px;
  border-radius: 6px;
  width: 100%;
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
  color: rgba(29, 27, 41, 0.5);
`
const ListBullets = styled.ul`
  list-style-type: disc;
`
const ItemList = styled.li`
  font-style: normal;
  font-weight: 600;
  font-size: ${p=> fontScale(16)}px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: rgba(29, 27, 41, 0.5);
`
const LeftSection = styled.div<{width:number}>`
  display: flex;
  width: ${p=>p.width > 1024 ? '49%' : '100%'};
  flex-direction: column;
  justify-content: center;
`
const RightSection = styled.div<{width:number}>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: ${p=>p.width > 1024 ? '49%' : '100%'}
`
const ButtonItem = styled.div<{width:number}>`
  display: flex;
  align-items: center;
  justify-content: ${p=>p.width > 1024 ? 'flex-start' : 'center'};
`