import React, { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {GkPieChart} from 'gk-chart';

import styled from "styled-components";

const PieChartContainer = styled.div`
  width: 100%;
  height: 300px;  
`

const pieChartData = {
    "config": {
        "title": "Pie Chart",
        "chartType": "pie-chart",
        "printEnable": true
    },
    "data": [{
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

export const PieChart = () => {

    useEffect(() => {
        GkPieChart({
            id: "pieChartId",
            data: pieChartData
        })
    }, []);

    return (
        <>
            <PieChartContainer id="pieChartId" />
        </>
    );
}


const meta: Meta = {
    title: "Components/PieChart",
    component: PieChart,
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

const pieChartExample: string = `
import React, { useEffect } from "react";
import {GkPieChart} from 'gk-chart';

const pieChartData = {
    "config": {
        "title": "Pie Chart",
        "chartType": "pie-chart",
        "printEnable": true
    },
    "data": [{
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

PieChart.parameters = {
    docs: {
        source: {
            code: pieChartExample,
        },
    },
};

