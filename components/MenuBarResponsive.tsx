import {memo} from "react";
import styled from "styled-components";

export const MenuBarResponsive = memo(function MenuResponsive(){
    return (
        <Container className = "click-to-show">
            <List>
                <Item>
                    <TextItem>About us</TextItem>
                </Item>
                <Item>
                    <TextItem>Products</TextItem>
                </Item>
                <Item>
                    <TextItem>Blog</TextItem>
                </Item>
                <Item>
                    <TextItem>Contact</TextItem>
                </Item>
            </List>
        </Container>
    )
})

const Container = styled.div`
  background-color: white;
  width: 100%;
`
const TextItem = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 0.025em;
  color: #1D1B29;
`
const Item = styled.div`
display: flex;
  align-items: center;
`
const  List =styled.div`
display: flex;
  flex-direction: column;

`