import Head from "next/head";
import Layout from "../../comps/layout";
import Galery from "../../comps/galery/galery";
import BarChart from "../../comps/galery/charts/bar/bar_chart";

const BarChartPage = () => (
    <div>
    <Head>
        <title>Open Source Chart library : Gk-Chart - Bar Chart</title>
        <meta name="keywords" content="Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"></meta>
        <meta name="author" content="Ganpat Kakar" />
        <meta name="og:Open Source Chart library : Gk-Chart - Bar Chart" property="og:Open Source Chart library : Gk-Chart - Bar Chart" content="Open Source Chart library : Gk-Chart - Bar Chart"></meta>
        <meta name="description" content="Bar Chart provided an easy way of comparing one data set in visual view. With GKCharts it is easy to setup Bar chart." />
    </Head>
        <Layout>
            <Galery>
                <h1>JavaScript Bar Chart & Graph</h1>
                <p>Bar cahrt is created by providing one data set. Bar chart provide a compared view of business data for a period of time.
                    For example with Bar chart it is easy to compare one years month wise progress and income.
                    Below is an example of simple bar chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code.
                    Print the generated chart functionality is provide for the User to print the chart for any hard copy presentation.
                </p>
                <BarChart />
            </Galery>
        </Layout>
    </div>
)

export default BarChartPage;