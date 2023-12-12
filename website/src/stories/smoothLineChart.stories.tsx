import React, { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {datapoints, datapoints1, datapoints2, datapoints3} from '../data';
import {GkSmoothLineChart} from 'gk-chart';

import styled from "styled-components";


let chartSmoothLine = {
    config: {
        title: "SmoothLine Chart",
        chartType: "SmoothLine-chart",
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

export const SmoothLineChart = () => {

    useEffect(() => {
        GkSmoothLineChart({
            id: "SmoothLineChart",
            data: chartSmoothLine
        })
    }, []);

    return (
        <>
            <LineChartContainer id="SmoothLineChart" />
        </>
    );
}


const meta: Meta = {
    title: "Components/SmoothLineChart",
    component: SmoothLineChart,
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

const SmoothLineChartExample: string = `
import React, { useEffect } from "react";
import {GkSmoothLineChart} from 'gk-chart';

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

let chartSmoothLine = {
    config: {
        title: "SmoothLine Chart",
        chartType: "SmoothLine-chart",
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
        GkSmoothLineChart({
            id: "SmoothLineChart",
            data: chartSmoothLine
        })
    }, []);

    return (
        <>
            <div id="SmoothLineChart" style={{width: "100%", height: "500px"}}></div>
        </>
    );
}

`

SmoothLineChart.parameters = {
    docs: {
        source: {
            code: SmoothLineChartExample,
        },
    },
};


// Chart SmoothLine with fill style

let chartLineFill = {
    config: {
        title: "SmoothLine Chart Fill",
        chartType: "SmoothLine",
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
        GkSmoothLineChart({
            id: "SmoothLineChartFill",
            data: chartLineFill
        })
    }, []);

    return (
        <>
            <LineChartContainer id="SmoothLineChartFill" />
        </>
    );
}



const SmoothLineChartFillExample: string = `
import React, { useEffect } from "react";
import {GkSmoothLineChart} from 'gk-chart';

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
        title: "SmoothLine Chart Fill",
        chartType: "SmoothLine",
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
        GkSmoothLineChart({
            id: "SmoothLineChartFill",
            data: chartLineFill
        })
    }, []);

    return (
        <>
            <LineChartContainer id="SmoothLineChartFill" />
        </>
    );
};
}

`

LineChartFill.parameters = {
    docs: {
        source: {
            code: SmoothLineChartFillExample,
        },
    },
};




// Multiple SmoothLine chart with and without fill style

var chartLineComparison = {
    config: {
        title: "Multi SmoothLine Comparision Chart",
        chartType: "SmoothLine-chart",
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
        },
        {
            chartColor: "#29c3be",
            fill: false,
            dataLabel: "Data Set 2",
            datapoints: datapoints1
        },
        {
            chartColor: "#ff00dd",
            fill: false,
            dataLabel: "Data Set 3",
            datapoints: datapoints2
        },
        {
            chartColor: "#f2726f",
            fill: false,
            dataLabel: "Data Set 4",
            datapoints: datapoints3
        }
    ]
};

export const MultiLineChartComparison = () => {

    useEffect(() => {
        GkSmoothLineChart({
            id: "multiLineChartComparison",
            data: chartLineComparison
        })
    }, []);

    return (
        <>
            <LineChartContainer id="multiLineChartComparison" />
        </>
    );
}



const multiLineChartComparisonExample: string = `
import React, { useEffect } from "react";
import {GkSmoothLineChart} from 'gk-chart';

export const datapoints = [
    {label: "January", y: 1},
    {label: "February", y: 2},
    {label: "March", y: 5},
    {label: "April", y: 7},
    {label: "May", y: 10},
    {label: "June", y: 12},
    {label: "July", y: 16},
    {label: "August", y: 12},
    {label: "September", y: 18},
    {label: "October", y: 15},
    {label: "November", y: 20},
    {label: "December", y: 22}
];
export const datapoints1 = [
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
];
export const datapoints2 = [
    {label: "January", y: 20},
    {label: "February", y: 22},
    {label: "March", y: 27},
    {label: "April", y: 22},
    {label: "May", y: 29},
    {label: "June", y: 20},
    {label: "July", y: 50},
    {label: "August", y: 40},
    {label: "September", y: 42},
    {label: "October", y: 46},
    {label: "November", y: 57},
    {label: "December", y: 52}
];
export const datapoints3 = [
    {label: "January", y: 16},
    {label: "February", y: 19},
    {label: "March", y: 21},
    {label: "April", y: 21},
    {label: "May", y: 24},
    {label: "June", y: 35},
    {label: "July", y: 40},
    {label: "August", y: 50},
    {label: "September", y: 60},
    {label: "October", y: 70},
    {label: "November", y: 80},
    {label: "December", y: 90}
];

var chartLineComparison = {
    config: {
        title: "Multi SmoothLine Comparision Chart",
        chartType: "SmoothLine-chart",
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
        },
        {
            chartColor: "#29c3be",
            fill: false,
            dataLabel: "Data Set 2",
            datapoints: datapoints1
        },
        {
            chartColor: "#ff00dd",
            fill: false,
            dataLabel: "Data Set 3",
            datapoints: datapoints2
        },
        {
            chartColor: "#f2726f",
            fill: false,
            dataLabel: "Data Set 4",
            datapoints: datapoints3
        }
    ]
};

export const MultiLineChartComparison = () => {

    useEffect(() => {
        GkSmoothLineChart({
            id: "multiLineChartComparison",
            data: chartLineComparison
        })
    }, []);

    return (
        <>
            <div id="multiLineChartComparison" style={{width: "100%", height: "500px"}}></div>
        </>
    );
};
`

MultiLineChartComparison.parameters = {
    docs: {
        source: {
            code: multiLineChartComparisonExample,
        },
    },
};
