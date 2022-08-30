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
            <Link href={'#01'} passHref>
                <BackgroundTextDiv>
                    <TextNormal href={'#01'}>1. Salesforce Integration</TextNormal>
                </BackgroundTextDiv>
            </Link>
            <Link href={'#02'} passHref>
                <BackgroundTextDiv>
                    <TextNormal href={'#02'}>2. Automations</TextNormal>
                </BackgroundTextDiv>
            </Link>
            <Link href={'#03'} passHref>
                <BackgroundTextDiv>
                    <TextNormal href={'#03'}>3. Personalized Views</TextNormal>
                </BackgroundTextDiv>
            </Link>
            <Link href={'#04'} passHref>
                <BackgroundTextDiv>
                    <TextNormal href={'#04'}>4. Templated Docs</TextNormal>
                </BackgroundTextDiv>
            </Link>
            <Link href={'#05'} passHref>
                <BackgroundTextDiv>
                    <TextNormal href={'#05'}>5. Time Tracking</TextNormal>
                </BackgroundTextDiv>
            </Link>
            <Link href={'#ending'} passHref>
                <BackgroundTextDiv>
                    <TextNormal href={'#ending'}>Using ClickUp to Enhance Collaboration and Keep Our Team Organized
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
  cursor: pointer;
`
