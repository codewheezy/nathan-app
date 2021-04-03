import React from 'react';

//components 
import Block from '../components/Block';

const NnatanIcon = ({ children }) => (
    <Block flex={false} center middle row style={{ width: 45 }}>
       { children }
    </Block>
)

export default NnatanIcon;
