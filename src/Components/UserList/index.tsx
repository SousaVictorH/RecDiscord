import React from 'react';

import {
    Container,
    Role,
    User,
    Avatar
} from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow : React.FC<UserProps> = ({
    nickname,
    isBot
}) => {
    return(
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    );
};

const UserList : React.FC = () => {
    return(
        <Container>
            <Role>Disponível -1</Role>
            <UserRow nickname="User A"/>
            <UserRow nickname="User B"/>
            <UserRow nickname="User C"/>
            <UserRow nickname="User D"/>
            <UserRow nickname="User E"/>
            <UserRow nickname="User F"/>

            <Role>Offline -18</Role>
            <UserRow nickname="BOT 1" isBot />
            <UserRow nickname="BOT 2" isBot />
            <UserRow nickname="BOT 3" isBot />
            <UserRow nickname="BOT 4" isBot />


            <Role>Disponível -1</Role>
            <UserRow nickname="User Z1"/>
            <UserRow nickname="User Z2"/>
            <UserRow nickname="User Z3"/>
            <UserRow nickname="User Z4"/>
            <UserRow nickname="User Z5"/>
            <UserRow nickname="User Z6"/>
            <UserRow nickname="User Z7"/>
            <UserRow nickname="User Z8"/>
        </Container>
    );
};

export default UserList;
