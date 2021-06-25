import React from 'react';
import { Drawer } from '@material-ui/core';


const SideBar = ({open, anchor, onClose, }) => {


  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={() => onClose(anchor, false)}
    >


    </Drawer>
  );

};


export default SideBar;