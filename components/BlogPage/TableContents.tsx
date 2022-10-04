import {memo, useCallback} from "react";
import styled from "styled-components";
import Link from "next/link";
import {fontScale} from "../../utils/fontScale";

export interface ListContent {
    data :string[]
    title:string
}

export const TableContents = memo(function TableContents(props:ListContent) {
    const {data,title}=props;
    return (
        <Container>
            <TextNormalBold>TABLE OF CONTENTS</TextNormalBold>
            <BackgroundTextDiv>
                <TextNormal>{title}</TextNormal>
            </BackgroundTextDiv>
            {data && data.map((item,index)=>{
                return (
                    <Link href={`#0${index+1}`} passHref key={index}>
                        <BackgroundTextDiv>
                            <TextNormal href={`#0${index+1}`}>{`${index+1}. ${item}`}</TextNormal>
                        </BackgroundTextDiv>
                    </Link>
                )
            })}

        </Container>
    )
})
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`
const TextNormal = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: ${p=>fontScale(15)}px;
  line-height: 22px;
  letter-spacing: 0.025em;
  color: #000000;
  margin: 12px 0;
`
const TextNormalBold = styled(TextNormal)`
  font-size: ${p=>fontScale(12)}px;
  font-weight: 700;
`
const BackgroundTextDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  cursor: pointer;
`
