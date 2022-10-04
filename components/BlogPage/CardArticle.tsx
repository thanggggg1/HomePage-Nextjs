import {memo} from "react";
import styled from "styled-components";
import {DivSpaceBetWeen, RowSection} from "../../pages";
import Image from "next/image";
import {IC_CLOCK, IC_USER} from "../../assets";
import {fontScale} from "../../utils/fontScale";
import UseWindowSize from "../../utils/useWindowSize";
import Link from "next/link";

interface RelatedContent {
    title : string
    linkHref:string
}

export const CardArticle = memo(function CardArticle(props:RelatedContent) {
    const {title,linkHref}=props
    return (
        <Container>
            {linkHref && <Link href={linkHref}>
                <TextHeading>{title}</TextHeading>
            </Link>}
            <br/>
            <InfoSection>
                <RowSection>
                    <Image src={IC_USER} width={32} height={32}/>
                    <TextNormalBold>Thanh Van Nguyen</TextNormalBold>
                </RowSection>
                <RowSection>
                    <Image src={IC_CLOCK} width={32} height={32}/>
                    <TextTime>Max 12min read</TextTime>
                </RowSection>
            </InfoSection>
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
  box-shadow: 0px 2px 4px 0px #0000001A;
  padding: 30px;
  border-radius: 6px;
`
const TextHeading = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: ${p=>fontScale(22)}px;
  line-height: 30px;
  letter-spacing: 0.025em;
  color: #1D1B29;
  margin-bottom: 12px;
`
const TextNormalBold = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: ${p=>fontScale(13)}px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: #000000;
`
const TextTime = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: ${p=>fontScale(13)}px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: #333;
`
const InfoSection =styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`