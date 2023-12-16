import React, { useEffect } from "react";
import {GkStackedChart} from '../../dist';

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
