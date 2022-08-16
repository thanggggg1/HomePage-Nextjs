import React, {memo} from "react";
import styled from "styled-components";
import {DivSpaceBetWeen, RowSection} from "../pages/index";
import Image from "next/image";
import {IC_FACEBOOK, IC_INSTAGRAM, IC_LINKEDIN, IC_YOUTUBE} from "../assets";

export const Footer = memo(function Footer() {
    return (
        <Container id={'footer'}>
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
                        <div>
                            <TextListItem className="effect-underline">Home</TextListItem>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div>
                            <TextListItem>About us</TextListItem>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div>
                            <TextListItem>Blog</TextListItem>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div>
                            <TextListItem>Contact</TextListItem>
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
                        <div>
                            <TextListItem>Disable Right-click & Content Protection</TextListItem>
                        </div>
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
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1D1B29;
  padding: 60px 12.5%;

`
const ListTitle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
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
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
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