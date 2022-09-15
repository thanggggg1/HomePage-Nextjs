import type {NextPage} from 'next'
import Image from 'next/image'
import React, {memo} from "react";
import styled from "styled-components";
import {ButtonNavBar, NavBar, TextButtonWhite} from "../components/NavBar";
import {
    IMG_BITE_LOGO,
    IMG_BREMONT_LOGO,
    IMG_BRIGHTLAND_LOGO,
    IMG_DIVIDE_SECTION,
    IMG_HEADER,
    IMG_LEATHERHEAD_LOGO,
    IMG_LOGO,
    IMG_LUCY_LOGO,
    IMG_NEW_MARKET_LOGO,
    IMG_PIPCORN_LOGO,
    IMG_POLAROID_LOGO,
    IMG_QUAKER_LOGO,
    IMG_REACTANGLE_HOME_01,
    IMG_REACTANGLE_HOME_02,
    IMG_REACTANGLE_HOME_03,
    IMG_TRIANGL_LOGO
} from "../assets";
import {CardContentSection} from "../components/HomePage/CardContentSection";
import {ItemGradient} from "../components/ItemGradient";
import {CardFeedback} from "../components/HomePage/CardFeedback";
import {GradientBox} from "../components/GradientBox";
import {Footer} from "../components/Footer";
import {CardBlogHomePage} from "../components/HomePage/CardBlog";
import Marquee from "react-fast-marquee";
import {fontScale} from "../utils/fontScale";
import {DivImage} from "./Products/FreeGiftPage";
import Head from "next/head";
import UseWindowSize from "../utils/useWindowSize";


