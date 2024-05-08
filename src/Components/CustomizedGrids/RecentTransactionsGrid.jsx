import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';

import { AccountCircle } from '@mui/icons-material';

const data = [
  { name: 'Stripe', description: 'Wed, 16 Feb, 18:11', amount: '+$1,223', decimals: '00', buttonText: 'Business' },
  { name: 'Drobox', description: 'Tue, 15 Feb, 14:24', amount: '-$200', decimals: '00', buttonText: 'Equipment' },
  { name: 'Zendesk', description: 'Wed, 16 Feb, 18:11', amount: '-$1,223', decimals: '00', buttonText: 'Marketing' },
  { name: 'Spotify', description: 'Tue, 15 Feb, 14:24', amount: '-$19', decimals: '00', buttonText: 'Equipment' },
];

const RecentTransactionsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>        
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              sx={{
                '&:hover': {
                  backgroundColor: 'lightgrey',
                  '& > *:nth-child(1), & > *:nth-child(2)': {
                    transform: 'translateX(8px)', // Slide the first and second cells towards the right
                    transition: 'transform 0.3s ease-in-out',
                  },
                },
                borderBottom: '1px solid grey',
                boxShadow: 'none',
                height: '40px', // Reduce the row height
                '& .MuiTableCell-root': {
                  padding: '4px 8px', // Reduce the cell padding
                },
              }}
            >
              <TableCell>
                <AccountCircle style={{ fontSize: 70, margin: 0 }} /> {/* Reduce the icon size */}
              </TableCell>
              <TableCell>
                <Typography sx={{
                  fontSize: '22px', // Reduce the font size
                  marginLeft: '8px', // Add some left margin to the name
                }}>
                  {item.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '18px', // Reduce the font size
                    marginLeft: '8px', // Add some left margin to the description
                  }}
                >{item.description}</Typography>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    border: 'none',
                    boxShadow: 'none',
                    padding: '2px 6px', 
                    fontSize: '18px',
                    backgroundColor: '#F6F8FB', 
                    color: 'black', 
                    '&:hover': {
                      backgroundColor: '#F6F8FB', 
                    },
                  }}
                >
                  {item.buttonText}
                </Button>
              </TableCell>
              <TableCell>
                <Typography variant="body1" sx={{ fontSize: '18px' }}>{item.amount}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecentTransactionsTable;
