import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import {NavBar} from "../../../components/NavBar";
import styled from "styled-components";
import Image from 'next/image'
import {IC_CALENDAR, IC_UPLOAD, IC_USER, IMG_CARD_PROBLEM, IMG_CLICKUP_EXAMPLE} from "../../../assets";
import {RowSection} from "../../index";
import {CardQuestions} from "../../../components/BlogPage/CardQuestions";
import {CardArticle} from "../../../components/BlogPage/CardArticle";
import {DivRowFlex} from "../BlogPage";
import {Footer} from "../../../components/Footer";
import {TableContents} from "../../../components/BlogPage/TableContents";
import $ from 'jquery'
import {fontScale} from "../../../utils/fontScale";
import Head from "next/head";
import UseWindowSize from "../../../utils/useWindowSize";
const PostBlog = memo(function PostBlog() {

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
                <title>SortEcom - Post Blog</title>
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
                        <TextHeading>How ClickUp’s Solution Engineering Team Uses ClickUp</TextHeading>
                        <RowStart>
                            <Image src={IC_USER} width={28} height={28}/>
                            <UserInfo>
                                <TextNormalBold>Liam Marhonry</TextNormalBold>
                                <br/>
                                <TextNormal>Senior Solutions Engineer</TextNormal>
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
                        <TextContent>Solutions Engineer, pre-sales engineer, solutions consultant, and sales consultant
                            are just a few of the titles you may see in the solutions engineering world.</TextContent>
                        <TextContent>In partnership with sales teams, these individuals use extensive technical
                            knowledge to demonstrate the value of technology solutions to prospective
                            clients.</TextContent>
                        <TextContent>Between partnering with the sales and product management teams, responding to
                            responding to requests for proposals (RFPs), tailoring solution presentations, developing
                            creative technical solutions, and much more—it’s safe to say that solutions engineers have a
                            lot they need to keep organized!</TextContent>
                        <TextContent>In this article, we will discuss a few of the key aspects within ClickUp which
                            enable us to be more productive than ever!</TextContent>

                        <TextHeading>Our Solution Engineering Team’s Favorite ClickUp Features</TextHeading>

                        {/*    Section 1*/}
                        <section id={'01'}>
                            <TextTitle>1. Salesforce Integration</TextTitle>
                            <TextContent>When someone says lip balm, you likely think of ChapStick. In a similar fashion,
                                when someone says CRM, you picture Salesforce.

                            </TextContent>
                            <TextContent>This is because Salesforce is fantastic at living up to its namesake and managing
                                customer relationships! A productivity tool like ClickUp offers collaboration benefits, not
                                in scope for your typical CRM.</TextContent>
                            <TextContent>One of the main focuses of a solutions engineering role is supporting a sales team,
                                so it’s critical that we’re always on the same page with our sales counterparts regarding
                                any customer engagements!</TextContent>
                            <TextContent>Our sales team tracks their contacts and activities within Salesforce, and so when
                                an opportunity reaches the stage where a solutions engineer is looped in, the integration
                                creates a related task within ClickUp and attaches a hyperlink to the task within Salesforce
                                under the ClickUp Task URL field.

                            </TextContent>

                            <TextContent>In a similar manner, the Salesforce Opportunity URL is also stored within ClickUp
                                for easy reference by our sales counterparts!﻿🤝﻿

                            </TextContent>
                            <TextContent>None of this would be possible without ClickUp’s robust API, which enabled us to
                                create this integration to match our exact needs. Additionally, it’s given us the
                                flexibility to iteratively enhance it over time as we discover additional areas for process
                                improvement!

                            </TextContent>
                        </section>
                        {/*    Section 2*/}
                        <section id={'02'} >
                            <TextTitle id={'section-02'}>2. Automation</TextTitle>
                            <TextContent>While driving a manual car may be a sense of pride for some, manually processing
                                work definitely is not!

                            </TextContent>
                            <TextContent>With ClickUp, we consistently leverage automations to minimize the manual work
                                needing to be completed by our team.</TextContent>
                            <TextContent>An example of this is when a sales opportunity is marked as “Won.” This triggers an
                                automation to apply a templated Doc, standardizing our pre-sales to post-sales
                                implementation hand-off process.</TextContent>
                            <TextContent>By having this automatically included in our workflow, we not only save
                                time—historically spent making these documents manually—but also establish a more seamless
                                customer experience from start to finish!

                            </TextContent>
                            <TextContent>With such an intuitive user interface, our managers can effortlessly make updates
                                to any of their automations when required! ﻿🕺﻿

                            </TextContent>
                            <Image src={IMG_CARD_PROBLEM} layout={'responsive'}/>
                            <TextItalic>Automations are used to automatically trigger results when an action takes place.
                                For example, using the “when status changes” automation, we apply a template to a task to
                                ensure no valuable information is lost during client handoffs
                            </TextItalic>

                            <TextContent>With all the free time saved by automating administrative work, previously
                                completed manually, our managers have significantly more time to assist in deal strategy,
                                supporting us on live calls, and developing enablement material to help us grow as a team.

                            </TextContent>
                            <TextContent>This is just one example, but the sky is truly the limit in regards to what can be
                                automated using ClickUp!

                            </TextContent>
                        </section>
                        {/*Section 03*/}
                        <section id={'03'}>
                            <TextTitle>3. Personalized Views</TextTitle>
                            <TextContent>It’s no secret that different individuals prefer to view their work in different
                                ways.

                            </TextContent>
                            <TextContent>With ClickUp, each Solutions Engineer can manage their active deals in the manner
                                they find most efficient! Using a combination of filters and grouping, we seamlessly drill
                                down into the details that matter the most and hide information that may not be the most
                                relevant such as deals that are on temporary hold.</TextContent>
                            <Image src={IMG_CARD_PROBLEM} layout={'responsive'}/>
                            <TextItalic>List view ensures that the solutions team can see the exact information that they
                                need
                            </TextItalic>
                            <TextItalic>I use a personalized view to help me review all of my solutions engineer engagements
                                with the sales professionals.

                                We are able to group by account executive and update each solutions engineer request in the
                                list as we go.

                                This also allows me to collapse the other account executives’ opportunities so only one
                                person’s deals are shown on the screen. I can easily open the Task modal for each
                                opportunity and update any notes and next steps and then close it to go back to my view.

                                This makes my 1:1 meetings with the account executives much more efficient and allows us to
                                keep the focus on what matters most

                            </TextItalic>
                        </section>


                        {/*    Section 04*/}
                        <section id={'04'}>
                            <TextTitle>4. Template Docs</TextTitle>
                            <TextContent>Within ClickUp, you can create templates for just about anything!

                            </TextContent>
                            <TextContent>For any and all notes related to customers our team is working with, we have a Doc automatically created once we’re engaged with an opportunity.</TextContent>
                            <Image src={IMG_CARD_PROBLEM} layout={'responsive'}/>
                            <TextItalic>Custom-made Doc templates ensure that we can streamline repeated processes and document the most important information
                            </TextItalic>
                            <TextContent>By maintaining a consistent format for note-taking, our team spends less time prepping for customer meetings, so we’re organized by default!

                            </TextContent>
                            <TextContent>Additionally, when someone from the team or broader ClickUp crew needs to reference our notes, they know exactly where to go to find them.

                            </TextContent>
                            <TextContent>After meeting with a customer, follow-up is frequently required regarding the next steps, action items, etc. To ensure these action items are completed in a timely fashion, we simply select any relevant note in our Doc and turn it into an assigned comment.

                            </TextContent>
                        </section>

                        {/*    Section 05*/}
                        <section id={'05'} >
                            <TextTitle>5. Time Tracking</TextTitle>
                            <TextContent>Understanding where your time is being spent is important, especially for Solutions Engineers. Time is money—literally!

                            </TextContent>
                            <TextContent>As our team continues to grow and scale, maximizing efficiency is key, so the team wants to understand where and how time is spent.

                            </TextContent>
                            <TextContent>Time tracking labels to the rescue.
                            </TextContent>
                            <TextContent>However, the insights into how our time is spent don’t stop here! By using time tracking labels, we see exactly what we’re doing or not doing—all within the time we’d previously spent working on our assigned accounts.

                            </TextContent>
                            <Image src={IMG_CARD_PROBLEM} layout={'responsive'}/>
                            <TextItalic>Time tracking labels allow the team to see a granular view of where time is spent, so processes can be continuously improved
                            </TextItalic>
                            <TextContent>This helps us deliver on our No. 1 core value, creating the best customer experience, both for our sales team partners as well as potential customers.

                            </TextContent>
                        </section>
                        {/*    Footer*/}
                        <section id={'ending'}>
                            <TextTitle>Using ClickUp to Enhance Collaboration and Keep Our Team Organized
                            </TextTitle>
                            <TextContent>We love the opportunity to work cross-departmentally on the platform because it enables us to partner effectively with our customers.

                            </TextContent>
                            <TextContent>With weekly releases, it’s fair to say that our engineering, product, and design teams move extremely agile—leveraging the platform daily makes adopting all of the new functionality a breeze. 🌬️

                            </TextContent>
                            <TextContent>The solutions team unanimously agrees: ClickUp is our single source of truth for everything!

                            </TextContent>
                            <TextContent>Now it’s your turn: how will you use ClickUp for your pre-sales process? 😉

                            </TextContent>
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
export default PostBlog