import React from 'react';
import Link from 'next/link';

import { IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonsContainer } from './styled';

const iconStyles = () => {
  return {
    greenIcon: {
      color: '#23695D',
    },
  }
}



const NavigationButtons = () => {
  const theme = makeStyles(iconStyles)();

  return (
    <ButtonsContainer>
      <Link href="/bankAccount" passHref>
        <IconButton>
          <AccountBalanceIcon className={theme.greenIcon}/>
        </IconButton>
      </Link>
      <Link href="/"  passHref>
        <IconButton>
          <HomeIcon className={theme.greenIcon}/>
        </IconButton>
      </Link>
      <Link href="/settings" passHref>
        <IconButton>
          <SettingsIcon className={theme.greenIcon}/>
        </IconButton>
      </Link>
    </ButtonsContainer>
  );
}

export default NavigationButtons;