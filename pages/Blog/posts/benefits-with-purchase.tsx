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
    IC_USER, IMG_BACKGROUND_FREEGIFT, IMG_CALL_TO_ACTION,
    IMG_CLICKUP_EXAMPLE,
    IMG_COZY_ANTITHIEF,
    IMG_CRUCIAL_ANTITHIEF,
    IMG_DAKAAS,
    IMG_DEFENDIFY, IMG_EMAIL_MARKETING,
    IMG_MOBILE_OPTIMIZED, IMG_MOTIVATOR,
    IMG_PROTECT_CONTENT_01,
    IMG_PROTECTION, IMG_REACH_BLOG,
    IMG_ROAR_THEME,
    IMG_STORE_BUNDLE, IMG_TITLE_BENEFITS,
    IMG_UPCART_FREEGIFT,
    IMG_VAULT_ANTITHIEF, IMG_VITALS,
    IMG_WEB_NAVIGATION,
    IMG_WEBZYE
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
    'What is gift-with-purchase promotion?',
    '3 huge advantages of offering gifts with purchase',
    'How to add gift-with-purchase?'
]
const title = '3 HUGE BENEFITS OF OFFERING GIFTS WITH PURCHASE'
export const BenefitsWithPurchase:NextPage = memo(function BenefitsWithPurchase(){
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
                <title>3 HUGE BENEFITS OF OFFERING GIFTS WITH PURCHASE</title>
                <meta name="benefits" content="Learn the reasons why we should include gift-with-purchase promotion in marketing campaigns and some supportive tools for gift-with-purchase promotion." />
            </Head>
            <NavBar/>
            <Container>
                <HeaderSection>
                    <div style={{width: '100%',borderRadius:6}}>
                        <Image src={IMG_TITLE_BENEFITS} layout={'responsive'} priority />
                    </div>
                </HeaderSection>
                <ContentContainer>
                    <LeftContainer width={width}>
                        <TextHeading>3 HUGE BENEFITS OF OFFERING GIFTS WITH PURCHASE</TextHeading>
                        <RowStart>
                            <Image src={IC_USER} width={28} height={28}/>
                            <UserInfo>
                                <TextNormalBold>Thanh Van Nguyen</TextNormalBold>
                                <br/>
                                <TextNormal>Junior Content Writer</TextNormal>
                            </UserInfo>
                            <Info>
                                <Image src={IC_CALENDAR} width={28} height={28}/>
                                <TextNormalBold> September 8 2022</TextNormalBold>
                            </Info>
                            <Info>
                                <Image src={IC_CALENDAR} width={28} height={28}/>
                                <TextNormalBold>Max 60 min read</TextNormalBold>
                            </Info>
                        </RowStart>
                        {/*Intro*/}
                        <TextContent>Who doesn't enjoy getting free things? Free gifts are a proven way for companies to attract customers, as seen by the growing popularity of gift-with-purchase programs. Customers appreciate gifts with purchases, especially when they already have plans to purchase the item.
                            Brands use it to get people to buy something. Gift with purchase campaigns, when conducted well, may increase sales and boost the value of your brand.
                        </TextContent>

                        {/*    Section 1*/}
                        <section id={'01'}>
                            <TextTitle>I. What is gift-with-purchase promotion?
                            </TextTitle>
                            <TextContent>Gift with purchase promotion is a marketing strategy used to attract clients and raise the average order value when they make a purchase with your brand. It's not a new tactic to offer a
                                free gift with purchase. This has been utilized by brands for years. When buyers meet the requirements, the merchants let them add a free item to their shopping cart.</TextContent>
                            <TextContent>This is better explained with an example! Let's imagine you purchase a product for $X and have the option to add a free item for $Y, or you are provided a free gift when a particular amount is spent, and so on.</TextContent>
                            <TextContent>The free gifts with purchases are typically goods that truly benefit the customers, such as travel-size cosmetics bottles, a free cup that comes with a coffee or tea package, or a sample of your new product.</TextContent>
                            <TextContent>These deals are often limited in quantity and offered by retailers for a brief period of time. Thus, "while goods last" and "limited time offer" labels emphasize uniqueness and urgency, urging shoppers to take advantage of the deals as soon as they are available.</TextContent>
                        </section>
                        {/*    Section 2*/}
                        <section id={'02'} >
                            <TextTitle id={'02'}>II. 3 huge advantages of offering gifts with purchase
                            </TextTitle>
                            <TextBold>1. Add brand recognition</TextBold>
                            <TextContent>People may choose to purchase one of the numerous other well-known brands when they want to buy something. They are likely to do so without ever considering yours. However, by offering a free gift, your product will become more attractive, providing your goods a strategic advantage against well-known and formerly reliable brands.</TextContent>
                            <TextContent>Giving gifts helps spread brand recognition. People will spread the word about your company to their friends and family when they purchase any item from you and receive a free gift as well. This will persuade their family members to buy things from your company. Make sure you provide your consumers with a branded and practical item so they can continue to interact with your business. A logo and an interesting message on your promotional item can help promote your company. Using a brand message as a marketing technique may be quite successful.
                            </TextContent>
                            <TextBold>2. Increasing conversion rate</TextBold>
                            <TextContent>Customers' reactions to the term "free" might be very emotional. Free things can make the value of the item seem more valuable in the eyes of the consumer. It is also possible to develop customer loyalty. Whe
                                n someone receives something for free, their affection for the business increases, which encourages them to buy more goods.</TextContent>
                            <TextContent>Businesses are utilizing the effectiveness of providing free gifts to consumers. They can offer their customers free gifts like samples of other products. It is significantly more effective to "test before you buy" than to use conventional promotional methods. It's more profitable to let customers sample things than to encourage them to consider purchasing something they've never tried. Companies are drastically increasing earnings by offering free samples, free trials, and "buy one, get one free" deals.
                            </TextContent>
                            <TextContent>Furthermore, if you offer your customers a free gift when they spend a certain amount of money. For instance, you provide a GWP deal for orders of $50 or more. If consumers have already spent $40 to complete the requirement and are given a free item, they are more likel
                                y to make another purchase.</TextContent>
                            <TextContent>Because of customers’ psychology that want to receive something for free or receive something more valuable than the specific product itself, offering a free gift with purchase may stimulate
                                them to make more purchases.</TextContent>
                            <TextBold>3. Build customer loyalty and encourage repeat purchases.
                            </TextBold>
                            <TextContent>Giving away something to consumers who make purchases increases the value of their order and creates a favorable connection with your business. According to survey data from Harris Interactive, nearly 90% of consumers who got a present said they tended to make more purchases from that online merchant in the future.
                                Customers are more loyal to companies that actually try to connect with them by adding value.</TextContent>
                            <TextContent>Furthermore, by including a gift with a purchase, you give your consumers the chance to check out a brand-new item that they would not normally buy. Your consumers are exposed to more goods from your brand as a result, and once they discover a product they enjoy, they are more likely to return for more.</TextContent>
                        </section>
                        {/*Section 03*/}
                        <section id={'03'}>
                            <TextTitle>III. How to add gift-with-purchase?</TextTitle>
                            <TextRed>1. Freegift by Sortecom</TextRed>
                            <Image src={IMG_BACKGROUND_FREEGIFT} layout={'responsive'} priority={true} alt={'Freegift by Sortecom'}/>
                            <TextContent><TextBold>Freegift</TextBold> by Sortecom is an effective app that can assist you to offer your gift-with-purchase into customers’ Shopify shopping carts. Just after
                                your installation and some basic setting up, free gifts will be automatically added to the customer's cart, which is a strong and efficient method to boost your AOV and
                                support the growth of the greatest conversion rates.</TextContent>
                            <TextContent>You can create unlimited offers for customers:
                            </TextContent>
                            <TextContent>⦁	Free gifts
                            </TextContent>
                            <TextContent>⦁	Buy one get one (BOGO)
                            </TextContent>
                            <TextContent>⦁	Buy X get Y
                            </TextContent>
                            <TextContent>⦁	Buy X discount Y</TextContent>
                            <TextContent>⦁	Built-in volume discounts</TextContent>
                            <TextContent>⦁	Customize the rules.
                            </TextContent>
                            <TextContent>⦁	… (and many more deals)
                            </TextContent>
                            <TextContent>It is not only extremely easy to set up any special offers for your customers but also helps you design and customize the gift
                                box details as your requirements without any code or page loading time.</TextContent>
                            <TextContent>Meeting all the demand at a reasonable cost, <TextBold>Freegift by Sortecom</TextBold> is suitable for every Shopify merchant who wants to use the gift-with-purchase promotion.</TextContent>

                            <TextBold>2. Gift box – Free gift motivator by Digismoothie</TextBold>
                            <Image src={IMG_MOTIVATOR} layout={'responsive'} priority={true} alt={'Gift box – Free gift motivator by Digismoothie'}/>

                            <TextContent>By offering free gifts on order or BOGOs (buy X get Y), <TextBold>Gift Box – Free Gift Motivator</TextBold> is the perfect solution for boosting your AOV and increasing average spending per customer. Moreover, this app script loads asynchronously via global CDN, meaning there’s no impact on page load times and your customer experience.
                            </TextContent>
                            <TextContent>Gift Box – Free Gift Motivator costs $29.99/month to $199.99/month, which may be a little bit expensive for some small businesses.</TextContent>
                            <TextBold>3. Vitals: All-in-One Marketing by Vitals</TextBold>
                            <Image src={IMG_VITALS} layout={'responsive'} priority={true} alt={'Vitals: All-in-One Marketing by Vitals'}/>
                            <TextContent>This app allows merchants to import unlimited reviews with photos, request reviews after order delivery, and highlight featured reviews to boost conversion. The highlight feature that we're focusing on is that it can increase average order value by offering product bundles, volume discounts, goals, and buy one get one (BOGO) deals. Moreover, merchants installing this app can record and replay visitor actions as they click, scroll, type, or move across store pages. At $29.99/month, Vitals: All-in-one Marketing is a suitable app for Shopify merchants who want more than just the free gift offering function.
                            </TextContent>
                        </section>

                        {/*    Section end*/}
                        <section id={'end'} >
                            <TextTitle>CONCLUSION</TextTitle>
                            <TextContent>Brands that make an effort to connect with their customers are more likely to have satisfied customers. A gift with p
                                urchase is a great way to attract new clients and strengthen your relationships with current ones. Customers receive a greater re
                                turn on their investment, so merchants get more sales and improved brand recognition.
                            </TextContent>
                            <TextContent>
                                Implementing a GWP promotion has a lot of advantages. However, it works best when you take your company's goals into consideration. According to research, GWP campaigns dramatically boost repeated sales of a particular product and lower the rate
                                of product returns. Even though the concept behind a GWP campaign may seem simple, there are numerous things to take into account, such as the kind of gift and your advertising strategy.
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
                            <CardArticle title={'How to protect your images, text, content'} linkHref={'/Blog/posts/protect-content'}/>
                        </ItemArticle>
                        <ItemArticle>
                            <CardArticle title={'Top the 9 best Shopify content protector apps\n'} linkHref={'/Blog/posts/top-content-protection'}/>
                        </ItemArticle>
                        <ItemArticle>
                            <CardArticle title={'How to boost sales on your Shopify store.'} linkHref={'/Blog/posts/boost-sale-shopify'}/>
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
const TextRed = styled(TextBold)`
  color: #c92222;
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
export default BenefitsWithPurchase