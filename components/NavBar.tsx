import React, {memo} from "react";
import styled from "styled-components";
import Image from 'next/image'
import {IMG_LOGO} from "../assets";
import {RowSection} from "../pages";

export const NavBar = memo(function NavBar() {
    return (
        <Container>
            <div>
                <ImageLogo src={IMG_LOGO}/>
            </div>
            <RowSection>
                <DivOptionNavBar>
                    <TextNavBar>About us</TextNavBar>
                </DivOptionNavBar>
                <DivOptionNavBar>
                    <TextNavBar>Products</TextNavBar>
                </DivOptionNavBar>
                <DivOptionNavBar>
                    <TextNavBar>Blogs</TextNavBar>
                </DivOptionNavBar>
                <DivOptionNavBar>
                    <TextNavBar>Contact</TextNavBar>
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
const TextNavBar = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #1D1B29;
`
export const ButtonNavBar = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  background-color: #18A0FB;
  padding:10px 30px;
  border: none;
  border-radius: 6px;
`
export const TextButtonWhite = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.015em;
  color: #F6F6F7;
 
`
