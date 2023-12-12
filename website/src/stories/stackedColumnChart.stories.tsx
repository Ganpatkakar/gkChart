import React, { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {GkStackedChart} from 'gk-chart';

import styled from "styled-components";

const StackedChartContainer = styled.div`
  width: 100%;
  height: 500px;  
`

const chartData = {
    config: {
        title: "Stacked Column Chart",
        chartType: "stacked-column-chart",
        printEnable: true
    },
    yAxis: {
        min : 0,
        rowCount : 5,
        title : "Hours"
    },
    categories: [
        {label: "January"},
        {label: "February"},
        {label: "March"},
        {label: "April"},
        {label: "May"},
        {label: "June"},
        {label: "July"},
        {label: "August"},
        {label: "September"},
    ],
    data: [
        {
            dataSet: [
                {
                    color: "#5d62b5",
                    dataLabel: "Oil",
                    dataPoints : [
                        {value: 5},
                        {value: 10},
                        {value: 8},
                        {value: 6},
                        {value: 2},
                        {value: 9},
                        {value: 19},
                        {value: 5},
                        {value: 2},
                    ]
                },
                {
                    color: "#29c3be",
                    dataLabel: "Gas",
                    dataPoints : [
                        {value: 2},
                        {value: 6},
                        {value: 12},
                        {value: 15},
                        {value: 1},
                        {value: 5},
                        {value: 15},
                        {value: 25},
                        {value: 5},
                    ]
                },
                {
                    color: "#f2726f",
                    dataLabel: "Petrol",
                    dataPoints : [
                        {value: 8},
                        {value: 4},
                        {value: 5},
                        {value: 5},
                        {value: 10},
                        {value: 15},
                        {value: 1},
                        {value: 10},
                        {value: 25},
                    ]
                }
            ]
        }
    ]
};

export const StackedChart = () => {

    useEffect(() => {
        GkStackedChart({
            id: "stackedChart",
            data: chartData
        })
    }, []);

    return (
        <>
            <StackedChartContainer id="stackedChart" />
        </>
    );
}


const meta: Meta = {
    title: "Components/StackedColumnChart",
    component: StackedChart,
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

StackedChart.parameters = {
    docs: {
        source: {
            code: columnChartExample,
        },
    },
};


// stacked column chart

const chartData2 = {
    config: {
        title: "Group Stacked Column Chart",
        chartType: "stacked-column-chart",
        printEnable: true
    },
    yAxis: {
        min : 0,
        rowCount : 5,
        title : "Hours"
    },
    categories: [
        {label: "January"},
        {label: "February"},
        {label: "March"},
        {label: "April"},
        {label: "May"},
        {label: "June"},
        {label: "July"},
        {label: "August"},
        {label: "September"},
    ],
    data: [
        {
            dataSet: [
                {
                    color: "#5d62b5",
                    dataLabel: "Oil",
                    dataPoints : [
                        {value: 5},
                        {value: 10},
                        {value: 8},
                        {value: 6},
                        {value: 2},
                        {value: 9},
                        {value: 19},
                        {value: 5},
                        {value: 2},
                    ]
                },
                {
                    color: "#29c3be",
                    dataLabel: "Gas",
                    dataPoints : [
                        {value: 2},
                        {value: 6},
                        {value: 12},
                        {value: 15},
                        {value: 1},
                        {value: 5},
                        {value: 15},
                        {value: 25},
                        {value: 5},
                    ]
                },
                {
                    color: "#f2726f",
                    dataLabel: "Petrol",
                    dataPoints : [
                        {value: 8},
                        {value: 4},
                        {value: 5},
                        {value: 5},
                        {value: 10},
                        {value: 15},
                        {value: 1},
                        {value: 10},
                        {value: 25},
                    ]
                }
            ]
        },
        {
            dataSet: [
                {
                    color: "#5d62b5",
                    dataLabel: "Oil",
                    dataPoints : [
                        {value: 15},
                        {value: 1},
                        {value: 18},
                        {value: 10},
                        {value: 12},
                        {value: 19},
                        {value: 9},
                        {value: 15},
                        {value: 22},
                    ]
                },
                {
                    color: "#29c3be",
                    dataLabel: "Gas",
                    dataPoints : [
                        {value: 12},
                        {value: 16},
                        {value: 2},
                        {value: 5},
                        {value: 11},
                        {value: 25},
                        {value: 5},
                        {value: 21},
                        {value: 35},
                    ]
                },
                {
                    color: "#f2726f",
                    dataLabel: "Petrol",
                    dataPoints : [
                        {value: 18},
                        {value: 24},
                        {value: 15},
                        {value: 35},
                        {value: 1},
                        {value: 1},
                        {value: 11},
                        {value: 16},
                        {value: 2},
                    ]
                }
            ]
        }
    ]
};



export const MultiStackedChart = () => {

    useEffect(() => {
        GkStackedChart({
            id: "multiStackedChart",
            data: chartData2
        })
    }, []);

    return (
        <>
            <StackedChartContainer id="multiStackedChart" />
        </>
    );
}

