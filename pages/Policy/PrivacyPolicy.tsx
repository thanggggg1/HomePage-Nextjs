import React, {memo} from "react";
import {NextPage} from "next";
import styled from "styled-components";
import Head from "next/head";
import {NavBar} from "../../components/NavBar";
import {Footer} from "../../components/Footer";

const PrivacyPolicy: NextPage = memo(function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <NavBar/>
            <Container>
                <HeaderSection className={'content_bg_policy'}>
                    <TextHeading>Privacy Policy</TextHeading>
                </HeaderSection>
                <ContentSection>
                    <TextContent>Welcome to SortEcom’s Privacy Policy!</TextContent>
                    <TextContent>This Privacy Policy is about how we collect, use, and share your personal information
                        when you install or use an App provided by SortEcom.
                    </TextContent>
                    <TextContent>When you install an App, we will be able to access certain types of information from
                        your Shopify Store.
                    </TextContent>
                    <TextContent>We do not accept any lawsuit or compensation for using our app that adversely affects
                        your Shopify.
                    </TextContent>
                    <TextContent>We may update this Privacy Policy from time to time to reflect, for example, we may
                        change some permissions and data access rights due to the policy and functionality of the app.
                    </TextContent>
                    <TextContent>If we have essential material changes to this Privacy Policy, we will notify you of
                        those changes by posting the revised policy on this Website and in other ways. By continuing to
                        use our applications or our website or any of our services after these changes are posted, you
                        agree to the revised policy.
                    </TextContent>
                    <TextTitle>Personal information that app collects
                    </TextTitle>
                    <TextContent>When you install the App, we will be able to access your information from your Shopify
                        account, the reason for this is to provide you with our service, to confirm your identity, to
                        contact and to provide customer support and assistance when you contact us.
                    </TextContent>
                    <TextTitle>How do we use your personal information?
                    </TextTitle>
                    <TextContent>We use the personal information collected from you to provide the Service and to
                        operate our app. Additionally, we use personal information to: communicate with you, optimize or
                        improve the Service, notify you about our product’s updates, and handle software bugs or support
                        requests.
                    </TextContent>
                    <TextTitle>How do we share information?
                    </TextTitle>
                    <TextContent>We may also share your Personal Information to comply with applicable laws and
                        regulations, to respond to a subpoena, search warrant or other lawful requests for information
                        we receive, or to otherwise protect our rights.

                        We may use your Personal Information to provide you with targeted advertisements or marketing
                        communications we believe could be of interest to you.

                        You can opt-out of Facebook and Google targeted advertising at facebook.com/settings/?tab=ads
                        and google.com/settings/ads/anonymous.</TextContent>
                    <TextTitle>Use SortEcom’s App by Children
                    </TextTitle>
                    <TextContent>All of sortEcom is not intended for children. If you are under 11, you may use our app
                        under the supervision of your parent or guardian.

                    </TextContent>
                    <TextTitle>Your Rights
                    </TextTitle>
                    <TextContent>You have the right over your personal information, and if you want to access, correct,
                        amend, delete, port or limit the usage of your personal information please contact us through
                        the contact information below.

                        If you are outside the United States, please note that your personal information and other
                        information that we collected may be sent to the United States.

                        By accepting this Privacy Policy, if using our app or allowing us to access any personal
                        information, you agree to the transfer of these to the United States.

                    </TextContent>
                    <TextTitle>Contact information
                    </TextTitle>
                    <TextContent>If you have any questions about this Privacy Policy, or if you would like to list a
                        complaint about how we process your personal data, please contact us by email
                        support.sortecom@techverest.com
                    </TextContent>
                </ContentSection>
            </Container>
            <Footer/>
        </>
    )
})
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const HeaderSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  align-items: center;
`

const TextHeading = styled.div`
  color: #F3F7FF;
  font-size: 64px;
  line-height: 1.2;
  margin-bottom: 20px;
  letter-spacing: -0.9px;
`
const TextTitle = styled.h2`
  font-weight: 500;
  padding-top: 16px;
  padding-bottom: 8px;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
`
const TextContent = styled.p`
  color: #6a7c92;
  font-size: 16px;
  margin: 10px 0;
`

const ContentSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 80px;
  margin-bottom: 80px;
`

export default PrivacyPolicy