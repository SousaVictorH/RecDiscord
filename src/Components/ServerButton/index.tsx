import React from 'react';

import { Button } from './styles';

import Logo from '../../Assets/Logo.svg';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
};

const ServerButton: React.FC <Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
    return(
        <Button
            className={selected ? 'active' : ''}
            mentions={mentions}
            hasNotifications={hasNotifications}
            isHome={isHome}
        >
            {isHome && <img src={Logo} alt="Rocketseat" />}
        </Button>
    );
};

export default ServerButton;
