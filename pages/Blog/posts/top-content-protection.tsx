import React, {memo, useCallback, useEffect} from "react";
import styled from "styled-components";
import {fontScale} from "../../../utils/fontScale";
import {RowSection} from "../../index";
import Head from "next/head";
import {NavBar} from "../../../components/NavBar";
import Image from "next/image";
import {
    IC_CALENDAR,
    IC_UPLOAD,
    IC_USER,
    IMG_CLICKUP_EXAMPLE, IMG_COZY_ANTITHIEF, IMG_CRUCIAL_ANTITHIEF,
    IMG_PROTECT_CONTENT_01,
    IMG_PROTECTION
} from "../../../assets";
import {CardQuestions} from "../../../components/BlogPage/CardQuestions";
import {TableContents} from "../../../components/BlogPage/TableContents";
import {DivRowFlex} from "../BlogPage";
import {CardArticle} from "../../../components/BlogPage/CardArticle";
import {Footer} from "../../../components/Footer";
import UseWindowSize from "../../../utils/useWindowSize";
import $ from "jquery";
import {NextPage} from "next";

export const TopContentProtection:NextPage = memo(function TopContentProtection(){
    const {width}=UseWindowSize();
    const addClassOnScroll = useCallback(()=>{
        const windowTop = $(window).scrollTop();
        $('section[id]').each(function (index, elem) {
            // @ts-ignore
            const offsetTop = $(elem).offset().top;
            const outerHeight = $(this).outerHeight(true);
            // @ts-ignore
            if( windowTop > (offsetTop - 50) && windowTop < ( offsetTop + outerHeight)) {
                const elemId = $(elem).attr('id');
                $("div.active-href").removeClass('active-href');
                $("a[href='#" + elemId + "']").parent().addClass('active-href');
            }
        });
    },[])
    useEffect(()=>{
        $(window).on('scroll', function () {
            addClassOnScroll();
        });
    },[])
    return (
        <>
            <Head>
                <title>TOP THE 9 BEST SHOPIFY CONTENT PROTECTOR APPS</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <NavBar/>
            <Container>
                <HeaderSection>
                    <div style={{width: '100%',borderRadius:6}}>
                        <Image src={IMG_CLICKUP_EXAMPLE} layout={'responsive'} priority />
                    </div>
                </HeaderSection>
                <ContentContainer>
                    <LeftContainer width={width}>
                        <TextHeading>TOP THE 9 BEST SHOPIFY CONTENT PROTECTOR APPS</TextHeading>
                        <RowStart>
                            <Image src={IC_USER} width={28} height={28}/>
                            <UserInfo>
                                <TextNormalBold>Thanh Van Nguyen</TextNormalBold>
                                <br/>
                                <TextNormal>Junior Content Writer</TextNormal>
                            </UserInfo>
                            <Info>
                                <Image src={IC_CALENDAR} width={28} height={28}/>
                                <TextNormalBold> August 8 2022</TextNormalBold>
                            </Info>
                            <Info>
                                <Image src={IC_CALENDAR} width={28} height={28}/>
                                <TextNormalBold>Max 7 min read</TextNormalBold>
                            </Info>
                        </RowStart>
                        {/*Intro*/}
                        <TextContent>Content theft has been a great problem since the beginning of the Internet. For as long as your Shopify store has been in existence, content theft has been rampant. It is extremely easy and quick for thieves to duplicate something from another store without permission, which not only helps them benefit from our own hard work and labor but also harms your Shopify store.
                            Original images and content are valuable digital assets that must be well-protected to prevent unauthorized replication. Therefore, in this article, we will recommend the 9 best content protector apps for your Shopify store.
                        </TextContent>


                        <TextHeading>Disable Right-click Anti-theft by Sortecom</TextHeading>

                        {/*    Section 1*/}
                        <section id={'01'}>
                            <TextTitle>1. Disable Right-click Anti-theft</TextTitle>
                            <Image src={IMG_PROTECTION} layout={'responsive'} priority={true}/>
                            <TextContent><TextBold>Disable Right-click Anti-theft</TextBold> is an effective and thorough solution that allows Shopify’s merchants to protect all their stores’ assets. This software installs quickly and effortlessly and works without the need for any coding. After your installation, it will turn off right-clicking all purposeful infringements of your copyright, including screen captures, downloads, keyboard shortcuts, right clicks, and Dev Tools. Simply toggle the settings on/off on the app dashboard to safeguard your Shopify store in a few seconds.

                            </TextContent>
                            <TextContent>Highlight features:</TextContent>
                            <TextContent>- Protect Text & Images
                            </TextContent>
                            <TextContent>- Disable Print Page (ctrl/cmd + P)
                            </TextContent>
                            <TextContent>- Disable Keyboard Shortcuts
                            </TextContent>
                            <TextContent>- Disable Inspect Elements/Developer's Tools (F12)
                            </TextContent>
                            <TextContent>- Disable Right Click
                            </TextContent>
                            <TextContent>- Disable Selenium Access
                            </TextContent>
                            <TextContent>- Detect/Limit Spam
                            </TextContent>
                            <TextContent>- Work with all themes
                            </TextContent>
                            <TextContent>- Block Country (Updating)
                        </TextContent>
                            <TextContent>- Compatible with all browsers
                        </TextContent>
                            <TextContent>- Work on all devices (desktop, mobile, tablet).
                            </TextContent>


                        </section>
                        {/*    Section 2*/}
                        <section id={'02'} >
                            <TextTitle id={'section-02'}>2. Cozy AntiTheft by eCommerce Addons
                            </TextTitle>
                            <Image src={IMG_COZY_ANTITHIEF} layout={'responsive'} priority={true}/>
                            <TextContent>With only a few clicks, Cozy AntiTheft enables you to secure text, photographs, and other store content against theft.
                                It makes it more difficult for a burglar to steal your content by turning off specific browser functions.
                                You only need to click a few toggles after the program has been installed and it will become active within seconds.
                            </TextContent>
                            <TextContent>Highlight features:
                            </TextContent>
                                <TextContent>-  Disable right-click
                            </TextContent>
                            <TextContent>- Disable drag drop
                            </TextContent>
                            <TextContent>- Disable keyboard Shortcuts
                            </TextContent>
                            <TextContent>- Mobile friendly
                            </TextContent>
                            <TextContent>Another striking advantage of Cozy AntiTheft is that it is free for merchants. However,
                                it would not let a person enable screenshot capabilities and sometimes still has a fault that makes it inactive. It’s recommended if you cannot afford other paid protectors.
                            </TextContent>
                            <TextContent>Simply type your article into the text box and click the "check plagiarism" button to get it checked for plagiarism.
                                The next thing that will happen is that this tool will use Google's search engine to scan for words and phrases from your writing.
                                It will highlight certain passages of the content located online when the search is done.
                            </TextContent>

                        </section>
                        {/*Section 03*/}
                        <section id={'03'}>
                            <TextTitle>3. Disable Right Click Pro by Crucial Commerce Apps</TextTitle>
                            <Image src={IMG_CRUCIAL_ANTITHIEF} layout={'responsive'} priority={true}/>
                            <TextContent>Disable Right Click Pro could prevent store visitors from downloading any images, disable copy & paste & 'save as' and anti-theft purposes to help you avoid your store's search ranking dropping significantly due to the duplicated content without any coding.
                                Besides, this app runs smoothly and won't interfere with your consumers' experiences.
                            </TextContent>
                            <TextContent>Highlight features:
                            </TextContent>
                            <TextContent>- Protect your store's content
                            </TextContent>
                            <TextContent>- Won’t annoy customers
                            </TextContent>
                            <TextContent>- Easy install | No coding
                            </TextContent>
                            <TextContent>Disable Right Click Pro also has free and paid versions at a reasonable price and it really works. Unfortunately, it can be bypassed with some easy tricks.
                            </TextContent>

                        </section>


                        {/*    Section 04*/}
                        <section id={'04'}>
                            <TextTitle>4. Disable Right Click w/Vault by Electric Apps</TextTitle>
                            <Image src={IMG_PROTECTION} priority={true} layout={'responsive'}/>
                            <TextContent>The information on your website will be secured by Vault from the most common attacks in existing web browsers.
                                Upon installation, Vault will immediately turn on and load each request made to your site.
                            </TextContent>
                            <TextContent>Highlight features:
                            </TextContent>
                            <TextContent>-  Protect your text</TextContent>
                            <TextContent>-  Protect your images</TextContent>
                            <TextContent>-  Logs custom legal notice</TextContent>
                            <TextContent>-  Desktop and mobile support</TextContent>
                            <TextContent>With no fee paid, Disable Right Click w/Vault is suitable for Shopify merchants who only need some basic content-protected functions.</TextContent>
                        </section>

                        {/*    Section 05*/}
                        <section id={'05'} >
                            <TextTitle>5. CONCLUSION</TextTitle>
                            <TextContent>Theft of online content will always be a concern.
                                The good news is that you have a variety of options for preventing, identifying, and handling stolen content.
                                The tools and advice listed above can assist you in keeping your work safe from copying or at least guarantee that you receive the credit you deserve for all of your diligent efforts.
                            </TextContent>
                        </section>
                        {/*    Footer*/}
                        <section id={'ending'}>

                        </section>
                        {/*    Related Articles*/}
                        <TextNormalBold>Related Articles:
                        </TextNormalBold>
                        <ListArticles>
                            <ListItem>How ClickUp customer service uses ClickUp</ListItem>
                            <ListItem>How to get the most out of your team with ClickUp</ListItem>
                            <ListItem>How ClickUp’s marketing teams uses ClickUp</ListItem>
                            <ListItem>How ClickUp’s quality excellence team uses ClickUp</ListItem>
                            <ListItem>How ClickUp’s onboarding team uses ClickUp</ListItem>
                        </ListArticles>
                        <CardQuestions/>
                        <br/>
                        <br/>
                    </LeftContainer>
                    {width > 1024 &&  <RightContainer>
                        <TableContents/>
                    </RightContainer>}
                </ContentContainer>
                <ContentContainer>
                    <RowSection>
                        <IconBackground>
                            <Image src={IC_UPLOAD} width={50} height={50}/>
                        </IconBackground>
                        <TextTitle>Recent Articles</TextTitle>
                    </RowSection>
                </ContentContainer>
                <ContentContainer>
                    <DivRowFlex width={width}>
                        <ItemArticle>
                            <CardArticle/>
                        </ItemArticle>
                        <ItemArticle>
                            <CardArticle/>
                        </ItemArticle>
                        <ItemArticle>
                            <CardArticle/>
                        </ItemArticle>
                    </DivRowFlex>
                </ContentContainer>
                <br/>
                <br/>
                <br/>
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
const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin-top: 80px;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
`
const HeaderSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  margin-top: 80px;
`

const LeftContainer = styled.div<{width:number}>`
  display: flex;
  flex-direction: column;
  width: ${p=>p.width > 1024 ? '62%' : '100%'}
`
const RightContainer = styled.div`
  display: flex;
  width: 34%;
  align-self: flex-start;
  position: sticky;
  height: 85vh;
  overflow: scroll;
  top:160px;
`

const TextHeading = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: ${p=>fontScale(40)}px;
  line-height: 55px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const TextTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: ${p=>fontScale(32)}px;
  line-height: 44px;
  letter-spacing: 0.025em;
  color: #000000;
`

const TextNormal = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: ${p=>fontScale(13)}px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: #000000;
`
const TextNormalBold = styled(TextNormal)`
  font-size: ${p=>fontScale(14)}px;
  font-weight: 600;
`
const Info = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  margin-right: 12px;
  border-right: 1px solid black;
`

const UserInfo = styled.div`
  padding-right: 20px;
  margin-right: 12px;
  border-right: 1px solid black;
`
const RowStart = styled(RowSection)`
  justify-content: flex-start;
`
const TextContent = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${p=>fontScale(18)}px;
  line-height: 30px;
  letter-spacing: 0.025em;
  color: #292d34;
`
const TextItalic = styled(TextContent)`
  font-style: italic;
  color: #5e5e5e;
`
const TextBold =styled.span`
  font-style: normal;
  font-weight: 800;
  font-size: ${p=>fontScale(18)}px;
  line-height: 30px;
  letter-spacing: 0.025em;
  color: #292d34;
`
const ListArticles= styled.ul`

`
const ListItem = styled.li`
  font-style: normal;
  font-weight: 600;
  font-size: ${p=>fontScale(16)}px;
  line-height: 16px;
  letter-spacing: 0.025em;
  color: #18A0FB;
  margin: 12px 0;
`
const IconBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #abd0ea;
  padding: 12px;
  border-radius: 12px;
  margin-right: 12px;
`
const ItemArticle = styled.div`
display: flex;
  flex: 1;
  margin-right: 20px;
`
export default TopContentProtection