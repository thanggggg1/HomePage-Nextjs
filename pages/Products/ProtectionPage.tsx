import React,{memo} from "react";
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

const ProtectionPage:NextPage = memo(function ProtectionPage(){
    return (
        <>
            <Container>
                <NavBar/>
                <HeaderSection>
                    <LeftHeaderSection>
                        <TextHeaderBold>Disable Right-click
                            & Content Protection</TextHeaderBold>
                        <TextHeaderNormal>Worrying about someone stealing your work? Activate your protection now!</TextHeaderNormal>
                        <ListBullets>
                            <ItemList>Sending email/SMS in bulk</ItemList>
                            <ItemList>Special gift offers</ItemList>
                            <ItemList>Disable right-click & Content protection</ItemList>
                        </ListBullets>
                        <RowSection>
                            <ButtonNavBar>
                                <TextButtonWhite>Install Shopify apps</TextButtonWhite>
                            </ButtonNavBar>
                            <LinkTextGray>Watch video demo</LinkTextGray>
                        </RowSection>
                    </LeftHeaderSection>
                    <RightHeaderSection>
                        <Image src={IMG_PROTECTION}/>
                    </RightHeaderSection>
                </HeaderSection>
                <ProblemSection>
                    <TextTitleProblem>PROBLEMS</TextTitleProblem>
                    <TextBoldProblem>Why do merchants concern about the copyright?</TextBoldProblem>
                    <DivSpaceBetWeen style={{alignItems:'self-start'}}>
                        <ItemProblemSection>
                            <CardProblem title={'Your work belongs to you!'} content={'Original images and content are valuable digital assets that must be well-protected to prevent replication.'}/>
                        </ItemProblemSection>
                        <ItemProblemSection>
                            <CardProblem title={'Duplicated content affects SEO'} content={'Search engines prize stores with higher ranking for original content, duplicated work will definitely impact your SEO performance, espeacially on Google'}/>
                        </ItemProblemSection>
                        <ItemProblemSection>
                            <CardProblem title={'Lack of a complete solution'} content={'Because there are various ways to violate your copyright, you will need a comprehensive solution to avoid fraudulent practices.'}/>
                        </ItemProblemSection>
                    </DivSpaceBetWeen>
                </ProblemSection>
                <ContentSection>
                    <TextTitleProblem>OUR SOLUTIONS</TextTitleProblem>
                    <TextBoldProblem>Create prevention of on-site interaction</TextBoldProblem>
                   <DivSpaceBetWeen>
                       <ItemWrapper>
                           <ItemGradient text={'All-in-one protection'}/>
                           <CardContentSection header={'Disable Keyboard Shortcuts\n' +
                               'Disable Dev tools (F12)'} content={'Vistors on your site can not access to the function of these keyboard shortcuts:' +
                               ''} textButton={'Learn more'}/>
                       </ItemWrapper>
                       <ItemWrapper>
                           <CardContentSection header={'Disable Right-click'} content={'Vistors on your site are not allowed to Text Selection and use Right-click on the mouse.'} textButton={'Install the app now'}/>
                           <CardContentSection header={'Disable by Country'} content={'Block users from specific countries'} textButton={'Experience our app'}/>
                       </ItemWrapper>
                       <ItemWrapper>
                           <CardContentSection header={'Free Life-time Support'} content={'Enjoy FREE technical assistance from our Shopify experts, whether you have questions about apps’ functionality, are wondering how it’s compatible with your store’s Shopify theme.'} textButton={'Contact our support'}/>
                           <ItemGradient text={'It simply works!'}/>
                       </ItemWrapper>
                   </DivSpaceBetWeen>
                </ContentSection>
                <BlogSection>
                    <TextBoldProblem>Videos - App intro, tutorial and many more</TextBoldProblem>
                    <IframeVideo  height="800" src="https://www.youtube.com/embed/pBlqQGkPBjE"
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
  padding: 0 12.5%;
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
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
  padding:100px 0;
`
const TextTitleProblem = styled.div`
  display: flex;
  justify-content: flex-start;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: #004AF7;
`
const TextBoldProblem =styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
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
  max-width: 440px;
`
const BlogSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 0;
`
const IframeVideo = styled.iframe`
display: flex;
  align-items: center;
  justify-content: center;
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
const LinkTextGray = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  color: rgba(41, 45, 50, 0.5);
  margin-left: 20px;
`
export default ProtectionPage
