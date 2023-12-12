import React, { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {GkStackedBarChart} from 'gk-chart';

import styled from "styled-components";

const StackedChartContainer = styled.div`
  width: 100%;
  height: 500px;  
`

const chartData = {
    config: {
        title: "Stacked Bar Chart",
        chartType: "stacked-bar-chart",
        printEnable: true
    },
    xAxis: {
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
        GkStackedBarChart({
            id: "stackedBarChart",
            data: chartData
        })
    }, []);

    return (
        <>
            <StackedChartContainer id="stackedBarChart" />
        </>
    );
}


const meta: Meta = {
    title: "Components/StackedBarChart",
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

const stackedBarChartExample: string = `
import React, { useEffect } from "react";
import {GkStackedBarChart} from 'gk-chart';

const chartData = {
    config: {
        title: "Stacked Bar Chart",
        chartType: "stacked-bar-chart",
        printEnable: true
    },
    xAxis: {
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
        GkStackedBarChart({
            id: "stackedBarChart",
            data: chartData
        })
    }, []);

    return (
        <>
            <div id="stackedBarChart" style={{width: "100%", height: "500px"}}></div>
        </>
    );
};
`

StackedChart.parameters = {
    docs: {
        source: {
            code: stackedBarChartExample,
        },
    },
};


// Group stacked bar chart for comparison

const groupChartData = {
    config: {
        title: "Stacked Chart",
        chartType: "stacked-bar-chart",
        printEnable: true
    },
    xAxis: {
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

export const GroupStackedChart = () => {

    useEffect(() => {
        GkStackedBarChart({
            id: "groupStackedBarChart",
            data: groupChartData
        })
    }, []);

    return (
        <>
            <StackedChartContainer id="groupStackedBarChart" />
        </>
    );
}


const groupStackedBarChartExample: string = `
import React, { useEffect } from "react";
import {GkStackedBarChart} from 'gk-chart';

const groupChartData = {
    config: {
        title: "Stacked Chart",
        chartType: "stacked-bar-chart",
        printEnable: true
    },
    xAxis: {
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

export const StackedChart = () => {

    useEffect(() => {
        GkStackedBarChart({
            id: "groupStackedBarChart",
            data: groupChartData
        })
    }, []);

    return (
        <>
            <div id="groupStackedBarChart" style={{width: "100%", height: "500px"}}></div>
        </>
    );
};
`

GroupStackedChart.parameters = {
    docs: {
        source: {
            code: groupStackedBarChartExample,
        },
    },
};
