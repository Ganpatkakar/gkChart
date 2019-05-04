import Head from "next/head";
import Layout from "../../comps/layout";
import Galery from "../../comps/galery/galery";
import DoughnutChart from "../../comps/galery/charts/pie_doughnut/doughnut";

const DoughnutChartPage = () => (
    <div>
    <Head>
        <title>Open Source Chart Library : Gk-Chart - Doughnut Chart</title>
        <meta name="keywords" content="Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"></meta>
        <meta name="author" content="Ganpat Kakar" />
        <meta name="og:Open Source Chart Library : Gk-Chart - Doughnut Chart" property="og:Open Source Chart Library : Gk-Chart - Doughnut Chart" content="Open Source Chart Library : Gk-Chart - Doughnut Chart"></meta>
        <meta name="description" content="Doughnut chart provides an easy way of comparing data set in visual view. With GKCharts it is easy to setup doughnut chart." />    
    </Head>
        <Layout>
            <Galery>
                <h1>JavaScript Doughnut Chart & Graph</h1>
                <p>Doughnut chart provide a better comparison view of data. Doughnut Chart created by providing one data set.
                    Doughnut Chart provide a progressed view of business data.
                    For example with Doughnut chart, it is easy to compare year's, month wise progress and income.
                    Below is an example of Doughnut chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code.
                    Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation.
                </p>
                <DoughnutChart />
            </Galery>
        </Layout>
    </div>
)

export default DoughnutChartPage;