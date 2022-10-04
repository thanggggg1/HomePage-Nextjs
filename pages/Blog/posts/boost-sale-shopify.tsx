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
    IC_USER, IMG_CALL_TO_ACTION,
    IMG_CLICKUP_EXAMPLE,
    IMG_COZY_ANTITHIEF,
    IMG_CRUCIAL_ANTITHIEF,
    IMG_DAKAAS,
    IMG_DEFENDIFY, IMG_EMAIL_MARKETING,
    IMG_MOBILE_OPTIMIZED,
    IMG_PROTECT_CONTENT_01,
    IMG_PROTECTION, IMG_REACH_BLOG,
    IMG_ROAR_THEME,
    IMG_STORE_BUNDLE, IMG_TITLE_BOOST_SALE,
    IMG_UPCART_FREEGIFT,
    IMG_VAULT_ANTITHIEF,
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

const data=[
    'How important are increasing sales to your business?',
    'Possible reasons why you have traffic but no sales',
    '5 tips for how to increase sales'

]
const title ='HOW TO BOOST SALES ON YOUR SHOPIFY STORE'

export const BoostSale:NextPage = memo(function BoostSale(){
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
                <title>HOW TO BOOST SALES ON YOUR SHOPIFY STORE</title>
                <meta name="boost-sale" content="Effective sales-increasing plans for every Shopify store to operate at its full potential.
" />
            </Head>
            <NavBar/>
            <Container>
                <HeaderSection>
                    <div style={{width: '100%',borderRadius:6}}>
                        <Image src={IMG_TITLE_BOOST_SALE} layout={'responsive'} priority alt={'HOW TO BOOST SALES ON YOUR SHOPIFY STORE'}/>
                    </div>
                </HeaderSection>
                <ContentContainer>
                    <LeftContainer width={width}>
                        <TextHeading>HOW TO BOOST SALES ON YOUR SHOPIFY STORE</TextHeading>
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
                        <TextContent>Effective sales-increasing plans must be in place for every company to operate at its full potential. It's crucial to comprehend the methods you may use to boost sales for your business and create strong, long-lasting interactions with clients. This article explains the importance of increasing sales, how to do it, and offers practical advice for growing sales in any size organization.
                        </TextContent>

                        {/*    Section 1*/}
                        <section id={'01'}>
                            <TextTitle>I. How important are increasing sales to your business?
                            </TextTitle>
                            <TextContent>The primary source of income for a business is sales, as is common knowledge. Without that, a business will experience a significant risk.
                                It is a reality that everyone agrees it is crucial for a business to survive in the market. Therefore, every business must consider optimizing sales as a central goal.</TextContent>
                        </section>
                        {/*    Section 2*/}
                        <section id={'02'} >
                            <TextTitle id={'02'}>II. Possible reasons why you have traffic but no sales
                            </TextTitle>
                            <TextContent>Many come to your web pages and see the products there, but why isn’t it converting into sales? Unfortunately, even the smallest element might cause the website interaction to stop working properly.
                                Because of this, it's important to focus on every specific aspect of the resource. So we want to make sure that your website does not make these mistakes below:
                            </TextContent>
                            <TextBold>Poor store navigation</TextBold>
                            <br/>
                            <br/>
                            <Image src={IMG_WEB_NAVIGATION} layout={'responsive'} priority={true} alt={'Possible reasons why you have traffic but no sales'}/>
                            <TextContent>A person searches for a menu as soon as they arrive on a website. Hubspot estimates that 38% of visitors to an online business will give up interacting if the
                                navigation is confusing. So if you want your visitors to stay longer on your website, you have to make its navigation as easy as possible for them to discover what they're looking for
                            </TextContent>
                            <TextContent>Your Shopify store menu should stand out, have all the essential elements, and be the first thing a visitor sees.
                                It may be at the top or in the footer, but remember that all your major product categories must be contained so that your visitors can easily find them.
                            </TextContent>
                            <TextBold>Lack of trust</TextBold>
                            <TextContent>Consumers are now becoming smarter when they are aware of fraud and seek reasons to believe in the companies they use. Before a person makes a purchase on something, they generally want to know the advantages and disadvantages of that product by reading reviews or looking at the pictures without editing. They’re now definitely reluctant to buy a product that has not had any testimonials or social proof.
                            </TextContent>
                            <TextContent>Adding your contact information is also a factor that increases customers' trust in your webpage. Although they just shop online, your address and phone number are provided, making them feel your business is credible to make a purchase decision.
                            </TextContent>
                            <TextContent>Moreover, your sites need to use common and prestigious payment gateways. Many people give up buying a product since the payment website uses strange payment gateways and lacks a logo.
                            </TextContent>
                            <TextBold>Inadequate content
                            </TextBold>
                            <TextContent>Effective content can attract customers and create leads for every business. Giving useful content, providing visitors with your products' descriptions, prices, current discount policy, and so on, is the most effective way to grab visitors' attention and then build customer relationships. So your content should be persuadable enough to convert traffic into sales.
                            </TextContent>
                            <TextContent>Every company has its own brand story and precious messages. Telling your brand’s story and conveying your messages to your visitors may raise their awareness and belief in your company. Content is an effective method to do this. From that, the conversion rate of your web pages will improve gradually.
                            </TextContent>
                            <TextBold>Your store is not mobile-optimized</TextBold>
                            <Image src={IMG_MOBILE_OPTIMIZED} layout={'responsive'} priority={true} alt={'Possible reasons why you have traffic but no sales'}/>

                            <TextContent>Mobile phones, with their convenience, have now become the dominant device in the world. According to Global Profiles in March 2022, at least once a day, 45% of customers worldwide use their phones for internet shopping. So if your store is not mobile-optimized, you are obviously missing a significant number of customers.
                            </TextContent>

                        </section>
                        {/*Section 03*/}
                        <section id={'03'}>
                            <TextTitle>III. 5 tips for how to increase sales</TextTitle>
                            <TextRed>1. Gift-with-purchase</TextRed>
                            <TextContent>Promotion is a common sales strategy used to motivate customers by giving customers a reward when they make a purchase from your company.</TextContent>
                            <TextContent>Brands increase their value when they provide a gift with a purchase that is more valuable than the specific product itself. Additionally, you will give clients the impression that their purchases are more worthwhile. They are then more likely to convert as a result.</TextContent>
                            <TextContent>By including a gift with a purchase, you give your consumers the chance to check out a brand-new item that they would not normally buy. Your consumers are exposed to more goods from your brand as a result, and once they discover a product they enjoy, they are more likely to return for more.</TextContent>
                            <TextContent>An excellent way to upsell your product offerings is through a GWP promotion. This tactic works if you only give the present to customers who have spent over a particular amount. For instance, you offer a GWP promotion for purchases totaling $50 or more. They are more likely to make another purchase if they have previously spent $40 in order to meet the requirement and qualify for a free item.</TextContent>
                            <Image src={IMG_UPCART_FREEGIFT} layout={'responsive'} priority={true} alt={'Gift-with-purchase'}/>
                            <TextContent>Free Gift by Sortecom will help you create unlimited offers for customers.</TextContent>
                            <TextBold>2. Reach out to blog</TextBold>
                            <Image src={IMG_REACH_BLOG} layout={'responsive'} priority={true} alt={'5 tips for how to increase sales'}/>

                            <TextContent>Only the customers who already know you type your name directly into their browser. They are aware of you and have you on their radar, which doesn't help you increase the amount of traffic. You may buy traffic by putting up a lot of costly sponsored advertisements. However, the moment you run out of money, the traffic stops as well. Therefore, writing blogs is a cheap and efficient strategy to get more visitors to your website. You may have an increased chance of appearing on the search engine
                                results page (SERP) and attracting visitors to your website through organic search every time you write and publish a blog article.</TextContent>
                            <TextContent>You can attract your target audience's attention to your blog. Only customers that are ready to buy will likely be interested in your service landing page. While a blog will provide you with the chance to connect with individuals at different stages in their customer journey to build relationships with them.</TextContent>
                            <TextContent>By blogging about your area of expertise, you may create trust among your readers. If you write useful content, your audience will find it valuable. As a result, this activity will help you establish yourself as a thought leader or industry expert. Thanks to reaching out to the blog, you can gain their trust and convert them into loyal customers.
                            </TextContent>
                            <TextBold>3. Start email marketing & remarketing.
                            </TextBold>
                            <TextContent>Due to its low cost and widespread use, email marketing is advantageous to all kinds of businesses, including startups, small enterprises, multinationals, and B2B and B2C relationships. Email is essential for everyday life.
                            </TextContent>
                            <Image src={IMG_EMAIL_MARKETING} layout={'responsive'} priority={true} alt={'Start email marketing & remarketing.'}/>

                            <TextContent>Regular communication with your audience can help them become more aware of the brand and what it stands for? Since you'll continually be in their inbox, your subscribers will get familiar with your goods, services, and business as a whole. When you publish useful information about your business or sector, you may develop a reputation as an amazing resource and win the trust of potential customers.
                            </TextContent>
                            <TextContent>Furthermore, you can also utilize email to remarket your products. You send an email to customers that experienced your services or goods to remind them about your company. These advertisements keep your brand top-of-mind among qualified users and encourage them to return to your site to learn more since the audiences who view your remarketing advertising have previously expressed interest in the information and material on your website.
                            </TextContent>
                            <TextBold>4. Improve customer service.
                            </TextBold>
                            <TextContent>It is obvious that customers who are pleased with the service they received and who have received individualized attention that is suited to their demands have more purchasing possibilities than those who feel neglected or have had a negative experience. Additionally, that buyer will be more inclined to test or purchase different goods or services (cross-selling).
                            </TextContent>
                            <TextContent>To reiterate, the role of the prosumer is growing significantly. Prosumers are strong voices and spokespersons; they are the ultimate appeal to authority, allowing you to reach other customers who will choose your services or goods. This is important given our previous studies that consumers prefer to believe other consumers' experiences more than the image the business presents.
                            </TextContent>
                            <TextContent>Moreover, is there a more effective marketing strategy than having satisfied customers? They will help spread the word about how great your services are to new clients because of their influence and social media presence. A business or organization that provides poor service will be obliged to "cover up" its reputation by increasing marketing spending and bringing in new clients.
                            </TextContent>
                            <TextContent>Improving customer service can not only help your business build customer loyalty but also attract more and more people to your Shopify store.
                            </TextContent>
                            <TextBold>Call to action
                            </TextBold>
                            <TextContent>A call to action (CTA) is a piece of content that encourages potential consumers to do an action that fulfills the purpose of grabbing the customers' attention and making a sale. A call to action (CTA) in web design can be a banner, button, or other visual that urges users to click it. </TextContent>
                            <Image src={IMG_CALL_TO_ACTION} layout={'responsive'} priority={true} alt={'Improve customer service.'}/>
                            <TextContent>You may have highlighted the following examples of some typical call-to-action buttons:</TextContent>
                            <TextContent>⦁	Call Now</TextContent>
                            <TextContent>⦁	Subscribe</TextContent>
                            <TextContent>⦁	Buy Now</TextContent>
                            <TextContent>⦁	Learn More</TextContent>
                            <TextContent>⦁	Downloaded</TextContent>
                            <TextContent>⦁	Click Here</TextContent>
                            <TextContent>Sales funnels and Calls to action go hand in hand. The transitions between the stages of the buyer's journey are provided by the calls to action. They direct the user on what to do next and urge them to act right away. You must encourage this action with a strategically positioned CTA in the sales funnel if you want your user to visit your blog, give you their contact information, download an e-book, or subscribe to an email list.</TextContent>
                            <TextContent>The easier you make it to take the next step, the more people will do so. Your CTA improves user experience. You provide the solution in an eye-catching, vibrantly colored button to direct your audience to the next step of the purchasing process rather than leaving them to guess and wonder.</TextContent>
                        </section>

                        {/*    Section end*/}
                        <section id={'end'} >
                            <TextTitle>CONCLUSION</TextTitle>
                            <TextContent>Utilizing just one of the above suggestions may not thoroughly help you create a 7-figure Shopify business, but using as many tips as you can so that they can assist you in optimizing your Shopify store’s sales.
                            </TextContent>
                            <TextContent>
                                This may be your online marketing plan. You should create design strategies, advertising plans, and many more in the same way. Moreover,
                                "don't put all your eggs in one basket" but use all of your available strategies to generate leads and turn them into paying clients.
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
export default BoostSale