import type {NextPage} from 'next'
import Image from 'next/image'
import React, {memo} from "react";
import styled from "styled-components";
import {ButtonNavBar, NavBar, TextButtonWhite} from "../components/NavBar";
import {
    IMG_DIVIDE_SECTION,
    IMG_HEADER, IMG_LOGO,
    IMG_REACTANGLE_HOME_01,
    IMG_REACTANGLE_HOME_02,
    IMG_REACTANGLE_HOME_03
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

                            <Image src={IMG_HEADER}/>
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
                <Marquee speed={40} style={{flex:1,display:'flex'}}>
                    <FeedbackCardWrapper>
                        <CardFeedbackItem>
                            <CardFeedback name={'PIPCORN'} iconUri={IMG_LOGO} content={'The Free Gift app from Sortecom is a fantastic tool that we use to launch more complex gift-with-purchase promotions. All of the promotions we want to run on it are simple to navigate, and I offer this app 5 stars for its best customer service! Despite our 14-hour time difference, they always answer quickly to my questions, assist me in setting up campaigns, and help us in customizing pop-ups to match our branding and style. Since I started working with Sortecom recently, they have been incredibly helpful in finding solutions to our issues and patiently explaining everything to me because I have a lot of questions. My recommendation is to ask for assistance if you run into problems or if you don\'t like the way something looks. They are so supportive and helpful. What a wonderful experience!'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'TRIANGL'} iconUri={IMG_LOGO} content={'Sortecom continuously helps us increase our sales and conversion rates. Especially, their dashboard and data are very easy to understand, and the implementation is also easy and seamless. I really recommend Sortecom since they seem to have the best apps which help optimize sales.'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'LeatherHead'} iconUri={IMG_LOGO} content={'These apps are incredible! My conversion rate went up by almost 15% in the first month of using it. I have always been welcomed like a VIP by the staff, who have been really kind and helpful. I highly suggest the app to all Shopify\'s merchants.'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'BREMONT'} iconUri={IMG_LOGO} content={'Best support ever, out-of-the-box, creative, and really great set of tools to help you do whatever you need to run your marketing campaigns and protect them. It’s truly affordable. Please be active with the support team. They won’t hesitate to help you immediately.'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'BITE'} iconUri={IMG_LOGO} content={'Sortecom\'s apps were recommended to me as an all-in-one marketing place. I am new to having an eCommerce store so I was grateful to find them. And relieved at the thought of spending less time researching a bunch of supportive apps while having so many other things to learn and focus on. And hopeful that it actually works well so I can keep it simple. So far it\'s been fun to see the different apps work together as I build my store. I have sometimes found the supporter and was guided quickly and thoughtfully. I truly appreciate this support. I know now that there are really helpful very short informative tutorials on each app that would have kept me from even needing help so I would recommend starting there.'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'New Market Goods'} iconUri={IMG_LOGO} content={'This app comes highly recommended by many students in an eCommerce training course I am taking. I have no previous experience and this app has been critical to getting my product landing page in top-notch condition. I have zero coding experience and feel really apprehensive about changing code, so these apps are so useful, and simple for me. Sortecom has gone above and beyond to help me with some adjustments to meet my needs. They even made additional recommendations, which I really loved! I truly appreciate it.'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'LUCY FOLK'} iconUri={IMG_LOGO} content={'I\'ve been using Sortecom\'s apps for a time for different stores & it\'s been amazing. My store speed always remains above 60. And, the support team is brilliant; they\'re always willing to help you. Highly recommended!\n'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'BRIGHTLAND'} iconUri={IMG_LOGO} content={'Absolutely amazing app and if you get stuck or are unsure the customer service is very quick and very helpful! Highly recommend this app -I will be using it for both my websites :)'}/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback name={'POLAROID'} iconUri={IMG_LOGO} content={'I have been using these Sortecom apps for a while now. Absolutely lovely professional apps. It helps me a lot with quite a range of possibilities, I can\'t say it all. Really really great apps.'}/>
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
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  width: 100%;
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
