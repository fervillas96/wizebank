import React from 'react'

import { Backdrop } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'
import { NavBarContainer, Logo, LogoContainer } from './styled'
import AddCategoryModal from '@components/AddCategoryModal'

const iconStyles = () => {
  return {
    greenIcon: {
      color: '#23695D',
    },
  }
}

const NavBar = () => {
  const theme = makeStyles(iconStyles)();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <NavBarContainer>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <AddCategoryModal />
      </Modal>
      <IconButton>
        <MenuOpenIcon className={theme.greenIcon} />
      </IconButton>
      <LogoContainer>
        <Logo src='/favicon.ico' /> WizeBank!
      </LogoContainer>
      <IconButton onClick={handleOpen}>
        <AddIcon className={theme.greenIcon} />
      </IconButton>
    </NavBarContainer>
  );
};

export default NavBar;