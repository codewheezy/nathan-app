import React from 'react';
import styled from 'styled-components';
import NnatanText from '../../../components/NnatanText';


const Wrap = styled.View`
    flex: 1;
`
const Scroll = styled.ScrollView``
const Content = styled.View`
    flex: 1;
`

const About = ({ }) => {
    return(
        <Wrap>
            <Scroll
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <Content>
                    <NnatanText black xxlarge light200>About Page</NnatanText>
                </Content>
            </Scroll>
        </Wrap>
    )
}

export default About;
