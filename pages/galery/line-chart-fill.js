import Link from "next/link";
import Head from "next/head";
import Layout from "../../comps/layout";
import Galery from "../../comps/galery/galery";
import LineChartFill from "../../comps/galery/charts/line/line_chart_fill";

const LineChartFillPage = () => (
    <div>
    <Head>
        <title>Open Source Chart Library : Gk-Chart - Line Area Chart, Line Chart Fill</title>
        <meta name="keywords" content="Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"></meta>
        <meta name="author" content="Ganpat Kakar" />
        <meta name="og:Open Source Chart Library : Gk-Chart - Line Area Chart, Line Chart Fill" property="og:Open Source Chart Library : Gk-Chart - Line Area Chart, Line Chart Fill" content="Open Source Chart Library : Gk-Chart - Line Area Chart, Line Chart Fill"></meta>
		<meta name="description" content="Gk-Chart is an open source chart library provides charts as line chart fill, line area chart, bar chart , pie chart, line chart comparison, bar and line chart comparison and 20 plus more charts with the business data presentation in chart view, integrate is easy with javascript" />
    
    </Head>
        <Layout>
            <Galery>
                <h1>JavaScript Line Fill and Line Area Chart & Graph</h1>
                <p>Line Area Chart is consrtucted by the two or more points connecting and providing a fill property in chart config data.
                    For example with Line fill chart, it is easy to compare year's, month wise progress and income with and area of coverage.
                    Below is an example of Line Area chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code.
                    Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation.
                </p>
                <LineChartFill />
            </Galery>
        </Layout>
    </div>
)

export default LineChartFillPage;