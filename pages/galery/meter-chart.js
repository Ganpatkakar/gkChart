import Head from "next/head";
import Layout from "../../comps/layout";
import Galery from "../../comps/galery/galery";
import MeterChart from "../../comps/galery/charts/meter/meter_chart";

const MeterChartPage = () => (
    <div>
    <Head>
        <title>Open Source Chart Library : Gk-Chart - Meter Chart</title>
        <meta name="keywords" content="Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"></meta>
        <meta name="author" content="Ganpat Kakar" />
        <meta name="og:Open Source Chart Library : Gk-Chart - Meter Chart" property="og:Open Source Chart Library : Gk-Chart - Meter Chart" content="Open Source Chart Library : Gk-Chart - Meter Chart"></meta>
		<meta name="description" content="Gk-Chart is an open source chart library provides charts as Meter chart, bar chart , pie chart, doughnut chart, meter chart, line chart comparison, bar chart comparison, bar and line chart comparison and 20 plus more charts with the business data presentation in chart view, integrate is easy with javascript" />
    </Head>
        <Layout>
            <Galery>
                <h1>JavaScript Meter Chart & Graph</h1>
                <p>Line Chart is consrtucted by one data set and one progress value. Meter chart is designed to show the progress of provide value in analog format.
                    For example with Meter chart, it is easy to see the analog representation.
                    Below is an example of Meter chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code.
                    Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation.
                </p>
                <MeterChart />
            </Galery>
        </Layout>
    </div>
)

export default MeterChartPage;