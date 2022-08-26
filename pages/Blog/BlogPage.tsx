import React, {memo} from "react";
import {ButtonNavBar, NavBar, TextButtonWhite} from "../../components/NavBar";
import {DivCenter, DivSpaceBetWeen, RowSection} from "../index";
import Image from "next/image";
import {IMG_PROTECTION} from "../../assets";
import {CardProblem} from "../../components/ProtectionPage/CardProblem";
import {ItemGradient} from "../../components/ItemGradient";
import {CardContentSection} from "../../components/HomePage/CardContentSection";
import {GradientBox} from "../../components/GradientBox";
import {Footer} from "../../components/Footer";
import styled from "styled-components";
import {NextPage} from "next";
import {CardBlog} from "../../components/BlogPage/CardBlog";
import {CardBlogHomePage} from "../../components/HomePage/CardBlog";
import {CardSubcribe} from "../../components/BlogPage/CardSubcribe";
import {fontScale} from "../../utils/fontScale";

const BlogPage: NextPage = memo(function BlogPage() {
    return (
        <>
            <NavBar/>
            <Container>
                <HeaderSection>
                    <LeftHeaderSection>
                        <TextHeaderBold>Everything you need
                            to succeed with Sortecom.</TextHeaderBold>
                        <TextHeaderNormal>Join Sortecom newsletter to receive necessary resources
                            to make your ecommerce business more successful! </TextHeaderNormal>
                        <RowSection>
                            <InputBox placeholder={'Enter email'}/>
                            <ButtonNavBar>
                                <TextButtonWhite>Subcribe</TextButtonWhite>
                            </ButtonNavBar>
                        </RowSection>
                    </LeftHeaderSection>
                    <RightHeaderSection>
                        <CardBlog/>
                    </RightHeaderSection>
                </HeaderSection>
                <ProblemSection>
                    <DivSpaceBetWeen>
                        <TextBoldProblem>Read our Articles</TextBoldProblem>
                        <ButtonNavBar>
                            <TextButtonWhite>Read all</TextButtonWhite>
                        </ButtonNavBar>
                    </DivSpaceBetWeen>
                    <div>
                        <DivRowFlex>
                            <ItemProblemSection>
                                <CardBlog/>
                            </ItemProblemSection>
                            <ItemProblemSection style={{justifyContent:'center'}}>
                                <CardBlog/>
                            </ItemProblemSection>
                            <ItemProblemSection style={{justifyContent:'flex-end'}}>
                                <CardBlog/>
                            </ItemProblemSection>
                        </DivRowFlex>
                        <br/>
                        <DivRowFlex>
                            <ItemProblemSection>
                                <CardBlog/>
                            </ItemProblemSection>
                            <ItemProblemSection style={{justifyContent:'center'}}>
                                <CardBlog/>
                            </ItemProblemSection>
                            <ItemProblemSection style={{justifyContent:'flex-end'}}>
                                <CardSubcribe/>
                            </ItemProblemSection>
                        </DivRowFlex>
                        <br/>
                        <DivRowFlex>
                            <ItemProblemSection>
                                <CardBlog/>
                            </ItemProblemSection>
                            <ItemProblemSection style={{justifyContent:'center'}}>
                                <CardBlog/>
                            </ItemProblemSection>
                            <ItemProblemSection style={{justifyContent:'flex-end'}}>
                                <CardBlog/>
                            </ItemProblemSection>
                        </DivRowFlex>
                    </div>
                </ProblemSection>

                <BlogSection>
                    <TextBoldProblem>Videos - App intro, tutorial and many more</TextBoldProblem>
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
  padding: 0 32px;
`

const HeaderSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 80px;
  padding-top: 100px;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
`
const LeftHeaderSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: ${p => fontScale(40)}px;
  line-height: 55px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const TextHeaderNormal = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${p => fontScale(20)}px;
  line-height: 27px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`

const ProblemSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 100px 0;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
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
  flex: 1;
  margin-right: 20px;
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
const InputBox = styled.input`
  border: 1.5px solid #CACACA;
  font-style: normal;
  font-weight: 400;
  font-size: ${p => fontScale(12)}px;
  line-height: 16px;
  color: rgba(29, 27, 41, 0.5);
  background-color: white;
  border-radius: 6px;
  padding: 9px 12px;
  margin-right: 20px;
  width: 40%;
`

export const DivRowFlex = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`
export default BlogPage;