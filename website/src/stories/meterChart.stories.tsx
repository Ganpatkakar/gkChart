import React, { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {GkMeterChart} from 'gk-chart';

import styled from "styled-components";

const MeterChartContainer = styled.div`
  width: 100%;
  height: 300px;  
`

const meterData = {
    "config": {
        "title": "Meter Gauge Chart",
        "chartType": "meter-chart",
        "printEnable": true
    },
    "data": [ /*Give as required data in given formate, syntax error with json will cause of error in charts*/ {
        "chartColor": "#29c3be",
        "datapoints": [{
            "label": "Poor",
            "y": 50,
            "color": "#29c3be"
        }, {
            "label": "Blw Avg",
            "y": 25,
            "color": "#29c3be"
        }, {
            "label": "Average",
            "y": 25,
            "color": "#00ff00"
        }, {
            "label": "Abv Avg",
            "y": 35,
            "color": "#00ff00"
        }, {
            "label": "Exceed",
            "y": 10,
            "color": "#00ff00"
        }],
        dataval: 77
    }]
};

export const MeterChart = () => {

    useEffect(() => {
        GkMeterChart({
            id: "meterChartId",
            data: meterData
        })
    }, []);

    return (
        <>
            <MeterChartContainer id="meterChartId" />
        </>
    );
}


const meta: Meta = {
    title: "Components/MeterChart",
    component: MeterChart,
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

const meterChartExample: string = `
import React, { useEffect } from "react";
import {GkMeterChart} from 'gk-chart';

const meterData = {
    "config": {
        "title": "Meter Gauge Chart",
        "chartType": "meter-chart",
        "printEnable": true
    },
    "data": [ /*Give as required data in given formate, syntax error with json will cause of error in charts*/ {
        "chartColor": "#29c3be",
        "datapoints": [{
            "label": "Poor",
            "y": 50,
            "color": "#29c3be"
        }, {
            "label": "Blw Avg",
            "y": 25,
            "color": "#29c3be"
        }, {
            "label": "Average",
            "y": 25,
            "color": "#00ff00"
        }, {
            "label": "Abv Avg",
            "y": 35,
            "color": "#00ff00"
        }, {
            "label": "Exceed",
            "y": 10,
            "color": "#00ff00"
        }],
        dataval: 77
    }]
};

export const MeterChart = () => {

    useEffect(() => {
        GkMeterChart({
            id: "meterChartId",
            data: meterData
        })
    }, []);

    return (
        <>
            <div id="meterChartId" style={{width: "100%", height: "500px"}}></div>
        </>
    );
}
`

MeterChart.parameters = {
    docs: {
        source: {
            code: meterChartExample,
        },
    },
};

