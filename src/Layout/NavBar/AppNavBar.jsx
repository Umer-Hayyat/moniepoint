// src/components/NavBar.jsx

import React from 'react';
import { AppBar, Toolbar, Typography, MenuItem, Button, createTheme, ThemeProvider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './AppNavBar.scss';

const theme = createTheme({
  typography: {
    fontSize: 10, // Set the font size to 10px
  },
});

const AppNavBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar className="top-bar" position="static">
        <div className="logo-container">
          <Typography variant="h5" component="div" className="logo">
            Logo
          </Typography>
        </div>
        <div className="toobar-container">
          <Toolbar className="toolbar">
            <MenuItem
              className="dashboard-item"
              style={{
                backgroundColor: '#6936f5',
                color: 'white',
                fontSize: '14px', // Increase the font size
                padding: '12px 20px', // Increase the padding
              }}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              style={{
                fontSize: '14px', // Increase the font size
                padding: '12px 20px', // Increase the padding
              }}
            >
              Payments
            </MenuItem>
            <MenuItem
              style={{
                fontSize: '14px', // Increase the font size
                padding: '12px 20px', // Increase the padding
              }}
            >
              Transaction
            </MenuItem>
            <MenuItem
              style={{
                fontSize: '14px', // Increase the font size
                padding: '12px 20px', // Increase the padding
              }}
            >
              Cards
            </MenuItem>
            <MenuItem
              style={{
                fontSize: '14px', // Increase the font size
                padding: '12px 20px', // Increase the padding
              }}
            >
              Invoices
            </MenuItem>
            <MenuItem
              style={{
                fontSize: '14px', // Increase the font size
                padding: '12px 20px', // Increase the padding
              }}
            >
              Insights
            </MenuItem>
          </Toolbar>
        </div>
        <div className="button-container">

          <Button variant="text" className="transparent-button">
            <SearchIcon />
          </Button>
          <Button variant="text" className="transparent-button">
            <NotificationsIcon />
          </Button>

          <Button variant="text" className="transparent-button">
            <SettingsIcon />
          </Button>
          <Button variant="text" className="transparent-button">
            <AccountCircleIcon />
          </Button>
        </div>
      </AppBar>
    </ThemeProvider>
  );
};

export default AppNavBar;
