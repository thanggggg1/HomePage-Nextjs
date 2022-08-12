import React, {memo} from "react";
import styled from "styled-components";

export const ItemGradient = memo(function ItemGradient() {
    return (
        <Container>
            <Text>Why SortEcom?</Text>
        </Container>
    )
})
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(325.97deg, #004AF7 -8.5%, #00D0FF 66.04%);
  padding:60px 80px;
  border-radius: 6px;
`
const Text = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.025em;
  color: #FFFFFF;
`