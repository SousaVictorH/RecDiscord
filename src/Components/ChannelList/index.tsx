import React from 'react';

import ChannelButton from '../ChannelButton';

import {
    Container,
    Category,
    AddCategoryIcon,
} from './styles';

const ChannelList
: React.FC = () => {
    return(
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton selected={true} channelName="chat-livre"/>
            <ChannelButton channelName="trabalho"/>
            <ChannelButton channelName="lol"/>
            <ChannelButton channelName="paladins"/>
            <ChannelButton channelName="smite"/>
        </Container>
    );
};

export default ChannelList;