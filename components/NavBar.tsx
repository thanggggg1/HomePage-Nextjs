import React, {memo, useCallback, useEffect} from "react";
import styled from "styled-components";
import Image from 'next/image'
import {IC_PROTECTION, IC_SHAPE_DOWN, IMG_LOGO, IMG_TOGGLE} from "../assets";
import {DivSpaceBetWeen, RowSection} from "../pages";
import $ from 'jquery'
import Link from "next/link";
import UseWindowSize from "../utils/useWindowSize";
import {MenuBarResponsive} from "./MenuBarResponsive";
import {fontScale} from "../utils/fontScale";
export const NavBar = memo(function NavBar() {
    useEffect(() => {
        $(".hoverable-dropdown").hover(function () {
            var isHovered = $(this).is(":hover");
            if (isHovered) {
                $(this).children("div").eq(1).stop().slideDown(300);
            } else {
                $(this).children("div").eq(1).stop().slideUp(300);
            }
        });
    }, [])
    const {width} = UseWindowSize()

    const onSlide = useCallback(()=>{
        if ( $(".click-to-slide").is( ":hidden" ) ) {
            $(".click-to-slide").slideDown( "slow" );
        } else {
            $(".click-to-slide").slideUp('fast');
        }
    },[])

    return (
        <>
            <Container>
                <ContentContainer>
                    <RowNavBar>
                        <SLink href='/' passHref>
                            <div style={{cursor: "pointer"}}>
                                <ImageLogo src={IMG_LOGO}/>
                            </div>
                        </SLink>
                        {width && width > 1024 ? <RowSectionMiddle>
                            <DivOptionNavBar>
                                <TextNavBar href="#about">About us</TextNavBar>
                            </DivOptionNavBar>
                            <DivOptionNavBar className={'hoverable-dropdown'} style={{position: "relative"}}>
                                <RowSection>
                                    <TextNavBar>Products</TextNavBar>
                                    <Image src={IC_SHAPE_DOWN} className={'change'}/>
                                </RowSection>
                                <DropDownMenu>
                                    <ItemDropDown>
                                        <Row>
                                            <div style={{marginRight: 20}}>
                                                <Image src={IC_PROTECTION} width={100} height={100}/>
                                            </div>
                                            <Column>
                                                <Link href="/Products/ProtectionPage" passHref>
                                                    <TextNavBarBold href="/Products/ProtectionPage">Protection</TextNavBarBold>
                                                </Link>
                                                <TextNavBarSpan>All images, videos and content on your store belong to you only. prevents all intentional
                                                    violation of your copyright by disable right clicks, download, keyboard shortcuts, and Dev Tools.</TextNavBarSpan>
                                            </Column>
                                        </Row>
                                    </ItemDropDown>
                                    <ItemDropDown>
                                        <Row>
                                            <div style={{marginRight: 20}}>
                                                <Image src={IC_PROTECTION} width={100} height={100}/>
                                            </div>
                                            <Column>
                                                <Link href="/Products/FreeGiftPage" passHref>
                                                    <TextNavBarBold href="/Products/FreeGiftPage">Freegift</TextNavBarBold>
                                                </Link>
                                                <TextNavBarSpan>Unlimited campaign creation: BOGO, buy one get discount,
                                                    buy one get free gifts, buy 2 get discount or get 1 product, and many customized ways to create a desired campaign, even the most complicated ones.
                                                </TextNavBarSpan>
                                            </Column>
                                        </Row>
                                    </ItemDropDown>
                                </DropDownMenu>
                            </DivOptionNavBar>
                            <DivOptionNavBar>
                                <Link href={'/Blog/BlogPage'} passHref>
                                    <TextNavBar href="/Blog/BlogPage">Blogs</TextNavBar>
                                </Link>
                            </DivOptionNavBar>
                            <DivOptionNavBar>
                                <TextNavBar href="#footer">Contact</TextNavBar>
                            </DivOptionNavBar>
                        </RowSectionMiddle> : <RowSectionMiddle/>}
                        {width && width > 1024 ? <DivOptionNavBar>
                            <ButtonNavBar className='click-btn btn-style505'>
                            <TextButtonWhite>Start free on Shopify</TextButtonWhite>
                            </ButtonNavBar>
                            </DivOptionNavBar> :   <ButtonToggle onClick={onSlide}>
                            <Image src={IMG_TOGGLE} width={32} height={32}/>
                        </ButtonToggle> }
                    </RowNavBar>
                </ContentContainer>
            </Container>
            <MenuBarResponsive/>
        </>
    )
})


const Container = styled.div`
  position: sticky;
  left: 0;
  top: .001px;
  right: 0;
  bottom: auto;
  display: flex;
  min-height: 48px;
  padding-right: 32px;
  padding-left: 32px;
  align-items: center;
  background-color: #F6F6F7;
  z-index: 1000;
`
const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`
const ImageLogo = styled(Image)`

`
const DivOptionNavBar = styled.div`
margin-left: 80px;
`

const RowNavBar = styled.div`
display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
`
const RowSectionMiddle = styled.div`
display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`
const TextNavBar = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: ${p=> fontScale(16)}px;
  line-height: 15px;
  color: #1D1B29;
  margin-right: 12px;
`
const TextNavBarBold = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: ${p=> fontScale(18)}px;
  line-height: 15px;
  color: #1D1B29;
`
const TextNavBarSpan = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: ${p=> fontScale(16)}px;
  line-height: 20px;
  margin-top: 12px;
  color: #a1a0a0;
`
export const ButtonNavBar = styled.button`
  display: flex;
  margin-right: -1px;
  align-items: center;
  justify-content: center;
  background-color: #004AF7;
  padding: 10px 30px;
  border: none;
  border-radius: 6px;
  &:hover {
    background-color: #1030a0
  ;
  }
`
export const TextButtonWhite = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: ${p=> fontScale(16)}px;
  line-height: 19px;
  letter-spacing: -0.015em;
  color: #F6F6F7;
`
const DropDownMenu = styled.div`
  position: absolute;
  flex-direction: column;
  display: none;
  background-color: white;
  padding: 20px;
  border-radius: 6px;
  width: 440px;
  margin-top: 20px;
`
const ItemDropDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`
export const SLink = styled(Link)`
  cursor: pointer;
`
export const Row = styled.div`
  display: flex;
  justify-content: center;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const ButtonToggle = styled.button`
background-color: #F6F6F7;
  border: none;

`