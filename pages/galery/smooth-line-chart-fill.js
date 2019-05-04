import Head from "next/head";
import Layout from "../../comps/layout";
import Galery from "../../comps/galery/galery";
import SmoothlineChartFill from "../../comps/galery/charts/smoothLine/smoothline_chart_fill";

const SmoothlineChartFillPage = () => (
    <div>
    <Head>
        <title>Smooth Line Area Chart, Smooth Line Chart Fill, Spline Area Chart, Spline Chart Fill - GkCharts</title>
        <meta name="keywords" content="Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"></meta>
        <meta name="author" content="Ganpat Kakar" />
        <meta name="og:Open Source Chart Library : Gk-Chart - Line Area Chart, Line Chart Fill" property="og:Open Source Chart Library : Gk-Chart - Line Area Chart, Line Chart Fill" content="Open Source Chart Library : Gk-Chart - Line Area Chart, Line Chart Fill"></meta>
		<meta name="description" content="Gk-Chart is an open source chart library provides charts as smooth line chart fill, smooth line area chart line area chart, bar chart , pie chart, line chart comparison, smooth line chart comparison and 20 plus more charts with the business data presentation in chart view, integrate is easy with javascript" />
    </Head>
        <Layout>
            <Galery>
            <h1>JavaScript Smooth Line Fill and Smooth Line Area Chart & Graph</h1>
                <p>Smooth Line Area Chart is consrtucted by the two or more points connecting and providing a fill property in chart config data.
                    For example with Smooth Line fill chart, it is easy to compare year's, month wise progress and income with and area of coverage.
                    Below is an example of Smooth Line Area chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code.
                    Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation.
                </p>
                <SmoothlineChartFill />
            </Galery>
        </Layout>
    </div>
)

export default SmoothlineChartFillPage;