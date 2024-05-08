import { BrowserRouter as Router } from 'react-router-dom';
import { Card, Box, Typography, Button, Grid } from '@mui/material';
import './MainPage.scss';
import NavBar from './NavBar/AppNavBar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ArrowUpward } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import GAIN_TODAY_ICON from '../Assets/image.png';

import BusinessAccountCard from '../Components/CustomizedCards/BusinessAccountCard';
import ReserveTaxCard from '../Components/CustomizedCards/ReserveTaxCard';
import RecentTransactionsGrid from '../Components/CustomizedGrids/RecentTransactionsGrid';
import BusinessSavingCard from '../Components/CustomizedCards/BusinessSavingCard';


const MainPage = () => {


  return (
    <div className="main-page">
      <div className="main-page-top-background">
        <NavBar></NavBar>

        <div>
          <Card
            sx={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '16px',
              marginTop: '20px'
            }}
          >
            <Box>
              <Typography variant="body2" style={{ lineHeight: '48px' }}>Total Balance</Typography>
            </Box>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
                <Typography variant="h3"  >$36254</Typography>
                <div style={{ top: '6px', position: 'relative', display: 'flex', gap: '4px' }}>
                  <Typography variant="body1"><img alt="" style={{ marginLeft: '10px', width: '27px' }} src={GAIN_TODAY_ICON} /></Typography>
                  <Typography variant="body1">$328.32 Today, Feb 15</Typography>
                </div>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <Button
                  startIcon={<VisibilityIcon sx={{ width: '16px', height: '16px' }} />}
                  variant="contained"
                  sx={{

                    backgroundColor: 'transparent',
                    color: '#9ba4b9',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                    padding: '6px 10px',
                    // width: '125px',
                    borderRadius: 0,
                    fontSize: '15px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}
                >
                  View Analytics
                </Button>
                <Box
                  sx={{
                    width: '2px',
                    height: '35px',
                    backgroundColor: '#9ba4b9',
                    opacity: 0.34

                  }}
                />

                <Button
                  startIcon={<ArrowUpward sx={{ width: '16px', height: '16px' }} />} // Icon moved to the left
                  variant="contained"
                  sx={{
                    backgroundColor: '#6936F5',
                    color: 'inherit',
                    '&:hover': {
                      backgroundColor: '#6936F5',
                    },
                    padding: '6px 10px',
                    // width: '105px',
                    borderRadius: 0,
                    fontSize: '15px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}
                >
                  Send Money
                </Button>
                <Button
                  startIcon={<AddIcon sx={{ width: '16px', height: '16px' }} />}
                  variant="contained"
                  sx={{
                    backgroundColor: 'transparent',
                    color: 'lightgrey',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                    padding: '6px 10px',
                    // width: '105px',
                    borderRadius: 0,
                    fontSize: '15px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}
                >
                  Add Money
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#14172E',
                    color: 'lightgrey',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                    borderRadius: '50%', // Set border radius to 50% for a circular shape
                    width: '20px', // Set a fixed width to maintain a circular shape
                    height: '20px', // Set a fixed height to maintain a circular shape
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  ...
                </Button>
              </Box>
            </Box>
          </Card>
        </div>
        <div>
          <Card
            sx={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '16px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'left' }}>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}>
                <StarIcon sx={{ mr: 1.2 }} />
                Overview
              </Typography>
              <Typography variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#9ba4b9',
                  top: '3px',
                  position: 'relative',
                  marginLeft: '2px',
                  fontSize: '14px'
                }}>
                Last 30 days
              </Typography>
            </Box>
          </Card>
        </div>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '60px',
            justifyContent: 'center',
            background: 'transparent',
            border: '0px',
            boxShadow: 'none',
            padding: '10px 34px 10px 18px',
          }} >
          <BusinessAccountCard />
          <ReserveTaxCard />
          <BusinessSavingCard />
        </Card>
        <br />
        <br />
        <br />


        <Grid container spacing={6}>
          <Grid item xs={6} style={{ maxWidth: '48.5%', marginLeft: '15px' }}>
            <RecentTransactionsGrid />
          </Grid>
          <Grid item xs={6} style={{ maxWidth: '48.5%' }}>
            <RecentTransactionsGrid />
          </Grid>
        </Grid>


      </div>
    </div >
  );
};

const MainPageWithRouter = () => {
  return (
    <Router>
      <MainPage />
    </Router>
  );
};

export default MainPageWithRouter;
