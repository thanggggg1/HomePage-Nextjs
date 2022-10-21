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
    IMG_CLICKUP_EXAMPLE, IMG_COZY_ANTITHIEF, IMG_CRUCIAL_ANTITHIEF, IMG_DAKAAS, IMG_DEFENDIFY,
    IMG_PROTECT_CONTENT_01,
    IMG_PROTECTION, IMG_ROAR_THEME, IMG_STORE_BUNDLE, IMG_TOP_PROTECTION, IMG_VAULT_ANTITHIEF, IMG_WEBZYE
} from "../../../assets";
import {CardQuestions} from "../../../components/BlogPage/CardQuestions";
import {TableContents} from "../../../components/BlogPage/TableContents";
import {DivRowFlex} from "../BlogPage";
import {CardArticle} from "../../../components/BlogPage/CardArticle";
import {Footer} from "../../../components/Footer";
import UseWindowSize from "../../../utils/useWindowSize";
import $ from "jquery";
import {NextPage} from "next";

const data = [
    'Disable Right-click Anti-theft',
    'Cozy AntiTheft by eCommerce Addons',
    'Disable Right Click Pro by Crucial Commerce Apps',
    'Disable Right Click w/Vault by Electric Apps',
    'Disable Mouse Right-Click by RoarTheme',
    'Disable Right Click & Country by Dakaas',
    'Country Blocker by StoreBunndle',
    'Defendity: Copyright AntiTheft by DJP Digital',
    'Content Protection by Webyze'

];
const title = 'TOP THE 9 BEST SHOPIFY CONTENT PROTECTOR APPS'

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
                <meta name="best-shopify-protection" content="Your content must be well-protected to prevent unauthorized replication. These the 9 best Shopify content protector apps are effective solutions for you to do it." />
            </Head>
            <NavBar/>
            <Container>
                <HeaderSection>
                    <div style={{width: '100%',borderRadius:6}}>
                        <Image src={IMG_TOP_PROTECTION} layout={'responsive'} priority alt={'TOP THE 9 BEST SHOPIFY CONTENT PROTECTOR APPS'} />
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
                            <Image src={IMG_PROTECTION} layout={'responsive'} priority={true} alt={'Disable Right-click Anti-theft'}/>
                            <TextContent><TextLink href={'https://apps.shopify.com/content-protection-1'}>Disable Right-click anti-theft</TextLink> is an effective and thorough solution that allows Shopify’s merchants to protect all their stores’ assets. This software installs quickly and effortlessly and works without the need for any coding. After your installation, it will turn off right-clicking all purposeful infringements of your copyright, including screen captures, downloads, keyboard shortcuts, right clicks, and Dev Tools. Simply toggle the settings on/off on the app dashboard to safeguard your Shopify store in a few seconds.

                            </TextContent>
                            <TextContent>Highlight features:</TextContent>
                            <TextContent>- Protect Text & Images
                            </TextContent>
                            <TextContent>- Disable Print Page (ctrl/cmd + P)
                            </TextContent>
                            <TextContent>- Disable Keyboard Shortcuts
                            </TextContent>
                            <TextContent>- Disable Inspect Elements/Developer&apos;s Tools (F12)
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
                            <Image src={IMG_COZY_ANTITHIEF} layout={'responsive'} priority={true} alt={'Cozy AntiTheft by eCommerce Addons'}/>
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
                            <TextContent>Simply type your article into the text box and click the &quot;check plagiarism&quot; button to get it checked for plagiarism.
                                The next thing that will happen is that this tool will use Google&apos;s search engine to scan for words and phrases from your writing.
                                It will highlight certain passages of the content located online when the search is done.
                            </TextContent>

                        </section>
                        {/*Section 03*/}
                        <section id={'03'}>
                            <TextTitle>3. Disable Right Click Pro by Crucial Commerce Apps</TextTitle>
                            <Image src={IMG_CRUCIAL_ANTITHIEF} layout={'responsive'} priority={true} alt={'Disable Right Click Pro by Crucial Commerce Apps'}/>
                            <TextContent>Disable Right Click Pro could prevent store visitors from downloading any images, disable copy & paste & &apos;save as&apos; and anti-theft purposes to help you avoid your store&apos;s search ranking dropping significantly due to the duplicated content without any coding.
                                Besides, this app runs smoothly and won&apos;t interfere with your consumers&apos; experiences.
                            </TextContent>
                            <TextContent>Highlight features:
                            </TextContent>
                            <TextContent>- Protect your store&apos;s content
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
                            <Image src={IMG_VAULT_ANTITHIEF} priority={true} layout={'responsive'} alt={' Disable Right Click w/Vault by Electric Apps'}/>
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
                        <section id={'05'}>
                            <TextTitle>5. Disable Mouse Right-Click by RoarTheme</TextTitle>
                            <Image src={IMG_ROAR_THEME} priority={true} layout={'responsive'} alt={'Disable Mouse Right-Click by RoarTheme'}/>
                            <TextContent>Another basic-protected app for Shopify merchants is <TextBold>Disable Mouse Right-click</TextBold> by RoarTheme. It will safeguard the content and graphics in your store after installation.
                                This app can be able to work with all themes, but the page loading time may be a little slower. However, it is still worth trying.
                            </TextContent>
                            <TextContent>Highlight features:
                            </TextContent>
                            <TextContent>-  Protect your images</TextContent>
                            <TextContent>-  Protect your text</TextContent>
                            <TextContent>-  Works with all themes</TextContent>
                        </section>
                        {/*    Section 06*/}
                        <section id={'06'}>
                            <TextTitle>6. Disable Right Click & Country by Dakaas</TextTitle>
                            <Image src={IMG_DAKAAS} priority={true} layout={'responsive'} alt={'Disable Right Click & Country by Dakaas'}/>
                            <TextContent><TextBold>Disable Right Click & Country</TextBold> uses the block right click program to disable copy, paste, &quot;save as,&quot; and anti-theft purposes in order to stop shop visitors from downloading any photographs. Additionally, it incapacitates right-click, and copy-text, making the majority of thefts end. Block access to your store
                                for users from specific countries or IP addresses to reduce fraud and fraudulent refunds.
                            </TextContent>
                            <TextContent>Highlight features:
                            </TextContent>
                            <TextContent>-  Protect images and content</TextContent>
                            <TextContent>-  Disable right click</TextContent>
                            <TextContent>-  Block visitors by country</TextContent>
                        </section>
                        {/*    Section 07*/}
                        <section id={'07'}>
                            <TextTitle>7. Country Blocker by StoreBunndle</TextTitle>
                            <Image src={IMG_STORE_BUNDLE} priority={true} layout={'responsive'} alt={'Country Blocker by StoreBunndle'}/>
                            <TextContent>A prominent feature of <TextBold>Country Blocker</TextBold> is the ability to block visitors from certain countries from whom you do not
                                want to visit your store. Besides, it can still secure your store assets by disabling right-clicking on your content and images and motivate your visitors to add more items to your cart.
                            </TextContent>
                            <TextContent>Highlight features:
                            </TextContent>
                            <TextContent>-  Increase Average Order Value</TextContent>
                            <TextContent>-  Protect your store</TextContent>
                            <TextContent>-  Block/redirect countries</TextContent>
                        </section>
                        {/*    Section 08*/}
                        <section id={'08'}>
                            <TextTitle>8. Defendity: Copyright AntiTheft by DJP Digital</TextTitle>
                            <Image src={IMG_DEFENDIFY} priority={true} layout={'responsive'} alt={'Defendity: Copyright AntiTheft by DJP Digital'}/>
                            <TextContent>
                                <TextBold>Defendity: Copyright AntiTheft</TextBold> is nearly the same as <TextBold>Disable Right-click w/Vault</TextBold> by Electric Apps
                                and <TextBold>Disable Mouse Right-Click</TextBold> by RoarTheme that I listed above. With 2 functions that protect your text, and images by disabling right-click, drag and drop, keyboard shortcuts, Shopify merchants are guaranteed about their content’s safety. Furthermore,
                                it disables the context menu on mobile devices ranging from Android to Apple.
                            </TextContent>
                            <TextContent>Highlight features:
                            </TextContent>
                            <TextContent>-  Protect your text</TextContent>
                            <TextContent>-  Protect your images</TextContent>
                            <TextContent>-  Works on mobile</TextContent>
                        </section>
                        {/*    Section 09*/}
                        <section id={'09'}>
                            <TextTitle>9. Content Protection by Webyze</TextTitle>
                            <Image src={IMG_WEBZYE} priority={true} layout={'responsive'} alt={'Content Protection by Webyze'}/>
                            <TextContent>Content Protection is suitable for Shopify merchants who just want to simply protect their content and images since it only serves to secure your images and descriptions from being reused by malicious merchants. Therefrom, Content protection could keep your content unique, and original and help you increase your search engine rankings.
                            </TextContent>
                            <TextContent>Highlight features:
                            </TextContent>
                            <TextContent>-  Secure your images</TextContent>
                            <TextContent>-  Protect your content</TextContent>
                            <TextContent>-  Keep your content unique</TextContent>
                        </section>

                        {/*    Section end*/}
                        <section id={'end'} >
                            <TextTitle>CONCLUSION</TextTitle>
                            <TextContent>Shopify has excellent functionality, and you may increase its adaptability by using the
                                different applications available in the Shopify app store. These nine Shopify applications are some of the best content protectors for your online business.
                            </TextContent>
                            <TextContent>
                                These apps will definitely help you protect your store’s content, boost your sales, and build your eCommerce reputation.
                            </TextContent>
                            <TextContent>
                                Please let us know in the comments below if you know of any other excellent content protection apps for Shopify stores!
                            </TextContent>
                        </section>
                        {/*    Footer*/}
                        <section id={'ending'}>

                        </section>
                        {/*    Related Articles*/}
                        {/*<TextNormalBold>Related Articles:*/}
                        {/*</TextNormalBold>*/}
                        {/*<ListArticles>*/}
                        {/*    <ListItem>How ClickUp customer service uses ClickUp</ListItem>*/}
                        {/*    <ListItem>How to get the most out of your team with ClickUp</ListItem>*/}
                        {/*    <ListItem>How ClickUp’s marketing teams uses ClickUp</ListItem>*/}
                        {/*    <ListItem>How ClickUp’s quality excellence team uses ClickUp</ListItem>*/}
                        {/*    <ListItem>How ClickUp’s onboarding team uses ClickUp</ListItem>*/}
                        {/*</ListArticles>*/}
                        <CardQuestions/>
                        <br/>
                        <br/>
                    </LeftContainer>
                    {width > 1024 &&  <RightContainer>
                        <TableContents data={data} title={title}/>
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
                            <CardArticle title={'How to boost sales on your Shopify store.'} linkHref={'/Blog/posts/boost-sale-shopify'}/>
                        </ItemArticle>
                        <ItemArticle>
                            <CardArticle title={'How to protect your images, text, content.'} linkHref={'/Blog/posts/protect-content'}/>
                        </ItemArticle>
                        <ItemArticle>
                            <CardArticle title={'3 huge benefits of offering gifts with purchase.'} linkHref={'/Blog/posts/benefits-with-purchase'}/>
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
const TextLink = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: ${p => fontScale(20)}px;
  line-height: 20px;
  letter-spacing: 0.025em;
  margin: 12px 0;
  color: #18A0FB;
  text-decoration: underline;
`
export default TopContentProtection