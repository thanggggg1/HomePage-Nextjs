import {NextPage} from "next";
import React, {memo, useCallback, useEffect} from "react";
import UseWindowSize from "../../../utils/useWindowSize";
import $ from "jquery";
import Head from "next/head";
import {NavBar} from "../../../components/NavBar";
import Image from "next/image";
import {
    IC_CALENDAR,
    IC_UPLOAD,
    IC_USER,
    IMG_CARD_PROBLEM,
    IMG_CLICKUP_EXAMPLE,
    IMG_PROTECT_CONTENT_01, IMG_PROTECTION
} from "../../../assets";
import {CardQuestions} from "../../../components/BlogPage/CardQuestions";
import {TableContents} from "../../../components/BlogPage/TableContents";
import {RowSection} from "../../index";
import {DivRowFlex} from "../BlogPage";
import {CardArticle} from "../../../components/BlogPage/CardArticle";
import {Footer} from "../../../components/Footer";
import styled from "styled-components";
import {fontScale} from "../../../utils/fontScale";

const ProtectContentBlog:NextPage=memo(function ProtectContentBlog() {
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
                <title>HOW TO PROTECT YOUR IMAGES, TEXT, AND CONTENT </title>
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
                        <TextHeading>How to protect your images,text and content</TextHeading>
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
                        <TextContent>Disable right-click for material is extremely important, particularly for Shopify store owners since stolen content is often reposted on other blogs, article websites, and personal websites. You may have put hours, if not days, into developing content you believe your customers' personas would enjoy, only for someone else to profit from it on their own website with your creativity and labor.
                            So are you looking for a way to disable right-click to prevent store visitors from downloading any images, disable copy, paste, and ‘save as’ for anti-theft purposes? If so, this is for you.</TextContent>
                        <TextContent>We will go over all you need to know about securing your store content in this guide. You can use the tips and tricks shown here to disable right-click, stop image theft,
                            and prohibit IP addresses from particular countries in your Shopify store. We will also show how to carry it out on your own, with or without using a Shopify app.</TextContent>
                        <TextContent>Before we start, let’s understand content theft!</TextContent>

                        <TextHeading>WHAT IS CONTENT THEFT?</TextHeading>

                        {/*    Section 1*/}
                        <section id={'01'}>

                            <TextContent>The unauthorized use of website content by a third party for their personal gain is known as content theft.
                                Competitors steal a variety of online materials from websites, including blog posts, images,
                                audiovisual components, and more. If your content is valuable, more likely than not, someone will want to use it for their own benefit.
                            </TextContent>
                            <TextContent>Content thieves frequently target product descriptions, prices,
                                and user reviews on Shopify and other e-commerce websites. Without doing any
                                writing or editing themselves, content aggregators collect and reuse available content to drive traffic and earn generate sales.
                                The motivation is clear that it is much easier to copy any other content than go through the arduous process of creating their own.
                            </TextContent>
                            <TextTitle>1. RISKS AND CONSEQUENCES</TextTitle>
                            <TextContent>High-quality content is hard-work and time-consuming. Being stolen content may not only make you feel terrible but it also has some potential risks and serious consequences for your websites.</TextContent>
                            <TextContent>What will happen if your content is being stolen? Your websites may experience unfair competition when you have to spend a lot of time creating and editing while your competitors just need to copy all your images,
                                and text for their websites and ensure that their prices always are more reasonable than yours. It is not fair to the merchants who follow the rules.
                            </TextContent>

                            <TextContent>Your SEO rankings may decrease if scraper bots take your content and publish it elsewhere without your permission. Search engines must choose which version of "appreciably similar" information to rank for query results when there are several copies of it available online. Despite being very effective at identifying the original source, Google is not always accurate. Other websites must select between duplicates too.
                                Other websites may be spread instead of all the important inbound links pointing to you, reducing your online search visibility.
                            </TextContent>
                            <TextContent>As a result, traffic and income of your store will generally loss.
                                Every visitor an e-commerce website loses to a rival business represents a missed chance to make a transaction.
                            </TextContent>
                        </section>
                        {/*    Section 2*/}
                        <section id={'02'} >
                            <TextTitle id={'section-02'}>2. HOW TO RECOGNIZE IF YOUR CONTENT IS BEING STOLEN?
                            </TextTitle>
                            <TextBold>Google Alert</TextBold>
                            <TextContent>Google Alert is one of the most simple and user-friendly internet tools to automatically determine if your material was duplicated without your permission.
                                It not only notifies you via email whenever your website is mentioned but also when your content is being used illegally.
                            </TextContent>
                            <TextContent>To use Google Alerts, you just have to go visit the Google Alerts page,
                                paste a portion of any post you like to analyze, choose the kinds of websites you want to be looked for,
                                and then type your email address. If there are any cases of content being utilized that meet the criteria you specified, Google will email you with the findings.
                            </TextContent>
                            <TextBold>Plagiarism Checker </TextBold>
                            <TextContent>Software that checks content for duplication is known as a plagiarism checker (this may include quoted material, paraphrased material, similarities in wording, etc.).
                                It may be crucial for you if you want to check whether there is any website copying your content.
                            </TextContent>
                            <TextContent>Simply type your article into the text box and click the "check plagiarism" button to get it checked for plagiarism.
                                The next thing that will happen is that this tool will use Google's search engine to scan for words and phrases from your writing.
                                It will highlight certain passages of the content located online when the search is done.
                            </TextContent>
                            <TextBold>Google images</TextBold>
                            <TextContent>Google Image Search may meet your demand if you want to look for potential copies of your images and see whether someone is using them without your consent. Enter its URL or upload your original picture directly.
                                You will see the normal Google results page along with the websites and pages that feature your image if anything is discovered.
                            </TextContent>
                        </section>
                        {/*Section 03*/}
                        <section id={'03'}>
                            <TextTitle>3. SOLUTIONS</TextTitle>
                            <TextContent>You undoubtedly know precisely what to do if someone takes something from your home or company.
                                However, how do you handle it when something is stolen online? Every day, content is stolen, ripped, and scraped, and this behavior is getting more and more common online. Some dishonest individuals could decide to imitate your hard work rather than put in their own effort. Therefore, we listed several effective ways for you to protect your work.
                            </TextContent>
                            <TextBold>1. Ways to wipe out the offending content</TextBold>
                            <TextContent>After you identify your content is being used without your permission, what would you do? Would you call the police or post another blog to criticize your competitor?
                                They’re all impossible and can harm your brand’s reputation. So I put here a few steps to help you remove the stealing content on Shopify.</TextContent>
                            <TextBold>Contact the thief directly</TextBold>
                            <TextContent>You need to keep your calm in this case. Take some time to gather your views and proof before moving forward.
                                Make a document with all the details you can gather, such as the URL(s) where the content was taken is located, any contact information, dates, and times, etc.
                            </TextContent>
                            <TextContent>Although it might be difficult, confrontation is frequently the most effective way to have duplicated information deleted. For contact details, look through
                                all the offending Shopify stores.</TextContent>
                            <TextContent>Request the removal of your content by sending a brief message outlining what was taken, together with the URLs of both the original and copied page(s). Remember to provide a deadline when you compose your email. This shows your seriousness and creates a sense of urgency.</TextContent>
                            <TextBold>Report to DMCA </TextBold>
                            <TextContent>However, it is possible that the thief may not respond or ignore your warning. In this case, you may need to report copyright infringement to Shopify DMCA. To do this, you just have to fill in the form https://help.shopify.com/en/legal/dmca#/form all the necessary information. Then, users who repeatedly violate its policies will have their accounts disabled or terminated by Shopify, as necessary.
                            </TextContent>
                            <TextContent>Additionally, you may submit a single form to report multiple stores that are violating the same copyrighted content. You might be held responsible for damages if you wrongly claim that certain content infringes your copyright.</TextContent>
                            <TextBold>2. How to prevent future content theft.</TextBold>
                            <TextContent>As you can see, trying to find and delete stolen content can take a lot of time. Therefore, preventing content theft before it occurs is your greatest safeguarding option.</TextContent>
                            <Image src={IMG_PROTECT_CONTENT_01} layout={'responsive'}/>
                            <TextContent>You had better add a visible copyright notification on your website. Utilizing a text panel from the widgets pane in the Customizer to add the copyright notice to your sidebar so that it is always visible. Depending on the sort of themes you now operate, your copyright notice should be written differently.
                            </TextContent>
                            <TextContent>Moreover, you might need to apply a watermark on the photographs. Although it won't totally stop them from being stolen, it could assist to confirm your authorship.</TextContent>
                            <TextContent>Although these two methods are the simplest ways to mark your copyright, it’s still not thoroughly safe for your Shopify store. Therefore, we recommend you to add these apps to your Shopify store so that they can protect your content totally.
                            </TextContent>

                        </section>


                        {/*    Section 04*/}
                        <section id={'04'}>
                            <TextTitle>4. Disable Right-click anti-theft by Sortecom</TextTitle>
                            <Image src={IMG_PROTECTION} priority={true} layout={'responsive'}/>
                            <TextContent>With the variety of ways your copyright might be violated, you'll need a comprehensive approach to fend off dishonest tactics. Disable Right-click anti-theft is the ONLY app that secures both your images, and text and can block scammers. This app easily and quickly installs and works without any coding, just toggle the settings on/off
                                in the app dashboard to protect your content in a few seconds. Furthermore, it’s extremely convenient for every merchant due to its ability to work with all themes.
                            </TextContent>
                            <TextContent>-  Protect Text & Images</TextContent>
                            <TextContent>-  Disable Keyboard Shortcuts</TextContent>
                            <TextContent>-  Disable Print Page (ctrl/cmd + P)</TextContent>
                            <TextContent>-  Disable Inspect Elements/Developer's Tools (F12)
                            </TextContent>
                            <TextContent>-  Disable Right Click</TextContent>
                            <TextContent>-  Disable Selenium Access</TextContent>
                            <TextContent>-  Detect/Limit Spam</TextContent>
                            <TextContent>-  Work with all themes</TextContent>
                            <TextContent>-  Block Country (Updating)</TextContent>
                            <TextContent>-  Compatible with all browsers
                            </TextContent>
                            <TextContent>-  Work on all devices (desktop, mobile, tablet).</TextContent>
                            <TextContent><TextBold>Disable Right-click Anti-theft</TextBold> prevents all intentional violations of your copyright, including screen-shot, download, keyboard shortcuts, right clicks, and Dev Tools. Put a stop to the unfair competition brought on by spam, hackers, cheaters, and the theft of your labor. The <TextBold>Disable Right-click Anti-theft</TextBold> finds and prevents
                                suspicious activity that endangers your consumers and your business. Block access to your store for people from specific countries or with specific IP addresses.</TextContent>

                            <TextBold>Content Protection by Webize
                            </TextBold>
                            <TextContent>Highlight features:
                            </TextContent>
                            <TextContent>-   Secure your pictures
                            </TextContent>
                            <TextContent>-        Protect your text
                            </TextContent>
                            <TextContent>-        Keep your substance interesting
                            </TextContent>
                            <TextContent>This app can protect both your Shopify store’s images and substance. It is able to stop your photos from being copied, stored, or hot-connected and stop fraudulent merchants from reusing your portrayals and content. Especially, Content Protection could keep your content interesting so that your store may obtain better positions in online indexes by using unique and unusual content. However, it does not have adequate functions to thoroughly secure your store. This app may only meet your demand if you just need to protect your text.
                            </TextContent>
                            <TextContent>Price: $5/month
                            </TextContent>
                            <TextBold>Shop Secure by Eggflow
                            </TextBold>
                            <TextContent>Highlight features:
                            </TextContent>
                            <TextContent>-        Block visitors to your store
                            </TextContent>
                            <TextContent>-        GDPR consent banner
                            </TextContent>
                            <TextContent>-        Disable right-click
                            </TextContent>
                            <TextContent>Another app is Shop Secure, which can protect your content by blocking blacklisting or whitelisting visitors from particular nations to your store using their IP address. It also creates a GDPR consent banner to ask for visitors' consent to cookies and stay GDPR compliant and disables
                                right-click and keyboard shortcuts in your store to protect your work from unfair competition</TextContent>
                            <TextContent>Price: 9$/month
                            </TextContent>
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

export default ProtectContentBlog