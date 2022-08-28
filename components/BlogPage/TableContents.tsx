import {memo, useCallback} from "react";
import styled from "styled-components";
import Link from "next/link";

export const TableContents = memo(function TableContents() {
    return (
        <Container>
            <TextNormalBold>TABLE OF CONTENTS</TextNormalBold>
            <BackgroundTextDiv>
                <TextNormal>Our Solution Engineering Team’s Favorite ClickUp Features</TextNormal>
            </BackgroundTextDiv>
            <Link href={'#section-01'} passHref>
                <BackgroundTextDiv>
                    <TextNormal>1. Salesforce Integration</TextNormal>
                </BackgroundTextDiv>
            </Link>
            <Link href={'#section-02'} passHref>
                <BackgroundTextDiv>
                    <TextNormal>2. Automations</TextNormal>
                </BackgroundTextDiv>
            </Link>
            <Link href={'#section-03'} passHref>
                <BackgroundTextDiv>
                    <TextNormal>3. Personalized Views</TextNormal>
                </BackgroundTextDiv>
            </Link>
            <Link href={'#section-04'} passHref>
                <BackgroundTextDiv>
                    <TextNormal>4. Templated Docs</TextNormal>
                </BackgroundTextDiv>
            </Link>
            <Link href={'#section-05'} passHref>
                <BackgroundTextDiv>
                    <TextNormal>5. Time Tracking</TextNormal>
                </BackgroundTextDiv>
            </Link>
            <Link href={'#ending'} passHref>
                <BackgroundTextDiv>
                    <TextNormal>Using ClickUp to Enhance Collaboration and Keep Our Team Organized
                    </TextNormal>
                </BackgroundTextDiv>
            </Link>

        </Container>
    )
})
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`
const TextNormal = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: #000000;
  margin: 12px 0;
`
const TextNormalBold = styled(TextNormal)`
  font-weight: 700;
`
const BackgroundTextDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background: white;
  border-radius: 6px;
  box-shadow: 0px 2px 4px 0px #0000001A;
  cursor: pointer;

`
