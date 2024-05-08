import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Container } from '@mui/material';
import USER_AVATAR from '../../Assets/user-avatar.png';
import GAIN_TODAY_ICON_GREEN from '../../Assets/arrow_tr_green.png';
import LightningBoltIcon from '@mui/icons-material/ThunderstormOutlined';
import { ArrowBack } from '@mui/icons-material';
import GradientChart from '../CustomizedGraphs/GradientChart';



const BusinessAccountCard = () => {
  const [showInput, setShowInput] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [expandWidth, setExpandWidth] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
    setTimeout(() => {
      setShowInput(true)
    }, 0);

  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTimeout(() => {
      setShowInput(false)
    }, 0);
  };

  const handleExpandWidth = () => {
    setExpandWidth(true);
  };

  const handleCollapseWidth = () => {
    setExpandWidth(false);
  };

  return (
    <Card
      sx={{
        backgroundColor: 'white',
        borderRadius: 0,
        width: expandWidth ? '80%' : '29.5%',
        alignItems: 'flex-start',
        padding: '19px',
        transition: 'width 0.3s ease-in-out',
        overflow: 'hidden',
      }}
    >
      <CardContent
        sx={{
          height: '90%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        {/* First Row */}

        <div
          onClick={handleCollapseWidth}

          style={{
            pr: 1,
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            marginBottom: '18px',
            position: 'relative',
            left: '0px',
            height: '90%'
          }}>
          <img alt="" src={USER_AVATAR} width="50px" />
          <div style={{
            marginLeft: expandWidth ? 'calc(49.2%)' : 'calc(121.5%)',
            position: 'absolute',
            top: '-130px',
            backgroundColor: 'transparent'
          }}>

            <GradientChart />
          </div>
          <Button
            style={{
              marginLeft: expandWidth ? 'calc(101.5%)' : 'calc(121.5%)',
              position: 'absolute',
              top: '-34px',
              height: '247px',
              background: '#F6F8FC',
              width: '20px',
              minWidth: '20px',
              maxWidth: '20px',
            }} >

            <ArrowBack />
          </Button>
        </div>
        {/* Second Row */}
        <Typography
          variant="overline"
          color="text.secondary"
          align="left"
          gutterBottom
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            gap: '2px',
            fontWeight: 'bold',
            fontSize: '16px',
            position: 'sticky'
          }}
        >
          Business Account
          <Typography sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            fontWeight: 'bold',
          }}>
            <img alt="" src={GAIN_TODAY_ICON_GREEN} style={{ marginLeft: '8px', width: '26px' }} />
            12.3%</Typography>
        </Typography>

        {/* Third Row */}
        <div
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}

          style={{
            overflow: 'hidden',
            position: 'sticky',
            width: '500px',

          }}
        >

          <Typography
            variant="h5"
            align="left"
            visibility={showInput ? 'hidden' : 'visible'}
            style={{
              transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
              transform: hovered ? 'translateY(-60px)' : 'translateY(0)',
              // marginBottom: '-5px'
            }}
          >

            <span style={{ fontSize: '40px' }}>$33,842</span> <span style={{ fontSize: '18px', color: 'grey' }}>.00</span>
          </Typography>

          <Container
            onMouseOut={handleMouseLeave}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'absolute',
              top: '0px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: '0px',
              // width: expandWidth ? '59%' : '100%',
              gap: '10px',
              transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
              transform: hovered ? 'translateY(0px)' : 'translateY(55px)',
              color: 'black',
              height: '50px'
            }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{
                width: '70%',
                padding: '2px',
                backgroundColor: '#F6F8FC',
                color: 'black',
                height: '100%'
              }}
            >
              Enter new value
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: '#6936F5',
                width: '10%',
                padding: '2px',
                height: ' 100%'
              }}
              onClick={handleExpandWidth}
            >
              <LightningBoltIcon />

            </Button>
          </Container>



        </div>


      </CardContent>
    </Card >
  );
};

export default BusinessAccountCard;