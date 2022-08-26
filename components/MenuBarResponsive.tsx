import React, {memo, useCallback} from "react";
import styled from "styled-components";
import {fontScale} from "../utils/fontScale";
import Image from "next/image";
import {IC_PROTECTION, IC_SHAPE_DOWN} from "../assets";
import {Column} from "./NavBar";
import $ from "jquery";

export const MenuBarResponsive = memo(function MenuResponsive(){
    const onSlide = useCallback(()=>{
        if ( $(".click-to-slide-menu").is( ":hidden" ) ) {
            $(".click-to-slide-menu").slideDown( "slow" );
        } else {
            $(".click-to-slide-menu").slideUp('fast');
        }
    },[])
    return (
        <Container className="click-to-slide">
            <List>
                <Item>
                    <TextItem href="#about">About us</TextItem>
                </Item>
                <Item style={{justifyContent:'space-between'}} onClick={onSlide}>
                    <TextItem>Products</TextItem>
                    <Image src={IC_SHAPE_DOWN} className={'change'}/>
                </Item>
                <div className={'click-to-slide-menu'} style={{display:'none'}}>
                    <ItemDropDown>
                        <Image src={IC_PROTECTION} width={20} height={20}/>
                        <ColumnSection>
                            <TextTitleDrop>Protection</TextTitleDrop>
                            <TextContentDrop>Worrying about someone stealing your work?
                                Activate your protection now!</TextContentDrop>
                        </ColumnSection>
                    </ItemDropDown>
                    <ItemDropDown>
                        <Image src={IC_PROTECTION} width={20} height={20}/>
                        <ColumnSection>
                            <TextTitleDrop>Free Gift</TextTitleDrop>
                            <TextContentDrop>Unlimited campaign creation: BOGO, buy one get discount, buy one get free gifts</TextContentDrop>
                        </ColumnSection>
                    </ItemDropDown>
                </div>
                <Item>
                    <TextItem>Blog</TextItem>
                </Item>
                <Item>
                    <TextItem>Contact</TextItem>
                </Item>
            </List>
            <Button>
                <TextButton>Start free on Shopify</TextButton>
            </Button>
        </Container>
    )
})

const Container = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  display: none;
  height: 2000px;
  left: 0;
  top: 48px;
  right: 0;
  bottom: auto;
  padding-right: 32px;
  padding-left: 32px;
  align-items: center;
  z-index: 1000;
`
const TextItem = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: ${p=> fontScale(20)}px;
  line-height: 32px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const Item = styled.button`
display: flex;
  align-items: center;
  margin: 12px;
  width: 100%;
  border: none;
  background-color: white;
`
const ItemDropDown = styled.button`
  display: flex;
  margin: 12px;
  width: 100%;
  border: none;
  background-color: white;
  align-items: center;
`
const TextTitleDrop = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 170%;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const TextContentDrop = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 170%;
  display: flex;
  align-items: center;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const ColumnSection = styled.div`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 12px;
`
const  List =styled.div`
display: flex;
  flex-direction: column;
`
const Button = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #004AF7;
  border: none;
  border-radius: 6px;
  padding: 12px;
  margin-top: 20px;
`
const TextButton = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: ${p=> fontScale(16)}px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #F6F6F7;
`