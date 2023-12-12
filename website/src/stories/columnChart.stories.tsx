import React, { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {GkColumnChart} from 'gk-chart';
import {datapoints, datapoints1, datapoints2, datapoints3} from '../data';

import styled from "styled-components";


const BarChartContainer = styled.div`
  width: 100%;
  height: 500px;  
`

let chartbar = {
    "config": {
        "title": "Column Chart",
        "chartType": 'column-chart',
        "printEnable": true
    },
    yaxis : {
        min : 0,
        numOfRows : 5,
        title : "Hours"
    },
    "data": [{
        "chartColor": "#5d62b5",
        "dataLabel": "Data set 1",
        "datapoints": datapoints
    }]
};
export const ColumnChart = () => {

    useEffect(() => {
        GkColumnChart({
            id: "columnChart",
            data: chartbar
        })
    }, []);

    return (
        <>
            <BarChartContainer id="columnChart" />
        </>
    );
}


const meta: Meta = {
    title: "Components/ColumnChart",
    component: ColumnChart,
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

const columnChartExample: string = `
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

ColumnChart.parameters = {
    docs: {
        source: {
            code: columnChartExample,
        },
    },
};


//  Multi column chart for comparision

const chartMultiColumn = {
    "config": {
        "title": "Multi Column Chart Comparision",
        "chartType": 'column-chart',
        "printEnable": true
    },
    yaxis : {
        min : 0,
        numOfRows : 5,
        title : "Hours"
    },
    "data": [
        {
            chartColor: "#5d62b5",
            dataLabel: "Data Set 1",
            datapoints: datapoints
        },
        {
            chartColor: "#29c3be",
            dataLabel: "Data Set 2",
            datapoints: datapoints1
        },
        {
            chartColor: "#ff00dd",
            dataLabel: "Data Set 3",
            datapoints: datapoints2
        },
        {
            chartColor: "#f2726f",
            dataLabel: "Data Set 4",
            datapoints: datapoints3
        }
    ]
};

export const MultiColumnChart = () => {

    useEffect(() => {
        GkColumnChart({
            id: "multiColumnChart",
            data: chartMultiColumn
        })
    }, []);

    return (
        <>
            <BarChartContainer id="multiColumnChart" />
        </>
    );
}


const multiColumnChartExample: string = `
import React, { useEffect } from "react";
import {GkColumnChart} from 'gk-chart';
import {datapoints, datapoints1, datapoints2, datapoints3} from './data';

const chartMultiColumn = {
    "config": {
        "title": "Multi Column Chart Comparision",
        "chartType": 'column-chart',
        "printEnable": true
    },
    yaxis : {
        min : 0,
        numOfRows : 5,
        title : "Hours"
    },
    "data": [
        {
            chartColor: "#5d62b5",
            dataLabel: "Data Set 1",
            datapoints: datapoints
        },
        {
            chartColor: "#29c3be",
            dataLabel: "Data Set 2",
            datapoints: datapoints1
        },
        {
            chartColor: "#ff00dd",
            dataLabel: "Data Set 3",
            datapoints: datapoints2
        },
        {
            chartColor: "#f2726f",
            dataLabel: "Data Set 4",
            datapoints: datapoints3
        }
    ]
};

export const MultiBarChart = () => {

    useEffect(() => {
        GkColumnChart({
            id: "multiBarChart",
            data: chartMultiColumn
        })
    }, []);

    return (
        <>
            <div id="multiBarChart" style={{width: "100%", height: "500px"}} />
        </>
    );
}
`

MultiColumnChart.parameters = {
    docs: {
        source: {
            code: multiColumnChartExample,
        },
    },
};
