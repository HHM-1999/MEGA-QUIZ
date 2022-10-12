import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SalesChart = () => {
    const quiz = useLoaderData()
    const { data } = quiz;
    return (
        <div className='m-10'>
            <h3 className='m-10 text-lg font-bold text-center'>Total Question Chart:</h3>
            <div className="line-dashboard">
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart width={1200} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="total" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SalesChart;

