import React, {memo} from "react";
import styled from "styled-components";
import Image from "next/image";
import {IC_CONTENT_01} from "../../assets";

export const CardContentSection = memo(function CardContentSection() {
    return (
        <Container>
            <LeftDiv>
                <Image src={IC_CONTENT_01}/>
            </LeftDiv>
            <TextContentHeading>Various kinds of app
                for every problems</TextContentHeading>
            <TextContentNormal>We provide apps that deal with daily struggles of a merchant.</TextContentNormal>
            <ListBullets>
                <ItemList>Sending email/SMS in bulk</ItemList>
                <ItemList>Special gift offers</ItemList>
                <ItemList>Disable right-click & Content protection</ItemList>
            </ListBullets>
            <LeftDiv>
                <GrayButton>
                    <TextButton>Learn more</TextButton>
                </GrayButton>
            </LeftDiv>
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 6px;
  padding: 30px 50px;
  margin-top: 20px;
`
const TextContentHeading = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const TextContentNormal = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: #1D1B29;
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
  color: #1D1B29;
`
const GrayButton = styled.button`
  background-color: white;
  border: 1.5px solid #CACACA;
  border-radius: 6px;
  padding: 10px 40px;
`
const TextButton = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
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