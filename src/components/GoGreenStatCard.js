import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getValueFromValueOptions } from '@mui/x-data-grid/components/panel/filterPanel/filterPanelUtils';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
 

export default function OutlinedCard({stat, value, change}) {
    
    return (
    <>
    <Box sx={{ minWidth: 130 }}>
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
          {stat}
        </Typography>
        <Typography variant="h5" component="div">
          {value}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="secondary">
          {change}{'%'}{(change < 0) ? <TrendingDownIcon style={{fontSize:'10px'}}/> : <TrendingUpIcon style={{fontSize:'10px'}}/>}
        </Typography>
      </CardContent>
      </Card>
      </Box>
      </>
  );

}
