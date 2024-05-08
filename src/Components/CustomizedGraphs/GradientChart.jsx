import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { axisClasses } from '@mui/x-charts';
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 6490, 5321, 1321];
const xLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
];

const Colorswitch = () => {
    const { top, height, bottom } = useDrawingArea();
    const svgHeight = top + bottom + height;

    return (
        <>
            <defs>
                <linearGradient id="paint0_linear_45_2" x1="300.25" y1="46.9999" x2="300.25" y2={`${svgHeight}px`} gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2F4CDD" stop-opacity="0.4" />
                    <stop offset="1" stop-color="#2F4CDD" stop-opacity="0" />
                </linearGradient>
            </defs>

        </>
    )
}



const RevenueChart = () => {
    return (
        <LineChart
            margin={{ top: 100 }}
            width={470}
            height={350}
            colors={['#2F4CDD', '#B519EC']}
            series={[
                { data: uData,  area: 'true' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
          
            sx={{
                '.css-j6h5qe-MuiAreaElement-root': {
                    fill: 'url(#paint0_linear_45_2)',
                },
                [`& .${axisClasses.left}`]: {
                    display: 'none',
                },

            }}
        >
            <Colorswitch />

        </LineChart>
    )
}



export default RevenueChart