const Home: NextPage = memo(function Home() {
    const {width} = UseWindowSize();
    return (
        <>
            <Head>
                <title>SortEcom</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <NavBar/>
            <Container>
                <>
                    <BackgroundGradient/>
                    <HeaderSection>
                        <TextBlueHeader>Powerful apps <TextHeaderBold>make<br/> your
                            ecommerce business better</TextHeaderBold> </TextBlueHeader>
                        <TextHeaderNormal>Free Gift | Content Protection | Email Marketing</TextHeaderNormal>
                        <div style={{display: "flex", flexWrap: 'wrap'}}>
                            <ButtonNavBar className='click-btn btn-style902'>
                                <div className="block"><span></span></div>
                                <TextButtonWhite data-name="hover">Visit</TextButtonWhite>
                                <TextButtonWhite data-name="me">Shopify apps</TextButtonWhite>
                            </ButtonNavBar>
                        </div>
                        <br/>
                        <br/>
                        {width && width > 1024 && <DivImage>
                            <LeftImageAnimation className={'bounce-2'}>
                                <Image src={IMG_REACTANGLE_HOME_01}/>
                            </LeftImageAnimation>
                            <CenterImageAnimation className={'bounce-2'}>
                                <Image src={IMG_REACTANGLE_HOME_02} width={200}/>
                            </CenterImageAnimation>

                            <Image src={IMG_HEADER} priority={true}/>
                            <RightImageAnimation className={'bounce-2'}>
                                <Image src={IMG_REACTANGLE_HOME_03} width={200}/>
                            </RightImageAnimation>
                        </DivImage>}
                    </HeaderSection>
                </>
                <ContentSection id={'about'} width={width}>
                    <ItemWrapper width={width}>
                        <ItemGradient text={'Why SortEcom?'} greenText={'Grow your Shopify store'}/>
                        <CardContentSection header={'Various kinds of app \n' +
                            'for every problems'}
                                            content={'We provide apps that deal with daily struggles of a merchant.'}
                                            isList={true} textButton={'Learn More'}/>
                    </ItemWrapper>
                    <ItemWrapper width={width}>
                        <CardContentSection header={'Trusted by \n' +
                            'worldwide merchants'} content={'Used by 100K+ merchants with 100% satisfaction'}
                                            isList={false} textButton={'What they talk about'}/>
                        <CardContentSection header={'Enhance merchants’ experience'}
                                            content={'We develop apps that customer-centric and really easy to use.'}
                                            isList={false} textButton={'Learn More'}/>
                    </ItemWrapper>
                    <ItemWrapper width={width}>
                        <CardContentSection header={'Free Life-time Support'}
                                            content={'Enjoy FREE technical assistance from our Shopify experts, whether you have questions about apps’ functionality, ' +
                                                'are wondering how it’s compatible with your store’s Shopify theme, or require a code adjustment to fit your needs.'}
                                            isList={false} textButton={'Contact our support'}/>
                        <ItemGradient text={'It simply works!'}/>
                    </ItemWrapper>
                </ContentSection>
            </Container>
            <DivFull>
                <ImageFull src={IMG_DIVIDE_SECTION}/>
            </DivFull>
            <FeedbackSection>
                <WrapperPaddingFeedback>
                    <TextFeedbackHeading>What customers talk about Sortecom</TextFeedbackHeading>
                    <TextFeedbackNormal>Join over +10,000 Shopify brands that run their business on Sortecom.
                        We are in the business of helping your business to provide your customers with more
                        value.</TextFeedbackNormal>
                    <DivSpaceBetWeen width={width}>
                        <StatisticalWrapper>
                            <TextFeedBackNumber>100 thousand</TextFeedBackNumber>
                            <TextFeedbackNormal>Installation in 1 month</TextFeedbackNormal>
                        </StatisticalWrapper>
                        <StatisticalWrapper>
                            <TextFeedBackNumber>2 billion</TextFeedBackNumber>
                            <TextFeedbackNormal>Shopper interaction</TextFeedbackNormal>
                        </StatisticalWrapper>
                        <StatisticalWrapper>
                            <TextFeedBackNumber>1 million </TextFeedBackNumber>
                            <TextFeedbackNormal>Users worlwide</TextFeedbackNormal>
                        </StatisticalWrapper>
                        <StatisticalWrapper>
                            <TextFeedBackNumber>4 Apps</TextFeedBackNumber>
                            <TextFeedbackNormal>serve all purposes</TextFeedbackNormal>
                        </StatisticalWrapper>
                    </DivSpaceBetWeen>
                </WrapperPaddingFeedback>
                <Marquee speed={40}>
                    <FeedbackCardWrapper>
                        <CardFeedbackItem>
                            <CardFeedback name={'PIPCORN'} iconUri={IMG_PIPCORN_LOGO} content={'Despite our 14-hour time difference, they always answer my questions very quickly.'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'TRIANGL'} iconUri={IMG_TRIANGL_LOGO} content={'Their dashboard and data are very easy to understand, and the implementation is also easy and seamless. \n'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'LeatherHead'} iconUri={IMG_LEATHERHEAD_LOGO} content={'Sortecom’s apps are incredible! My conversion rate went up by almost 15% in the first month of using it. \n'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'BREMONT'} iconUri={IMG_BREMONT_LOGO} content={'Best support ever, out-of-the-box, creative, and really great set of tools but it’s truly affordable. \n'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'BITE'} iconUri={IMG_BITE_LOGO} content={'I can spend less time researching a bunch of supportive apps while having so many other things to learn and focus on. \n'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'New Market Goods'} iconUri={IMG_NEW_MARKET_LOGO} content={'I have no previous experience and this app has been critical to getting my product landing page in top-notch condition. So these apps are so useful, and simple for me. \n'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'LUCY FOLK'} iconUri={IMG_LUCY_LOGO} content={'Everything works fine. Never had any problems. Would recommend :)\n'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'Quaker Marine Supply'} iconUri={IMG_QUAKER_LOGO} content={'The support team is brilliant; they\'re always willing to help you. Highly recommend!\n'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'Brightland'} iconUri={IMG_BRIGHTLAND_LOGO} content={'Absolutely amazing app! If you get stuck or are unsure the customer service is very quick and very helpful!'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'POLAROID'} iconUri={IMG_POLAROID_LOGO} content={'It helps me a lot with quite a range of possibilities, I can\'t say it all. Really really great apps.\n'}/>
                        </CardFeedbackItem>
                    </FeedbackCardWrapper>
                </Marquee>
            </FeedbackSection>
            <Container>
                <BlogSection>
                    <DivSpaceBetWeen width={width}>
                        <TextBlogBold>Our successful implementations</TextBlogBold>
                        <ButtonNavBar>
                            <TextButtonWhite>Read all blogs</TextButtonWhite>
                        </ButtonNavBar>
                    </DivSpaceBetWeen>
                    <DivCenter>
                        <CardBlogHomePage/>
                    </DivCenter>
                    <CardBlogHomePage/>
                    <br/>
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
export const RowSection = styled.div`
  display: flex;
  align-items: center;
`
const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(33.66% 63.09% at 50% 89.37%, rgba(0, 74, 247, 0.6) 0%, rgba(24, 160, 251, 0.6) 41.46%, rgba(246, 246, 247, 0.6) 100%)
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


const TextHeaderBold = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: ${p => fontScale(80)}px;
  line-height: 115.9%;
  letter-spacing: 0.01em;
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

const ContentSection = styled.div<{ width: number }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${p => p.width > 1024 ? 'row' : 'column'};
  align-items: center;
  padding: 100px 0;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin-top: 80px;
  margin-right: auto;
  margin-left: auto;
`
const ItemWrapper = styled.div<{ width: number }>`
  display: flex;
  flex-direction: column;
  width: ${p => p.width > 1024 ? '32%' : '100%'};
`
const FeedbackSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding-bottom: 100px;
`
const TextFeedbackHeading = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: ${p => fontScale(32)}px;;
  line-height: 44px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const TextFeedbackNormal = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: ${p => fontScale(20)}px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.025em;
  color: #1D1B29;
  margin-top: -24px;
`
const TextFeedBackNumber = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: ${p => fontScale(40)}px;
  line-height: 55px;
  letter-spacing: 0.025em;
  color: rgba(29, 27, 41, 0.9);
`
const StatisticalWrapper = styled.div`

`
const WrapperPaddingFeedback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  width: 100%;
  max-width: 1440px;
  padding-bottom: 20px;
  padding-right: 32px;
  padding-left: 32px;
`
const FeedbackCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`
const CardFeedbackItem = styled.div`
  display: flex;
  flex: 1;
  margin-right: 20px;
  width: 400px;
  min-width: 400px;
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
  margin-top: 80px;
  margin-right: auto;
  margin-left: auto;
`
export const DivSpaceBetWeen = styled.div<{ width: number }>`
  display: flex;
  flex-direction: ${p => p.width > 1024 ? 'row' : 'column'};
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const TextBlogBold = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: ${p => fontScale(32)}px;
  line-height: 44px;
  letter-spacing: 0.025em;
  color: #000000;
`
export const DivCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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

export const DivFull = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const ImageFull = styled(Image)`
  width: 100%;
`
const LeftImageAnimation = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  align-self: flex-end;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  margin: 0 auto 0 auto;
  transform-origin: bottom;
`
const RightImageAnimation = styled.div`
  position: absolute;
  top: 40%;
  right: 0;
  align-self: flex-end;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  margin: 0 auto 0 auto;
  transform-origin: bottom;
`
const CenterImageAnimation = styled.div`
  position: absolute;
  top: 70%;
  left: 20%;
  align-self: flex-end;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  margin: 0 auto 0 auto;
  transform-origin: bottom;
  z-index: 2000;
`

export default Home
