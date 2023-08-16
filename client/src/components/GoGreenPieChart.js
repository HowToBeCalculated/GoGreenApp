import React, { PureComponent }  from 'react';
import {Paper, Typography} from '@mui/material';
import {ResponsiveContainer, Legend, Cell, Tooltip, PieChart, Pie} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
//dummy data for now
const data = [
    {
      "name": "Transport",
      "value": 2400
    },
    {
      "name": "Household",
      "value": 4567
    },
    {
      "name": "Food",
      "value": 1398
    },
    {
      "name": "Peronsal Care",
      "value": 9800
    }
  ];

export default function GoGreenPieChart({breakdown}) {
  return (
    <div>
        <Paper sx={{p: 3, display: 'flex', flexDirection: 'column', height: 250, width: 700, ml: 15}}>
        <Typography variant='h9' sx={{fontFamily : "Poppins", ml: 2}}>Breakdown</Typography>
        <ResponsiveContainer >
        <PieChart width={400} height={150}>
        <Pie data={breakdown} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#82ca9d" paddingAngle={5} >
        {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          </Pie>
        <Legend  layout="vertical" verticalAlign="middle" align="left"/>
        <Tooltip />
        </PieChart>
        </ResponsiveContainer>
        </Paper>
    </div>
  );
}
