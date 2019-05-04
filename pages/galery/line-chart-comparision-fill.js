import Link from "next/link";
import Head from "next/head";
import Layout from "../../comps/layout";
import Galery from "../../comps/galery/galery";
import LineChartComparisionFill from "../../comps/galery/charts/line/line_chart_comparision_fill";

const LineChartComparisionFillPage = () => (
    <div>
    <Head>
        <title>Open Source Chart Library : Gk-Chart - Line Comparison Area Chart, Line Comparison Chart Fill</title>
        <meta name="keywords" content="Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"></meta>
        <meta name="author" content="Ganpat Kakar" />
        <meta name="og:Open Source Chart Library : Gk-Chart - Line Comparision Chart" property="og:Open Source Chart Library : Gk-Chart - Line Comparision Chart" content="Open Source Chart Library : Gk-Chart - Line Comparision Area Chart, Line Comparision Chart Fill"></meta>
		<meta name="description" content="Gk-Chart is an open source chart library provides charts as line comparision area chart, Line Comparison chart fill, line chart comparison, bar and line chart comparison and 20 plus more charts with the business data presentation in chart view, integrate is easy with javascript" />
    </Head>
        <Layout>
            <Galery><h1>JavaScript Line Area Comparison Chart & Graph</h1>
                <p>Line Area Comparison Chart is consrtucted by the two or more points connecting and providing two or more data set with a data property of fill as true in chart configuration.
                    For example with Line Area Comparison chart, it is easy to compare tow or more year's, month wise progress and income.
                    Below is an example of Line Area Comparison chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code.
                    Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation.
                </p>
                <LineChartComparisionFill />
            </Galery>
        </Layout>
    </div>
)

export default LineChartComparisionFillPage;