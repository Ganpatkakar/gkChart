import React, { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {GkBarChart} from 'gk-chart';

import styled from "styled-components";


const BarChartContainer = styled.div`
  width: 100%;
  height: 500px;  
`

let chartbar = {
    "config": {
        "title": "Bar Chart",
        "chartType": 'bar-chart',
        "printEnable": true
    },
    xAxis : {
        min : 0,
        numOfRows : 5,
        title : "Hours"
    },
    categories : [
        {label: "Travel & Leisure"},
        {label: "Advertising/Marketing/PR"},
        {label: "Other"},
        {label: "Real Estate"},
        {label: "Communications/Cable/Phone"},
        {label: "Construction"},
        {label: "Entertainment"},
        {label: "Staffing Firm/Full Time/Temporary"},
        {label: "Transportation/Logistics"},
        {label: "Utilities"},
        {label: "Aerospace/Defense Products"},
        {label: "Banking/Finance/Securities"},
        {label: "Consumer Products - Non-Durables"},
        {label: "Distribution"}
    ],
    "data": [
        {
            "chartColor": "#5d62b5",
            "dataLabel": "Data set 1",
            "datapoints": [
                {value: "41"},
                {value: "39"},
                {value: "38"},
                {value: "32"},
                {value: "26"},
                {value: "25"},
                {value: "25"},
                {value: "24"},
                {value: "23"},
                {value: "22"},
                {value: "18"},
                {value: "16"},
                {value: "15"},
                {value: "13"}
            ]
        }
    ]
};
export const BarChart = () => {

    useEffect(() => {
        GkBarChart({
            id: "barChart",
            data: chartbar
        })
    }, []);

    return (
        <>
            <BarChartContainer id="barChart" />
        </>
    );
}


const meta: Meta = {
    title: "Components/BarChart",
    component: BarChart,
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

const barChartExample: string = `
import React, { useEffect } from "react";
import {GkBarChart} from 'gk-chart';

let chartbar = {
    config: {
        "title": "Bar Chart",
        "chartType": 'bar-chart',
        "printEnable": true
    },
    xAxis : {
        min : 0,
        numOfRows : 5,
        title : "Hours"
    },
    categories : [
        {label: "Travel & Leisure"},
        {label: "Advertising/Marketing/PR"},
        {label: "Other"},
        {label: "Real Estate"},
        {label: "Communications/Cable/Phone"},
        {label: "Construction"},
        {label: "Entertainment"},
        {label: "Staffing Firm/Full Time/Temporary"},
        {label: "Transportation/Logistics"},
        {label: "Utilities"},
        {label: "Aerospace/Defense Products"},
        {label: "Banking/Finance/Securities"},
        {label: "Consumer Products - Non-Durables"},
        {label: "Distribution"}
    ],
    "data": [
        {
            "chartColor": "#5d62b5",
            "dataLabel": "Data set 1",
            "datapoints": [
                {value: "41"},
                {value: "39"},
                {value: "38"},
                {value: "32"},
                {value: "26"},
                {value: "25"},
                {value: "25"},
                {value: "24"},
                {value: "23"},
                {value: "22"},
                {value: "18"},
                {value: "16"},
                {value: "15"},
                {value: "13"}
            ]
        }
    ]
};

export const BarChart = () => {

    useEffect(() => {
        GkBarChart({
            id: "barChart",
            data: chartbar
        })
    }, []);

    return (
        <>
            <div id="barChart" style={{width: "100%", height: "500px"}}></div>
        </>
    );
};


`

BarChart.parameters = {
    docs: {
        source: {
            code: barChartExample,
        },
    },
};

// Multi bar chart comparison

const chartMultiBar = {
    "config": {
        "title": "Bar Chart",
        "chartType": 'bar-chart',
        "printEnable": true
    },
    xaxis : {
        min : 0,
        numOfRows : 5,
        title : "Hours"
    },
    categories : [
        {label: "Travel & Leisure"},
        {label: "Advertising/Marketing/PR"},
        {label: "Other"},
        {label: "Real Estate"},
        {label: "Communications/Cable/Phone"},
        {label: "Construction"},
        {label: "Entertainment"},
        {label: "Staffing Firm/Full Time/Temporary"},
        {label: "Transportation/Logistics"},
        {label: "Utilities"},
        {label: "Aerospace/Defense Products"},
        {label: "Banking/Finance/Securities"},
        {label: "Consumer Products - Non-Durables"},
        {label: "Distribution"}
    ],
    "data": [
        {
            "chartColor": "#5d62b5",
            "dataLabel": "Data set 1",
            "datapoints": [
                {value: "41"},
                {value: "39"},
                {value: "38"},
                {value: "32"},
                {value: "26"},
                {value: "25"},
                {value: "25"},
                {value: "24"},
                {value: "23"},
                {value: "22"},
                {value: "18"},
                {value: "16"}
            ]
        },
        {
            "chartColor": "#29c3be",
            "dataLabel": "Data set 1",
            "datapoints": [
                {value: "30"},
                {value: "20"},
                {value: "18"},
                {value: "41"},
                {value: "40"},
                {value: "35"},
                {value: "15"},
                {value: "4"},
                {value: "2"},
                {value: "28"},
                {value: "38"},
                {value: "36"}
            ]
        }
    ]
};


export const MultiBarChart = () => {

    useEffect(() => {
        GkBarChart({
            id: "multiBarChart",
            data: chartMultiBar
        })
    }, []);

    return (
        <>
            <BarChartContainer id="multiBarChart" />
        </>
    );
}


const multiBarChartExample: string = `
import React, { useEffect } from "react";
import {GkBarChart} from 'gk-chart';

const chartMultiBar = {
    "config": {
        "title": "Bar Chart",
        "chartType": 'bar-chart',
        "printEnable": true
    },
    xaxis : {
        min : 0,
        numOfRows : 5,
        title : "Hours"
    },
    categories : [
        {label: "Travel & Leisure"},
        {label: "Advertising/Marketing/PR"},
        {label: "Other"},
        {label: "Real Estate"},
        {label: "Communications/Cable/Phone"},
        {label: "Construction"},
        {label: "Entertainment"},
        {label: "Staffing Firm/Full Time/Temporary"},
        {label: "Transportation/Logistics"},
        {label: "Utilities"},
        {label: "Aerospace/Defense Products"},
        {label: "Banking/Finance/Securities"},
        {label: "Consumer Products - Non-Durables"},
        {label: "Distribution"}
    ],
    "data": [
        {
            "chartColor": "#5d62b5",
            "dataLabel": "Data set 1",
            "datapoints": [
                {value: "41"},
                {value: "39"},
                {value: "38"},
                {value: "32"},
                {value: "26"},
                {value: "25"},
                {value: "25"},
                {value: "24"},
                {value: "23"},
                {value: "22"},
                {value: "18"},
                {value: "16"}
            ]
        },
        {
            "chartColor": "#29c3be",
            "dataLabel": "Data set 1",
            "datapoints": [
                {value: "30"},
                {value: "20"},
                {value: "18"},
                {value: "41"},
                {value: "40"},
                {value: "35"},
                {value: "15"},
                {value: "4"},
                {value: "2"},
                {value: "28"},
                {value: "38"},
                {value: "36"}
            ]
        }
    ]
};


export const MultiBarChart = () => {

    useEffect(() => {
        GkBarChart({
            id: "multiBarChart",
            data: chartMultiBar
        })
    }, []);

    return (
        <>
            <div id="multiBarChart" style={{width: "100%", height: "500px"}} />
        </>
    );
}
`

MultiBarChart.parameters = {
    docs: {
        source: {
            code: multiBarChartExample,
        },
    },
};
