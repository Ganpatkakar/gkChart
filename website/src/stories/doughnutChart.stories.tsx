import React, { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {GkDoughnutChart} from 'gk-chart';

import styled from "styled-components";

const DoughnutChartContainer = styled.div`
  width: 100%;
  height: 300px;  
`

const doughnutChartData = {
    "config": {
        "title": "Doughnut Chart",
        "chartType": "doughnut-chart",
        "printEnable": true
    },
    "data": [{
        "chartColor": "#29c3be",
        "datapoints": [{
            "label": "Jan",
            "y": 200,
            "color": "#37509a"
        }, {
            "label": "Feb",
            "y": 90,
            "color": "#940f00"
        }, {
            "label": "Mar",
            "y": 45,
            "color": "#14d9a1"
        }, {
            "label": "Apr",
            "y": 70,
            "color": "#d3c403"
        }, {
            "label": "May",
            "y": 95,
            "color": "#ec40d5"
        }
        ]
    }]
};

export const DoughnutChart = () => {

    useEffect(() => {
        GkDoughnutChart({
            id: "doughnutChartId",
            data: doughnutChartData
        })
    }, []);

    return (
        <>
            <DoughnutChartContainer id="doughnutChartId" />
        </>
    );
}


const meta: Meta = {
    title: "Components/DoughnutChart",
    component: DoughnutChart,
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

const doughnutChartExample: string = `
import React, { useEffect } from "react";
import {GkPieChart} from 'gk-chart';

const doughnutChartData = {
    "config": {
        "title": "Doughnut Chart",
        "chartType": "doughnut-chart",
        "printEnable": true
    },
    "data": [{
        "chartColor": "#29c3be",
        "datapoints": [{
            "label": "Jan",
            "y": 200,
            "color": "teal"
        }, {
            "label": "Feb",
            "y": 90,
            "color": "#b84335"
        }, {
            "label": "Mar",
            "y": 45,
            "color": "#fbbc05"
        }, {
            "label": "Apr",
            "y": 70,
            "color": "gray"
        }, {
            "label": "May",
            "y": 95,
            "color": "purple"
        }]
    }]
};

export const PieChart = () => {

    useEffect(() => {
        GkPieChart({
            id: "pieChartId",
            data: pieChartData
        })
    }, []);

    return (
        <>
            <div id="pieChartId" style={{width: "100%", height: "500px"}}></div>
        </>
    );
}
`

DoughnutChart.parameters = {
    docs: {
        source: {
            code: doughnutChartExample,
        },
    },
};

