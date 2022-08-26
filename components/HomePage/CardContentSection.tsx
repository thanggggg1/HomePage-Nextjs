import React, {memo} from "react";
import styled from "styled-components";
import Image from "next/image";
import {IC_CONTENT_01} from "../../assets";
import {fontScale} from "../../utils/fontScale";

export const CardContentSection = memo(function CardContentSection(props:any) {
    return (
        <Container>
            <LeftDiv>
                <Image src={IC_CONTENT_01}/>
            </LeftDiv>
            <TextContentHeading>{props.header}</TextContentHeading>
            <TextContentNormal>{props.content}</TextContentNormal>
            {props.isList && <ListBullets>
                <ItemList>Sending email/SMS in bulk</ItemList>
                <ItemList>Special gift offers</ItemList>
                <ItemList>Disable right-click & Content protection</ItemList>
            </ListBullets>}
            <LeftDiv>
                <GrayButton className='click-btn btn-style505'>
                    <TextButton>{props.textButton}</TextButton>
                </GrayButton>
            </LeftDiv>
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 6px;
  padding: 30px 50px;
  margin: 20px 0;
`
const TextContentHeading = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: ${p=> fontScale(28)}px;
  line-height: 38px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const TextContentNormal = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: ${p=> fontScale(16)}px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const ListBullets = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`
const ItemList = styled.li`
  font-style: normal;
  font-weight: 600;
  font-size: ${p=> fontScale(16)}px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const GrayButton = styled.button`
  background-color: white;
  border: 1.5px solid #CACACA;
  border-radius: 6px;
  padding: 10px 40px;
  &:hover a{
    color: #ffffff; !important;
  }
`
const TextButton = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: ${p=> fontScale(16)}px;
  line-height: 19px;
  letter-spacing: -0.015em;
  color: #CACACA;
`
export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`