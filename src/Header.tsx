import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

interface HeaderProps {
  onDrawerToggle: () => void;
}

export default function Header(props: HeaderProps) {

  return (
    <React.Fragment>
      <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
        <Tabs value={0} textColor="inherit">
          <Tab label="tab1" />
          <Tab label="tab2" />
          <Tab label="tab3" />
          <Tab label="tab4" />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}