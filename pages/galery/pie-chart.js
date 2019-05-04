import Head from "next/head";
import Layout from "../../comps/layout";
import Galery from "../../comps/galery/galery";
import PieChart from "../../comps/galery/charts/pie_doughnut/pie_chart";

const PieChartPage = () => (
    <div>
    <Head>
        <title>Pie Chart - GkCharts</title>
        <title>Open Source Chart Library : Gk-Chart - Pie Chart</title>
        <meta name="keywords" content="Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"></meta>
        <meta name="author" content="Ganpat Kakar" />
        <meta name="og:Open Source Chart Library : Gk-Chart - Pie Chart" property="og:Open Source Chart Library : Gk-Chart - Pie Chart" content="Open Source Chart Library : Gk-Chart - Pie Chart"></meta>
		<meta name="description" content="Gk-Chart is an open source chart library provides charts as Pie chart, bar chart , doughnut chart, doughnut chart, meter chart, line chart comparison, bar chart comparison, bar and line chart comparison and 20 plus more charts with the business data presentation in chart view, integrate is easy with javascript" />
    </Head>
        <Layout>
            <Galery>
                <h1>JavaScript Pie Chart & Graph</h1>
                <p>Pie Chart is consrtucted by one data set to represent data in a pie view.
                    For example with Pie chart, it is easy to see the analog representation of provided data.
                    Below is an example of Pie chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code.
                    Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation.
                </p>
                <PieChart />
            </Galery>
        </Layout>
    </div>
)

export default PieChartPage;