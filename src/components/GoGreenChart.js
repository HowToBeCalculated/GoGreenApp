import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}


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


export default function Chart() {
  const theme = useTheme();

  return (
    <>
      <ResponsiveContainer>
        <LineChart data={data}
          margin={{
            top: 70,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="name"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="top" align="center" />
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Total Carbon (kg)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="actual"
            stroke={theme.palette.primary.main}
            dot={false}
          />
          <Line type="monotone" dataKey="target" stroke="#8884d8" />
          <Line type="monotone" dataKey="actual" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
