import React, {memo} from "react";
import styled from "styled-components";
import Image from "next/image";
import {IMG_BLOG_EXAMPLE} from "../../assets";
import {ButtonNavBar, TextButtonWhite} from "../NavBar";

export const CardBlogHomePage = memo(function CardBlogHomePage() {
    return (
        <Container>
            <LeftSection>
                <TextHeading>Various kinds of app for every problems</TextHeading>
                <TextNormal>We provide apps that deal with daily struggles of a merchant.</TextNormal>
                <ListBullets>
                    <ItemList>Sending email/SMS in bulk</ItemList>
                    <ItemList>Special gift offers</ItemList>
                    <ItemList>Disable right-click & Content protection</ItemList>
                </ListBullets>
                <ButtonNavBar>
                    <TextButtonWhite>Read full story</TextButtonWhite>
                </ButtonNavBar>
            </LeftSection>
            <RightSection>
                <Image src={IMG_BLOG_EXAMPLE}/>
            </RightSection>
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 70px;
  margin-top: 20px;
  border-radius: 6px;
`
const TextHeading = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const TextNormal = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
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
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: rgba(29, 27, 41, 0.5);
`
const LeftSection = styled.div`
   width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const RightSection = styled.div`
  width: 49%;
`