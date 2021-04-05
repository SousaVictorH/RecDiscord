import React, { useEffect, useRef } from 'react';

import {
    Container,
    Messages,
    InputWrapper,
    Input,
    InputIcon
} from './styles';

import ChannelMessage, { Mention } from '../ChannelMessages';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return(
        <Container>
            <Messages ref={messagesRef}>
                {
                    Array.from(Array(15).keys()).map((n) => (
                        <ChannelMessage 
                            key={n}
                            author="User A"
                            date="21/06/2020"
                            content="Olá, estou spamando!"
                        />
                    ))
                }

                <ChannelMessage 
                    author="User B"
                    date="21/06/2020"
                    content={
                        <>
                            pare de espamar, pfv?
                        </>
                    }
                />

                <ChannelMessage 
                    author="BOT 1"
                    date="21/06/2020"
                    content={
                        <>
                            <Mention>
                                @Vh
                            </Mention>
                        </>
                    }
                    isBot
                    hasMention
                />
            </Messages>
            
            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;