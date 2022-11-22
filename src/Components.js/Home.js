import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title="Model y"
            discription="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnTxt="Custom order"
            rightBtnTxt="Existing inventory"
        />
        <Section 
            title="Lowest Cost Solar Panels in America"
            discription="Money-back gurantee"
            backgroundImg="solar-panel.jpg"
            leftBtnTxt="Order now"
            rightBtnTxt="Learn more"
        />
        <Section 
            title="Accessories"
            discription=""
            backgroundImg="accessories.jpg"
            leftBtnTxt="Shop now" 
        />

    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;

`