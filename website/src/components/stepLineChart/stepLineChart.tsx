import React, { useEffect } from "react";
import { GkStepChart } from "gk-chart";
import styled from "styled-components";

const StepChartContainer = styled.div`
  width: 100%;
  height: 500px;
`

export const StepChart = (props: any) => {

    useEffect(() => {
        GkStepChart({
            id: "StepChart",
            data: props.chartStep
        })
    }, []);

    return (
        <>
            <StepChartContainer id="StepChart" />
        </>
    );
}
