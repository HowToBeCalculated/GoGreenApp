import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// 21.25 is avg per month since 0.7/day and 255kg per year
const data = [
  {
    "name": "January",
    "actual": 30,
    "target": 25,
    "avg": 22.25
  },
  {
    "name": "Feburary",
    "actual": 28,
    "target": 24,
    "avg": 22.25
  },
  {
    "name": "March",
    "actual": 25,
    "target": 22,
    "avg": 22.25
  },
  {
    "name": "April",
    "actual": 30,
    "target": 19,
    "avg": 22.25
  },
  {
    "name": "May",
    "actual": 24,
    "target": 18,
    "avg": 22.25
  },
  {
    "name": "June",
    "actual": 20,
    "target": 22,
    "avg": 22.25
  },
  {
    "name": "July",
    "actual": 23,
    "target": 19,
    "avg": 22.25
  }
]


export default function GoGreenBarChart() {
  const theme = useTheme();
  
  return (
    <>
        <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="actual" fill="#8884d8" />
          <Bar dataKey="target" fill="#82ca9d" />
        </BarChart>
    </ResponsiveContainer>
    </>
  );

}

