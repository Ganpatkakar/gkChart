import React, { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {GkLineChart} from 'gk-chart';

import styled from "styled-components";

let datapoints: {label: string, y: number}[] = [
    {label: "January", y: 18},
    {label: "February", y: 28},
    {label: "March", y: 34},
    {label: "April", y: 42},
    {label: "May", y: 54},
    {label: "June", y: 55},
    {label: "July", y: 70},
    {label: "August", y: 60},
    {label: "September", y: 72},
    {label: "October", y: 76},
    {label: "November", y: 87},
    {label: "December", y: 92}
]

let chartline = {
    config: {
        title: "Line Chart",
        chartType: "line-chart",
        printEnable: true
    },
    yaxis : {
        min : 0,
        numOfRows : 5,
        title : "Hours"
    },
    data: [
        {
            chartColor: "#5d62b5",
            fill: false,
            dataLabel: "Data Set 1",
            datapoints: datapoints
        }
    ]
};

const LineChartContainer = styled.div`
  width: 100%;
  height: 500px;  
`

export const LineChart = () => {

    useEffect(() => {
        GkLineChart({
            id: "lineChart",
            data: chartline
        })
    }, []);

    return (
        <>
            <LineChartContainer id="lineChart" />
        </>
    );
}


const meta: Meta = {
    title: "Components/LineChart",
    component: LineChart,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div style={{ margin: '1em', padding: '2em', background: '#f8f7f7' }}>
                <Story />
            </div>
        ),
    ],
};


export default meta;
type Story = StoryObj<typeof meta>;

const lineChartExample: string = `
import React, { useEffect } from "react";
import {GkLineChart} from 'gk-chart';

let datapoints: {label: string, y: number}[] = [
    {label: "January", y: 18},
    {label: "February", y: 28},
    {label: "March", y: 34},
    {label: "April", y: 42},
    {label: "May", y: 54},
    {label: "June", y: 55},
    {label: "July", y: 70},
    {label: "August", y: 60},
    {label: "September", y: 72},
    {label: "October", y: 76},
    {label: "November", y: 87},
    {label: "December", y: 92}
]

let chartline = {
    config: {
        title: "Line Chart",
        chartType: "line-chart",
        printEnable: true
    },
    // yaxis data is not required and can be omitted, charting library will calculate it
    yaxis : {
        min : 0,
        numOfRows : 5,
        title : "Hours"
    },
    data: [
        {
            chartColor: "#5d62b5",
            fill: false,
            dataLabel: "Data Set 1",
            datapoints: datapoints
        }
    ]
};

export const LineChart = () => {

    useEffect(() => {
        GkLineChart({
            id: "lineChart",
            data: chartline
        })
    }, []);

    return (
        <>
            <div id="lineChart" style={{width: "100%", height: "500px"}}></div>
        </>
    );
}

`

LineChart.parameters = {
    docs: {
        source: {
            code: lineChartExample,
        },
    },
};


// Chart line with fill style

let chartLineFill = {
    config: {
        title: "Line Chart Fill",
        chartType: "line",
        printEnable: true
    },
    data: [
        {
            chartColor: "#5d62b5",
            fill: true,
            dataLabel: "Data Set 1",
            datapoints: datapoints
        }
    ]
};

export const LineChartFill = () => {

    useEffect(() => {
        GkLineChart({
            id: "lineChartFill",
            data: chartLineFill
        })
    }, []);

    return (
        <>
            <LineChartContainer id="lineChartFill" />
        </>
    );
}



const lineChartFillExample: string = `
import React, { useEffect } from "react";
import {GkLineChart} from 'gk-chart';

let datapoints: {label: string, y: number}[] = [
    {label: "January", y: 18},
    {label: "February", y: 28},
    {label: "March", y: 34},
    {label: "April", y: 42},
    {label: "May", y: 54},
    {label: "June", y: 55},
    {label: "July", y: 70},
    {label: "August", y: 60},
    {label: "September", y: 72},
    {label: "October", y: 76},
    {label: "November", y: 87},
    {label: "December", y: 92}
]

let chartLineFill = {
    config: {
        title: "Line Chart Fill",
        chartType: "line",
        printEnable: true
    },
    data: [
        {
            chartColor: "#5d62b5",
            fill: true,
            dataLabel: "Data Set 1",
            datapoints: datapoints
        }
    ]
};

export const LineChartFill = () => {

    useEffect(() => {
        GkLineChart({
            id: "lineChartFill",
            data: chartLineFill
        })
    }, []);

    return (
        <>
            <LineChartContainer id="lineChartFill" />
        </>
    );
};
}

`

LineChartFill.parameters = {
    docs: {
        source: {
            code: lineChartFillExample,
        },
    },
};





//export const LineChartComponent = LineChart.bind({});

