import Head from "next/head";
import Layout from "../../comps/layout";
import Galery from "../../comps/galery/galery";
import BarComparisionChart from "../../comps/galery/charts/bar/bar_comparision";

const BarComparisionChartPage = () => (
    <div>
    <Head>
        <title>Open Source Chart library : Gk-Chart - Bar Chart Comparision</title>
        <meta name="keywords" content="Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"></meta>
        <meta name="author" content="Ganpat Kakar" />
        <meta name="og:Open Source Chart library : Gk-Chart - Bar Chart Comparision" property="og:Open Source Chart library : Gk-Chart - Bar Chart Comparision" content="Open Source Chart library : Gk-Chart - Bar Chart Comparision"></meta>
        <meta name="description" content="Bar Chart comparision provided an easy way of comparing two data sets in visual view. With GKCharts it is easy to setup Bar Comparison chart." />
    </Head>
        <Layout>
            <Galery>
                <h1>JavaScript Bar Chart Comparison & Graph</h1>
                <p>Bar comparison cahrt is created by providing two or more then two set of data points to compare. Bar comparison chart provide a compared view of business data.
                    For example with Bar comparision chart it is easy to compare two business years month wise progress and income comparison.
                    Below is an example of simple bar comparision chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code.
                    Print the generated chart functionality is provide for the User to print the chart for any hard copy presentation.
                </p>
                <BarComparisionChart />
            </Galery>
        </Layout>
    </div>
)

export default BarComparisionChartPage;