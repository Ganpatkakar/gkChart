import Head from "next/head";
import Layout from "../../comps/layout";
import Galery from "../../comps/galery/galery";
import StepChart from "../../comps/galery/charts/step/step_chart";

const StepLineChartPage = () => (
    <div>
    <Head>
        <title>Open Source Chart Library : Gk-Chart - Step Line Chart, Spline Chart</title>
        <meta name="keywords" content="Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"></meta>
        <meta name="author" content="Ganpat Kakar" />
        <meta name="og:Open Source Chart Library : Gk-Chart - Step Line Chart" property="og:Open Source Chart Library : Gk-Chart - Step Line Chart" content="Open Source Chart Library : Gk-Chart - Step Line Chart"></meta>
		<meta name="description" content="Gk-Chart is an open source chart library provides charts as Step line chart, Line Chart, line chart comparison, bar chart comparison, bar and line chart comparison and 20 plus more charts with the business data presentation in chart view, integrate is easy with javascript" />
    </Head>
        <Layout>
            <Galery>
            <h1>JavaScript Step Line Chart & Graph</h1>
                <p>Step Line Chart is consrtucted by the two or more points connecting.
                    For example with Step Line chart, it is easy to compare year's, month wise progress and income.
                    Below is an example of Line chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code.
                    Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation.
                </p>
                <StepChart />
            </Galery>
        </Layout>
    </div>
)

export default StepLineChartPage;