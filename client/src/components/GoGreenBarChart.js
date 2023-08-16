import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function GoGreenBarChart({inputData}) {
  const theme = useTheme();
  
  return (
    <>
        <ResponsiveContainer>
        <BarChart
          data={[inputData]}
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

