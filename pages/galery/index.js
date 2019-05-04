import Link from "next/link";
import Head from "next/head";
import Layout from "../../comps/layout";
import Galery from "../../comps/galery/galery";
import LineChart from "../../comps/galery/charts/line/line_chart";

const GaleryPage = () => (
    <div>
    <Head>
        <title>Open Source Chart Library : Gk-Chart - Galery page, Charts Galery</title>
        <meta name="keywords" content="Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"></meta>
        <meta name="author" content="Ganpat Kakar" />
        <meta name="og:Open Source Chart Library : Gk-Chart - Galery page, Charts Galery" property="og:Open Source Chart Library : Gk-Chart - Galery page, Charts Galery" content="Open Source Chart Library : Gk-Chart - Galery page, Charts Galery"></meta>
		<meta name="description" content="Gk-Chart is an open source chart library provides charts as line chart, bar chart , pie chart, doughnut chart, meter chart, line chart comparison, bar chart comparison, bar and line chart comparison and 20 plus more charts with the business data presentation in chart view, integrate is easy with javascript" />
    </Head>
        <Layout>
            <Galery>
                <h1>JavaScript Chart & Graph Galery</h1>
                <p>GkChart provide 20 plus charts to represent any business data in chart visual formate. With GkChart it is easy to implement and responsive charts for your business.
                    GK-Chart galery provide you many examples which will help you to generate charts for your data.
                    For example with Line chart, it is easy to compare year's, month wise progress and income.
                    Below is an example of Line chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code.
                    Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation.
                </p>
                <LineChart />
            </Galery>
        </Layout>
    </div>
)

export default GaleryPage;