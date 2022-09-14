import React, {memo} from "react";
import {NextPage} from "next";
import {ButtonNavBar, NavBar, TextButtonWhite} from "../../components/NavBar";
import Image from "next/image";
import {IMG_HEADER, IMG_PROTECTION} from "../../assets";
import {ItemGradient} from "../../components/ItemGradient";
import {CardContentSection} from "../../components/HomePage/CardContentSection";
import {CardFeedback} from "../../components/HomePage/CardFeedback";
import {GradientBox} from "../../components/GradientBox";
import {Footer} from "../../components/Footer";
import Home, {DivCenter, DivSpaceBetWeen, RowSection} from "../index";
import styled from "styled-components";
import {CardProblem} from "../../components/ProtectionPage/CardProblem";
import {CardBlogHomePage} from "../../components/HomePage/CardBlog";
import {fontScale} from "../../utils/fontScale";
import Head from "next/head";
import UseWindowSize from "../../utils/useWindowSize";

const ProtectionPage: NextPage = memo(function ProtectionPage() {
    const {width}=UseWindowSize();
    return (
        <>
            <Head>
                <title>Disable Right Click AntiTheft</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <NavBar/>
            <Container>
                <>
                    <BackgroundGradient/>
                    <HeaderSection>
                        <TextHeaderBold>Disable Right-click <br/>
                            & Content Protection</TextHeaderBold>
                        <TextHeaderNormal>Worrying about someone stealing your work?<br/>Activate your protection
                            now!</TextHeaderNormal>
                        <ButtonNavBar className='click-btn btn-style902'>
                            <div className="block"><span></span></div>
                            <TextButtonWhite data-name="hover">Install</TextButtonWhite>
                            <TextButtonWhite data-name="me">Shopify apps</TextButtonWhite>
                        </ButtonNavBar>
                        <LinkTextGray href={'https://youtu.be/pBlqQGkPBjE'} target={'_blank'} rel="noreferrer">Watch video
                            demo</LinkTextGray>
                        <Image src={IMG_PROTECTION} priority={true}/>
                    </HeaderSection>
                </>
                <ProblemSection>
                    <TextTitleProblem>PROBLEMS</TextTitleProblem>
                    <TextBoldProblem>Why do merchants concern about the copyright?</TextBoldProblem>
                    <DivSpaceBetWeen style={{alignItems: 'self-start'}} width={width}>
                        <ItemProblemSection width={width}>
                            <CardProblem title={'Your work belongs to you!'}
                                         content={'Original images and content are valuable digital assets that must be well-protected to prevent replication.'}/>
                        </ItemProblemSection>
                        <ItemProblemSection  width={width}>
                            <CardProblem title={'Duplicated content affects SEO'}
                                         content={'Search engines prize stores with higher ranking for original content, duplicated work will definitely impact your SEO performance, espeacially on Google'}/>
                        </ItemProblemSection>
                        <ItemProblemSection  width={width}>
                            <CardProblem title={'Lack of a complete solution'}
                                         content={'Because there are various ways to violate your copyright, you will need a comprehensive solution to avoid fraudulent practices.'}/>
                        </ItemProblemSection>
                    </DivSpaceBetWeen>
                </ProblemSection>
                <ContentSection id={'about'}>
                    <TextTitleProblem>OUR SOLUTIONS</TextTitleProblem>
                    <TextBoldProblem>Create prevention of on-site interaction</TextBoldProblem>
                    <DivSpaceBetWeen width={width}>
                        <ItemWrapper width={width}>
                            <ItemGradient text={'All-in-one protection'} greenText={'What you need is an'}/>
                            <CardContentSection header={'Disable Keyboard Shortcuts\n' +
                                'Disable Dev tools (F12)'}
                                                content={'Vistors on your site can not access to the function of these keyboard shortcuts:' +
                                                    ''} textButton={'Learn more'}/>
                        </ItemWrapper>
                        <ItemWrapper width={width}>
                            <CardContentSection header={'Disable Right-click'}
                                                content={'Vistors on your site are not allowed to Text Selection and use Right-click on the mouse.'}
                                                textButton={'Install the app now'}/>
                            <CardContentSection header={'Disable by Country'}
                                                content={'Block users from specific countries'}
                                                textButton={'Experience our app'}/>
                        </ItemWrapper>
                        <ItemWrapper width={width}>
                            <CardContentSection header={'Free Life-time Support'}
                                                content={'Enjoy FREE technical assistance from our Shopify experts, whether you have questions about apps’ functionality, are wondering how it’s compatible with your store’s Shopify theme.'}
                                                textButton={'Contact our support'}/>
                            <ItemGradient text={'It simply works!'}/>
                        </ItemWrapper>
                    </DivSpaceBetWeen>
                </ContentSection>
                <BlogSection>
                    <TextBoldProblem>Videos - App intro, tutorial and many more</TextBoldProblem>
                    <IframeVideo src="https://www.youtube.com/embed/pBlqQGkPBjE"
                                 title="YouTube video player" frameBorder="0"
                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                 width={width}
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
  margin-top: 80px;
`
const BackgroundGradient = styled.div`
position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(133.45% 97.33% at 50% 97.33%, #004AF7 0%, #18A0FB 39.34%, rgba(246, 246, 247, 0) 69.1%);
`
const TextHeaderBold = styled.span`
  font-size: ${p => fontScale(80)}px;
  color: #1D1B29;
  font-style: normal;
  font-weight: 700;
  line-height: 115.9%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
`
const TextHeaderNormal = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${p => fontScale(20)}px;
  line-height: 27px;
  letter-spacing: 0.025em;
  color: #1D1B29;
  text-align: center
;
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
const ItemWrapper = styled.div<{width:number}>`
  display: flex;
  flex-direction: column;
  width: ${p => p.width > 1024 ? '32%' : '100%'};
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
const ItemProblemSection = styled.div<{width:number}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${p=>p.width > 1024 ? '32%' : '100%'};
  margin-bottom: ${p=>p.width > 1024 ? 0 : 20}px;
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
const IframeVideo = styled.iframe<{width:number}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${p=>p.width > 1024 ? 800 : 200}px;
`

const LinkTextGray = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: ${p => fontScale(16)}px;
  line-height: 19px;
  text-decoration-line: underline;
  color: rgba(41, 45, 50, 0.5);
  margin-left: 20px;
  &:hover{
    color: white;
  }
`
export default ProtectionPage
