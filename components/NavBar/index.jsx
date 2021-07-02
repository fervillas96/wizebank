import React from 'react';

import { IconButton } from '@material-ui/core';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';
import { NavBarContainer, Logo, LogoContainer } from './styled';

const iconStyles = () => {
  return {
    greenIcon: {
      color: '#23695D',
    },
  }
}

const NavBar = () => {
  const theme = makeStyles(iconStyles)();

  return (
    <NavBarContainer>
      <IconButton>
        <MenuOpenIcon className={theme.greenIcon}/>
      </IconButton>
      <LogoContainer>
        <Logo src='/favicon.ico'/> WizeBank!
      </LogoContainer>
      <IconButton target="_blank" href="http://www.wizeline.com/">
        <InfoIcon className={theme.greenIcon}/>
      </IconButton>
    </NavBarContainer>
  );
};

export default NavBar;