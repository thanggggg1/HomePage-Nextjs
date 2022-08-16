import React, {memo, useEffect} from "react";
import styled from "styled-components";
import Image from 'next/image'
import {IC_PROTECTION, IC_SHAPE_DOWN, IMG_LOGO} from "../assets";
import {RowSection} from "../pages";
import $ from 'jquery'
import Link from "next/link";

export const NavBar = memo(function NavBar() {
 useEffect(()=>{
     $(".hoverable-dropdown").hover(function() {
         var isHovered = $(this).is(":hover");
         if (isHovered) {
             $(this).children("div").eq(1).stop().slideDown(300);
         } else {
             $(this).children("div").eq(1).stop().slideUp(300);
         }

     });
 },[])

    return (
        <Container>
            <SLink href={'/'}>
                <ImageLogo src={IMG_LOGO}/>
            </SLink>
            <RowSection>
                <DivOptionNavBar>
                    <TextNavBar href="#about">About us</TextNavBar>
                </DivOptionNavBar>
                <DivOptionNavBar className={'hoverable-dropdown'} style={{position:"relative"}}>
                    <RowSection>
                        <TextNavBar>Products</TextNavBar>
                        <Image src={IC_SHAPE_DOWN} className={'change'}/>
                    </RowSection>
                    <DropDownMenu>
                            <ItemDropDown>
                                <Row>
                                   <div style={{marginRight:20}}>
                                       <Image src={IC_PROTECTION} width={100} height={100}/>
                                   </div>
                                    <Column>
                                        <TextNavBarBold href="/Products/ProtectionPage">Protection</TextNavBarBold>
                                        <TextNavBarSpan>Increase engagement and repeat sales through our fully featured loyalty & rewards program. Reward points and discounts to encourage sales</TextNavBarSpan>
                                    </Column>
                                </Row>
                            </ItemDropDown>
                        <ItemDropDown>
                            <Row>
                                <div style={{marginRight:20}}>
                                    <Image src={IC_PROTECTION} width={100} height={100}/>
                                </div>
                                <Column>
                                    <TextNavBarBold>Free gift</TextNavBarBold>
                                    <TextNavBarSpan>Increase engagement and repeat sales through our fully featured loyalty & rewards program. Reward points and discounts to encourage sales</TextNavBarSpan>
                                </Column>
                            </Row>
                        </ItemDropDown>
                    </DropDownMenu>
                </DivOptionNavBar>
                <DivOptionNavBar>
                    <TextNavBar href="/Blog/BlogPage">Blogs</TextNavBar>
                </DivOptionNavBar>
                <DivOptionNavBar>
                    <TextNavBar href="#footer" >Contact</TextNavBar>
                </DivOptionNavBar>
                <DivOptionNavBar>
                    <ButtonNavBar>
                        <TextButtonWhite>Start free on Shopify</TextButtonWhite>
                    </ButtonNavBar>
                </DivOptionNavBar>

            </RowSection>
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  position: fixed;
  top:0;
  left:0;
  right: 0;
  padding: 12px 12.5%;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  z-index: 1000;
  box-shadow: 0px 2px 4px 0px #0000001A;
`
const ImageLogo = styled(Image)`

`
const DivOptionNavBar = styled.div`
margin:0 20px;
`
const TextNavBar = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;
  color: #1D1B29;
  margin-right: 12px;
`
const TextNavBarBold = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 15px;
  color: #1D1B29;
`
const TextNavBarSpan = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;
  margin-top: 12px;
  color: #a1a0a0;
`
export const ButtonNavBar = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  background-color: #18A0FB;
  padding:10px 30px;
  border: none;
  border-radius: 6px;
  &:hover{
    background-color: #00609AFF;
  }
`
export const TextButtonWhite = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.015em;
  color: #F6F6F7;
`
const DropDownMenu = styled.div`
  position: absolute;
  flex-direction: column;
  display: none;
  background-color: white;
  padding:20px;
  border-radius: 6px;
  width: 360px;
  margin-top: 60px;
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