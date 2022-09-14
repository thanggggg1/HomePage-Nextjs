import React, {memo} from "react";
import styled from "styled-components";
import Image from "next/image";
import {IC_FACEBOOK, IC_INSTAGRAM, IC_LINKEDIN, IC_YOUTUBE, IMG_SHOPIFY_LOGO} from "../assets";
import {fontScale} from "../utils/fontScale";
import {DivRowFlex} from "../pages/Blog/BlogPage";
import {RowSection} from "../pages";
import Link from "next/link";
import UseWindowSize from "../utils/useWindowSize";
import {Column} from "./NavBar";

export const Footer = memo(function Footer() {
    const {width} = UseWindowSize();
    return (
        <Container id={'footer'}>
            <ContentContainer>
                <BorderDivSpaceBetWeen width={width}>
                    {width && width > 1024 && <LeftContainer>
                        <TextLogoSortEcom>sortecom</TextLogoSortEcom>
                        <TextNormal>Built for Shopify & Shopify Plus</TextNormal>
                        <Image src={IMG_SHOPIFY_LOGO}/>
                    </LeftContainer>}
                    <RightContainer width={width}>
                        <WrapperFooter>
                            <ColumnWrapper>
                                <ColumnContent>
                                    <TextTileList>Menu</TextTileList>
                                    <TextListItem href="/">Home</TextListItem>
                                    <TextListItem href="#about">About us</TextListItem>
                                    <Link href="/Blog/BlogPage" passHref>
                                        <TextListItem href="/Blog/BlogPage">Blog</TextListItem>
                                    </Link>
                                    <TextListItem href="#footer">Contact</TextListItem>
                                </ColumnContent>
                            </ColumnWrapper>
                            <ColumnWrapper>
                                <ColumnContent>
                                    <TextTileList>SOCIAL MEDIA</TextTileList>
                                    <RowSection>
                                        <SImage>
                                            <Image src={IC_FACEBOOK}/>
                                        </SImage>
                                        <TextListItem>Facebook</TextListItem>
                                    </RowSection>
                                    <RowSection>
                                        <SImage>
                                            <Image src={IC_LINKEDIN}/>
                                        </SImage>
                                        <TextListItem>Linked in</TextListItem>
                                    </RowSection>
                                    <RowSection>
                                        <SImage>
                                            <Image src={IC_INSTAGRAM}/>
                                        </SImage>
                                        <TextListItem>Instagram</TextListItem>
                                    </RowSection>
                                    <RowSection>
                                        <SImage>
                                            <Image src={IC_YOUTUBE}/>
                                        </SImage>
                                        <TextListItem>Youtube</TextListItem>
                                    </RowSection>
                                </ColumnContent>
                            </ColumnWrapper>
                            <ColumnWrapper>
                                <ColumnContent>
                                    <TextTileList>RESOURCES</TextTileList>
                                    <TextListItem>Business Blog</TextListItem>
                                    <TextListItem>Learning Center</TextListItem>
                                    <TextListItem>Community</TextListItem>
                                    <TextListItem>Help Document</TextListItem>
                                </ColumnContent>
                            </ColumnWrapper>
                            <ColumnWrapper>
                                <ColumnContent>
                                    <TextTileList>Product</TextTileList>
                                    <TextListItem>Free Gift - BOGO </TextListItem>
                                    <TextListItem>Email Marketing </TextListItem>
                                    <TextListItem href={'https://protect.sortecom.com/'}>Disable Right Click
                                        AntiTheft</TextListItem>
                                    <TextListItem>Banner - Free Shipping Bar </TextListItem>
                                </ColumnContent>
                            </ColumnWrapper>
                        </WrapperFooter>
                    </RightContainer>
                    {width < 1024 && <Column>
                        <TextNormal>Built for Shopify & Shopify Plus</TextNormal>
                        <Image src={IMG_SHOPIFY_LOGO} />
                    </Column> }
                </BorderDivSpaceBetWeen>
            </ContentContainer>
            <ContentContainer>
                <RowFull>
                    <LeftFooter>
                        <TextNormal>© 2022, Techverest. All rights reserved.</TextNormal>
                    </LeftFooter>
                    <RightFooter>
                        <TextNormal>Terms of service</TextNormal>
                        <Link href={'/Policy/PrivacyPolicy'} passHref>
                            <TextNormal href={'/Policy/PrivacyPolicy'}>Private Policy</TextNormal>
                        </Link>
                        <TextNormal>Support Policy</TextNormal>
                        <TextNormal>Cookies</TextNormal>
                    </RightFooter>
                </RowFull>
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

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
`
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 33%;
`
const RightContainer = styled.div<{ width: number }>`
  width: ${p => p.width > 1024 ? '66%' : '100%'};
  display: flex;
`
const BorderDivSpaceBetWeen = styled.div<{width:number}>`
  display: flex;
  flex-direction: ${p=>p.width > 1024 ? 'row' :'column'};
  width: 100%;
  border-bottom: 1px solid #F6F6F7;
  padding-bottom: 40px;
`

const TextNormal = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: ${p => fontScale(12)}px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #F6F6F7;
  margin-bottom: 6px;
  &:hover {
    color: #ffffff;
  !important;
  }
`
const TextLogoSortEcom = styled.span`
  font-style: normal;
  font-weight: 800;
  font-size: ${p => fontScale(20)}px;
  line-height: 27px;
  letter-spacing: 0.01em;
  color: #F6F6F7;
  margin-bottom: 24px;
`
const TextTileList = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: ${p => fontScale(16)}px;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #F6F6F7;
  margin-bottom: 12px;
`
const ColumnWrapper = styled.div`
  display: flex;
  flex: 1;
`
const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`
const TextListItem = styled.a`
  font-weight: 600;
  font-size: ${p => fontScale(12)}px;
  font-style: normal;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #C9C9C9;

  &:hover {
    color: #ffffff;
  !important;
  }

  margin: 6px 0;
`
const SImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`
const LeftFooter = styled.div`
  display: flex;
  width: 50%;
`
const RightFooter = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  margin-left: -6px;
`
const RowFull = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
export const WrapperFooter = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`