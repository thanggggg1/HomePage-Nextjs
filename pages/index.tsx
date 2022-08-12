import type {NextPage} from 'next'
import Image from 'next/image'
import {memo} from "react";
import styled from "styled-components";
import {ButtonNavBar, NavBar, TextButtonWhite} from "../components/NavBar";
import {IMG_HEADER} from "../assets";
import {CardContentSection} from "../components/HomePage/CardContentSection";
import {ItemGradient} from "../components/ItemGradient";
import {CardFeedback} from "../components/HomePage/CardFeedback";
import {GradientBox} from "../components/GradientBox";
import {Footer} from "../components/Footer";
import {CardBlogHomePage} from "../components/HomePage/CardBlog";

const Home: NextPage = memo(function Home() {
    return (
        <>
            <Container>
                <NavBar/>
                <HeaderSection>
                    <LeftHeaderSection>
                        <TextHeaderBold>Powerful apps make your
                            ecommerce business better
                            and help boosting your sales</TextHeaderBold>
                        <TextHeaderNormal>Sortecom includes all you need for you ecommerce website:
                            Email marketing, Review, Free gifts BOGO, Pop up,
                            Free Shipping bar, Content Protections and many more</TextHeaderNormal>
                        <ButtonNavBar>
                            <TextButtonWhite>Visit Shopify apps</TextButtonWhite>
                        </ButtonNavBar>
                    </LeftHeaderSection>
                    <RightHeaderSection>
                        <Image src={IMG_HEADER}/>
                    </RightHeaderSection>
                </HeaderSection>
                <ContentSection>
                    <ItemWrapper>
                        <ItemGradient/>
                        <CardContentSection/>
                    </ItemWrapper>
                    <ItemWrapper>
                        <CardContentSection/>
                        <CardContentSection/>
                    </ItemWrapper>
                    <ItemWrapper>
                        <ItemGradient/>
                        <CardContentSection/>
                    </ItemWrapper>
                </ContentSection>
                <FeedbackSection>
                    <WrapperPaddingFeedback>
                        <TextFeedbackHeading>What customers talk about Sortecom</TextFeedbackHeading>
                        <TextFeedbackNormal>Join over +10,000 Shopify brands that run their business on Sortecom.
                            We're in the business of helping your business to provide your customers with more
                            value.</TextFeedbackNormal>
                        <RowSection>
                            <StatisticalWrapper>
                                <TextFeedBackNumber>100 thousand</TextFeedBackNumber>
                                <TextFeedbackNormal>Installation in 1 month</TextFeedbackNormal>
                            </StatisticalWrapper>
                            <StatisticalWrapper>
                                <TextFeedBackNumber>100 thousand</TextFeedBackNumber>
                                <TextFeedbackNormal>Installation in 1 month</TextFeedbackNormal>
                            </StatisticalWrapper>
                            <StatisticalWrapper>
                                <TextFeedBackNumber>100 thousand</TextFeedBackNumber>
                                <TextFeedbackNormal>Installation in 1 month</TextFeedbackNormal>
                            </StatisticalWrapper>
                            <StatisticalWrapper>
                                <TextFeedBackNumber>100 thousand</TextFeedBackNumber>
                                <TextFeedbackNormal>Installation in 1 month</TextFeedbackNormal>
                            </StatisticalWrapper>
                        </RowSection>
                    </WrapperPaddingFeedback>
                    <FeedbackCardWrapper>
                        <CardFeedbackItem>
                            <CardFeedback/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback/>
                        </CardFeedbackItem>
                        <CardFeedbackItem>
                            <CardFeedback/>
                        </CardFeedbackItem>
                    </FeedbackCardWrapper>
                </FeedbackSection>
                <BlogSection>
                    <DivSpaceBetWeen>
                        <TextBlogBold>Our successful implementations</TextBlogBold>
                        <ButtonNavBar>
                            <TextButtonWhite>Read all blogs</TextButtonWhite>
                        </ButtonNavBar>
                    </DivSpaceBetWeen>
                    <CardBlogHomePage/>
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
  padding: 0 12.5%;
`
export const RowSection = styled.div`
  display: flex;
  align-items: center;
`

const HeaderSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 80px;
  padding-top: 100px;
`
const LeftHeaderSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
`
const RightHeaderSection = styled.div`
  width: 50%;
`
const TextHeaderBold = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 55px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const TextHeaderNormal = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`

const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 100px 0;
`
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
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
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const TextFeedbackNormal = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const TextFeedBackNumber = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
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
  padding-left: 120px;
  padding-right: 120px;
`
const FeedbackCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
`
const CardFeedbackItem = styled.div`
  display: flex;
  width: 20%;
`
const BlogSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0;
`
export const DivSpaceBetWeen = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const TextBlogBold = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.025em;
  color: #000000;
`
export const DivCenter =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export default Home
