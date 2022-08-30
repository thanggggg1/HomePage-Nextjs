import React, {memo} from "react";
import styled from "styled-components";
import {DivSpaceBetWeen, RowSection} from "../pages/index";
import Image from "next/image";
import {IC_FACEBOOK, IC_INSTAGRAM, IC_LINKEDIN, IC_YOUTUBE} from "../assets";
import {fontScale} from "../utils/fontScale";
import Link from "next/link";

export const Footer = memo(function Footer() {
    return (
        <Container id={'footer'}>
            <ContentContainer>
                <BorderDivSpaceBetWeen>
                    <ColumnWrapper>
                        <ListTitle>
                            SortEcom
                        </ListTitle>
                        <ListItem>
                            <ImageWrapper>
                                <Image src={IC_FACEBOOK}/>
                            </ImageWrapper>
                            <TextListItem>Facebook</TextListItem>
                        </ListItem>
                        <ListItem>
                            <ImageWrapper>
                                <Image src={IC_LINKEDIN}/>
                            </ImageWrapper> <TextListItem>Linkedin</TextListItem>
                        </ListItem>
                        <ListItem>
                            <ImageWrapper>
                                <Image src={IC_INSTAGRAM}/>
                            </ImageWrapper> <TextListItem>Instagram</TextListItem>
                        </ListItem>
                        <ListItem>
                            <ImageWrapper>
                                <Image src={IC_YOUTUBE}/>
                            </ImageWrapper> <TextListItem>Youtube</TextListItem>
                        </ListItem>
                    </ColumnWrapper>
                    <ColumnWrapper>
                        <ListTitle>
                            MENU
                        </ListTitle>
                        <ListItem>
                            <div className="effect-underline">
                                <TextListItem href="/">Home</TextListItem>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div>
                                <TextListItem href="#about">About us</TextListItem>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div>
                                <TextListItem href="/Blog/BlogPage">Blog</TextListItem>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div>
                                <TextListItem href="#footer">Contact</TextListItem>
                            </div>
                        </ListItem>
                    </ColumnWrapper>
                    <ColumnWrapper>
                        <ListTitle>
                            Product
                        </ListTitle>
                        <ListItem>
                            <div>
                                <TextListItem>Free Gift - BOGO (Updating)</TextListItem>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div>
                                <TextListItem>Email Marketing (Updating)</TextListItem>
                            </div>
                        </ListItem>
                        <ListItem>
                            <Link href={'https://protect.sortecom.com/'} passHref>
                                <TextListItem href={'https://protect.sortecom.com/'}>Disable Right-click & Content Protection</TextListItem>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <div>
                                <TextListItem>Banner - Free Shipping Bar (Updating)</TextListItem>
                            </div>
                        </ListItem>
                    </ColumnWrapper>
                    <ColumnWrapper>
                        <ListTitle>
                            Resources
                        </ListTitle>
                        <ListItem>
                            <div>
                                <TextListItem>Blog</TextListItem>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div>
                                <TextListItem>Learning Center</TextListItem>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div>
                                <TextListItem>Community</TextListItem>
                            </div>
                        </ListItem>
                        <ListItem>
                            <div>
                                <TextListItem>Help Document</TextListItem>
                            </div>
                        </ListItem>
                    </ColumnWrapper>
                </BorderDivSpaceBetWeen>
            </ContentContainer>
            <ContentContainer>
                <DivSpaceBetWeen>
                    <div>
                        <TextListItem>© 2022, Sortecom. All rights reserved.</TextListItem>
                    </div>
                    <RightFooterSection>
                        <TextListItem>Terms of service</TextListItem>
                        <TextListItem>Private Policy</TextListItem>
                        <TextListItem>Support Policy</TextListItem>
                        <TextListItem>Cookies</TextListItem>
                    </RightFooterSection>
                </DivSpaceBetWeen>
            </ContentContainer>
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1D1B29;
  padding: 60px 32px;
  width: 100%;
`
const ContentContainer =styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin-top: 80px;
  margin-right: auto;
  margin-left: auto;
`
const ListTitle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: ${p=> fontScale(14)}px;
  line-height: 19px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #F6F6F7;
`
const List = styled.ul`
  list-style-position: outside;
`
const ListItem = styled.li`
  display: flex;
  align-items: center;
`
const TextListItem = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: ${p=> fontScale(10)}px;
  line-height: 14px;
  letter-spacing: 0.01em;
  color: #C9C9C9;
  &:hover{
    color: #ffffff; !important;
  }
`
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
  align-items: flex-start;
`
const ImageWrapper = styled.div`
  margin-right: 8px;
`
const BorderDivSpaceBetWeen = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #F6F6F7;
  padding-bottom: 20px;
  margin-bottom: 20px;
`
const RightFooterSection = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`