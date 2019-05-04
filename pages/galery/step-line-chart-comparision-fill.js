import Head from "next/head";
import Layout from "../../comps/layout";
import Galery from "../../comps/galery/galery";
import StepChartComparisionFill from "../../comps/galery/charts/step/step_chart_comparision_fill";

const StepLineChartComparisionFillPage = () => (
    <div>
    <Head>
        <title>Step Line Area comparison Chart, Spline Area comparison Chart, Step Line Chart Fill, Spline Chart Fill - GkCharts</title>
        <meta name="keywords" content="Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"></meta>
        <meta name="author" content="Ganpat Kakar" />
        <meta name="og:Open Source Chart Library : Gk-Chart - Spline Chart" property="og:Open Source Chart Library : Gk-Chart - Spline Chart" content="Open Source Chart Library : Gk-Chart - Spline Chart"></meta>
		<meta name="description" content="Gk-Chart is an open source chart library provides charts as Step chart, Step line area chart comparison, line chart comparison, bar chart comparison, bar and line chart comparison and 20 plus more charts with the business data presentation in chart view, integrate is easy with javascript" />
    
    </Head>
        <Layout>
            <Galery>
                <h1>JavaScript Step Line Area Chart, Spline Area Chart, Step Line Chart Fill, Spline Area Chart & Graph</h1>
                <p>Spline Area Comparison Chart is consrtucted by the two or more points connecting.
                    For example with Spline Area comparison Chart, it is easy to compare year's, month wise progress and income.
                    Below is an example of Spline Area comparison Chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code.
                    Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation.
                </p>
                <StepChartComparisionFill />
            </Galery>
        </Layout>
    </div>
)

export default StepLineChartComparisionFillPage;