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
