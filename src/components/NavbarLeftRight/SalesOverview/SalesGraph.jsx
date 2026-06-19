import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import SalesChart from './SalesOverview/SalesChart';

const salesData=[
  {day:"Mon",sales:2000},
  {day:"Tue",sales:2200},
  {day:"Wed",sales:1800},
  {day:"Thu",sales:3000},
  {day:"Fri",sales:2500},
  {day:"Sat",sales:4000},
  {day:"Sun",sales:3500},
]

const SalesGraph = () => {
  return (
    <>
        <div className='LeftDivs'>
                        <h2>Sales Overview</h2>
        
                        <ResponsiveContainer width="70%" height={500}>
                          <LineChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day"/>
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="sales"
                                stroke='#4f46e5'
                                strokeWidth={3}
                              />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
    </>
  )
}

export default SalesGraph
