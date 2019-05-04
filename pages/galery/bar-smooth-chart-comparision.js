import Head from "next/head";
import Layout from "../../comps/layout";
import Galery from "../../comps/galery/galery";
import BarSmoothLineChartComparision from "../../comps/galery/charts/bar/bar-smooth-line-comparision";

const BarSmoothLineChartComparisionPage = () => (
    <div>
    <Head>
        <title>Open Source Chart Library : Gk-Chart - Bar and Smooth Line Comparision Chart</title>
        <meta name="keywords" content="Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"></meta>
        <meta name="author" content="Ganpat Kakar" />
        <meta name="og:Open Source Chart Library : Gk-Chart - Bar and Smooth Line Comparision Chart" property="og:Open Source Chart Library : Gk-Chart - Bar and Smooth Line Comparision Chart" content="Open Source Chart Library : Gk-Chart - Bar and Smooth Line Comparision Chart"></meta>
        <meta name="description" content="Bar Chart and smooth line chart comparison provided an easy way of comparing data set in visual view. With GKCharts it is easy to setup Bar chart and smooth line chart comparison cahrt view." />
    </Head>
        <Layout>
            <Galery>
                <h1>JavaScript Bar Chart and Smooth Line Chart Comparison Chart & Graph</h1>
                <p>Bar cahrt and Smooth Line chart can be used in one chart presentation to provide a better comparison view of data. Bar Chart and Smooth Line Chart Comparison Chart is created by providing minimum one data set for each chart type.
                    Bar chart and Smooth Line Chart comparison chart provide a compared view of business data.
                    For example with Bar chart and smooth line chart comparison chart, it is easy to compare multiple year's, month wise progress and income.
                    Below is an example of simple bar chart and smooth line chart comparison chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code.
                    Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation.
                </p>
                <BarSmoothLineChartComparision />
            </Galery>
        </Layout>
    </div>
)

export default BarSmoothLineChartComparisionPage;