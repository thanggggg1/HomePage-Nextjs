import {memo} from "react";
import styled from "styled-components";
import {DivSpaceBetWeen, RowSection} from "../../pages";
import Image from "next/image";
import {IC_CLOCK, IC_USER} from "../../assets";

export const CardArticle = memo(function CardArticle() {
    return (
        <Container>
            <TextHeading>Spekit: Using ClickUp For Effective Quarterly OKR Tracking</TextHeading>
            <DivSpaceBetWeen>
                <RowSection>
                    <Image src={IC_USER} width={48} height={48}/>
                    <TextNormalBold>Lelia Cruz</TextNormalBold>
                </RowSection>
                <RowSection>
                    <Image src={IC_CLOCK} width={48} height={48}/>
                    <TextTime>Max 7min read</TextTime>
                </RowSection>
            </DivSpaceBetWeen>
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 4px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 5px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 30px;
  border-radius: 6px;
`
const TextHeading = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0.025em;
  color: #1D1B29;
  margin-bottom: 12px;
`
const TextNormalBold = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: #000000;
`
const TextTime = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: #333;
`