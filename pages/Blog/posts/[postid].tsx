import React,{memo} from "react";
import {NavBar} from "../../../components/NavBar";
import styled from "styled-components";
import {NextPage} from "next";
import Image from 'next/image'
import {IMG_CARD_PROBLEM} from "../../../assets";

const PostBlog:NextPage = memo(function PostBlog(){
    return (
        <>
            <NavBar/>
            <Container>
                <ContentContainer>
                    <Image src={IMG_CARD_PROBLEM} layout={'resPO
                        /**/
                </ContentContainer>
            </Container>
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
  align-items: center;
`







export default PostBlog;