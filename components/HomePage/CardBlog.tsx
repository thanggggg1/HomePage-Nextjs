import React, {memo} from "react";
import styled from "styled-components";
import Image from "next/image";
import {IMG_BLOG_EXAMPLE} from "../../assets";
import {ButtonNavBar, TextButtonWhite} from "../NavBar";
import {fontScale} from "../../utils/fontScale";
import UseWindowSize from "../../utils/useWindowSize";
import Link from "next/link";

interface CardBlogHomePageProps {
    title:string;
    subTitle:string;
    linkHref:string;
    isProtect:boolean;
    imageUri:string;
}

export const CardBlogHomePage = memo(function CardBlogHomePage(props:CardBlogHomePageProps) {
    const {width}=UseWindowSize();
    const {title,subTitle,linkHref,isProtect,imageUri}=props;
    return (
        <Container width={width}>
            <LeftSection width={width}>
                <TextHeading>{title}</TextHeading>
                <br/>
                <TextNormal>{subTitle}</TextNormal>
                {isProtect ? <ListBullets>
                    <ItemList>Work with all themes</ItemList>
                    <ItemList>Protect Text & Images</ItemList>
                    <ItemList>Disable Inspect Elements/Developer&apos;s Tools (F12)</ItemList>
                </ListBullets> : <ListBullets>
                    <ItemList>Add brand recognition</ItemList>
                    <ItemList>Increasing conversion rate</ItemList>
                    <ItemList>Build customer loyalty and encourage repeat purchases.</ItemList>
                </ListBullets>}
                <ButtonItem width={width}>
                    {linkHref && <Link href={linkHref}>
                        <ButtonNavBar>
                            <TextButtonWhite>Read full story</TextButtonWhite>
                        </ButtonNavBar>
                    </Link>}
                </ButtonItem>
            </LeftSection>
            <RightSection width={width}>
                {imageUri && <Image src={imageUri}/>}
            </RightSection>
        </Container>
    )
})
const Container = styled.div<{width:number}>`
  display: flex;
  flex-direction: ${p=>p.width > 1024 ? 'row' : 'column'};
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 10%;
  margin-top: 20px;
  border-radius: 6px;
  width: 100%;
`
const TextHeading = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: ${p=> fontScale(28)}px;
  line-height: 38px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const TextNormal = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: ${p=> fontScale(16)}px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: rgba(29, 27, 41, 0.5);
`
const ListBullets = styled.ul`
  list-style-type: disc;
`
const ItemList = styled.li`
  font-style: normal;
  font-weight: 600;
  font-size: ${p=> fontScale(16)}px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: rgba(29, 27, 41, 0.5);
`
const LeftSection = styled.div<{width:number}>`
  display: flex;
  width: ${p=>p.width > 1024 ? '49%' : '100%'};
  flex-direction: column;
  justify-content: center;
`
const RightSection = styled.div<{width:number}>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: ${p=>p.width > 1024 ? '49%' : '100%'}
`
const ButtonItem = styled.div<{width:number}>`
  display: flex;
  align-items: center;
  justify-content: ${p=>p.width > 1024 ? 'flex-start' : 'center'};
`