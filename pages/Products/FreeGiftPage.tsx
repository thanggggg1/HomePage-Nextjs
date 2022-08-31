import React, {memo} from "react";
import {ButtonNavBar, NavBar, TextButtonWhite} from "../../components/NavBar";
import {DivCenter, DivSpaceBetWeen} from "../index";
import {CardProblem} from "../../components/ProtectionPage/CardProblem";
import {ItemGradient} from "../../components/ItemGradient";
import {CardContentSection} from "../../components/HomePage/CardContentSection";
import {GradientBox} from "../../components/GradientBox";
import {Footer} from "../../components/Footer";
import styled from "styled-components";
import {fontScale} from "../../utils/fontScale";
import Image from "next/image";
import {IMG_BACKGROUND_FREEGIFT, IMG_REACTANGLE_FREEGIFT_01, IMG_REACTANGLE_FREEGIFT_02} from "../../assets";
import Head from "next/head";

const FreeGiftPage = memo(function FreeGiftPage() {
    return (
        <>
            <Head>
                <title>Free Gift - BOGO</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <NavBar/>
            <Container>
                <>
                    <BackgroundGradient/>
                    <HeaderSection>
                        <TextHeaderBold>BOGO, Free Gift, Discount
                            <br/>
                            <TextBlueHeader>Boost your Sales</TextBlueHeader>
                        </TextHeaderBold>
                        <TextHeaderNormal>Encourage your customers to buy more and increase your Average Order
                            Value?</TextHeaderNormal>
                        <ButtonNavBar className='click-btn btn-style902'>
                            <div className="block"><span></span></div>
                            <TextButtonWhite data-name="hover">Create</TextButtonWhite>
                            <TextButtonWhite data-name="me">Gift Campaign</TextButtonWhite>
                        </ButtonNavBar>
                        <DivImage>
                            <LeftImage className={'bounce-2'}>
                                <Image src={IMG_REACTANGLE_FREEGIFT_01} width={200}/>
                            </LeftImage>
                            <Image src={IMG_BACKGROUND_FREEGIFT}/>
                            <RightImage className={'bounce-2'}>
                                <Image src={IMG_REACTANGLE_FREEGIFT_02} width={200}/>
                            </RightImage>
                        </DivImage>
                    </HeaderSection>
                </>
                <ProblemSection>
                    <TextTitleProblem>PROBLEMS</TextTitleProblem>
                    <TextBoldProblem>Why do merchants concern about the copyright?</TextBoldProblem>
                    <DivSpaceBetWeen style={{alignItems: 'self-start'}}>
                        <ItemProblemSection>
                            <CardProblem title={'Your work belongs to you!'}
                                         content={'Original images and content are valuable digital assets that must be well-protected to prevent replication.'}/>
                        </ItemProblemSection>
                        <ItemProblemSection>
                            <CardProblem title={'Duplicated content affects SEO'}
                                         content={'Search engines prize stores with higher ranking for original content, duplicated work will definitely impact your SEO performance, espeacially on Google'}/>
                        </ItemProblemSection>
                        <ItemProblemSection>
                            <CardProblem title={'Lack of a complete solution'}
                                         content={'Because there are various ways to violate your copyright, you will need a comprehensive solution to avoid fraudulent practices.'}/>
                        </ItemProblemSection>
                    </DivSpaceBetWeen>
                </ProblemSection>
                <ContentSection id={'about'}>
                    <TextTitleProblem>OUR SOLUTIONS</TextTitleProblem>
                    <TextBoldProblem>Create prevention of on-site interaction</TextBoldProblem>
                    <DivSpaceBetWeen>
                        <ItemWrapper>
                            <ItemGradient text={'All-in-one protection'} greenText={'What you need is an'}/>
                            <CardContentSection header={'Disable Keyboard Shortcuts\n' +
                                'Disable Dev tools (F12)'}
                                                content={'Vistors on your site can not access to the function of these keyboard shortcuts:' +
                                                    ''} textButton={'Learn more'}/>
                        </ItemWrapper>
                        <ItemWrapper>
                            <CardContentSection header={'Disable Right-click'}
                                                content={'Vistors on your site are not allowed to Text Selection and use Right-click on the mouse.'}
                                                textButton={'Install the app now'}/>
                            <CardContentSection header={'Disable by Country'}
                                                content={'Block users from specific countries'}
                                                textButton={'Experience our app'}/>
                        </ItemWrapper>
                        <ItemWrapper>
                            <CardContentSection header={'Free Life-time Support'}
                                                content={'Enjoy FREE technical assistance from our Shopify experts, whether you have questions about apps’ functionality, are wondering how it’s compatible with your store’s Shopify theme.'}
                                                textButton={'Contact our support'}/>
                            <ItemGradient text={'It simply works!'}/>
                        </ItemWrapper>
                    </DivSpaceBetWeen>
                </ContentSection>
                <BlogSection>
                    <TextBoldProblem>Videos - App intro, tutorial and many more</TextBoldProblem>
                    <IframeVideo height="800" src="https://www.youtube.com/embed/pBlqQGkPBjE"
                                 title="YouTube video player" frameBorder="0"
                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                 allowFullScreen></IframeVideo>
                    <br/>
                    <ButtonNavBar>
                        <TextButtonWhite>Watch more</TextButtonWhite>
                    </ButtonNavBar>
                    <br/>
                    <br/>
                    <DivCenter>
                        <GradientBox/>
                    </DivCenter>
                </BlogSection>
            </Container>
            <Footer/>
        </>
    )
})
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;
`

const BackgroundGradient = styled.div`
position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(34.76% 62.22% at 50% 88.63%, rgba(0, 74, 247, 0.4) 0%, rgba(24, 160, 251, 0.4) 30.71%, rgba(246, 246, 247, 0.4) 100%);
`
const HeaderSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
`
const TextBlueHeader = styled.span`
  font-style: normal;
  font-weight: 900;
  font-size: ${p => fontScale(80)}px;
  line-height: 115.9%;
  letter-spacing: 0.01em;
  color: #004AF7;
  text-align: center;
`

const LeftImage = styled.div`
  position: absolute;
  top:50%;
  left: 0;
  align-self: flex-end;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  margin: 0 auto 0 auto;
  transform-origin: bottom;
`
const RightImage = styled.div`
  position: absolute;
  top:50%;
  right: 0;
  align-self: flex-end;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  margin: 0 auto 0 auto;
  transform-origin: bottom;
`
const TextHeaderBold = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: ${p => fontScale(60)}px;
  line-height: 55px;
  letter-spacing: 0.025em;
  color: #1D1B29;
  text-align: center;

`
const TextHeaderNormal = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${p => fontScale(20)}px;
  line-height: 27px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`

const ContentSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
`
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
`
const ProblemSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 100px 0;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
`
const TextTitleProblem = styled.div`
  display: flex;
  justify-content: flex-start;
  font-style: normal;
  font-weight: 700;
  font-size: ${p => fontScale(20)}px;
  line-height: 27px;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: #004AF7;
`
const TextBoldProblem = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: ${p => fontScale(32)}px;
  line-height: 44px;
  letter-spacing: 0.025em;
  color: #000000;
  margin-bottom: 20px;
`
const ItemProblemSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 32%;
`
const BlogSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
`
const IframeVideo = styled.iframe`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const DivImage = styled.div`
  position: relative;
width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`



export default FreeGiftPage