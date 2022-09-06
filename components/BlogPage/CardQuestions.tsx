import {memo} from "react";
import styled from "styled-components";
import Image from "next/image";
import {IC_COMMENT} from "../../assets";
import {fontScale} from "../../utils/fontScale";

export const CardQuestions = memo(function CardQuestions(){
    return (
<Container>
    <IconComment>
        <Image src={IC_COMMENT} width={60} height={60}/>
    </IconComment>
    <TextContent>Questions? Comments? Visit our <TextLink>Help Center</TextLink> for support.
    </TextContent>
</Container>
    )
})
const Container = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  background-color: #18A0FB;
  border-radius: 6px;
  padding: 40px 12px;
  box-shadow: 0px 2px 4px 0px #0000001A;
;
`
const IconComment = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 12px;
  padding: 12px;
  margin-right: 20px;
`
const TextContent = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: ${p=>fontScale(20)}px;
  line-height: 20px;
  letter-spacing: 0.025em;
  color: white;
  margin: 12px 0;
`
const TextLink = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: ${p=>fontScale(20)}px;
  line-height: 20px;
  letter-spacing: 0.025em;
  color: white;
  margin: 12px 0;
  text-decoration: underline;
`