import Layout from "../comps/layout";
import Head from "next/head";
const Index = () => (
    <Layout>
        <Head>
            <title>Open Source chart library : Gk-Chart - Support GkCharts</title>
			<meta name="keywords" content="Support Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"></meta>
  			<meta name="author" content="Ganpat Kakar" />
			<meta name="og:Open Source chart Library: GK-Chart - Support GkCharts" property="og:Open Source chart Library: GK-Chart - Support GkCharts" content="Open Source chart Library: GK-Chart - Support GkCharts"></meta>
			<meta name="description" content="Support Gk-Chart to improve the quality and maintainance by sponsering GKChart development, You sponsership will give us strength and happiness for GkChart development" />
        </Head>
        <div className={"container"}>
            <div className={"col-sm-7 sponsor-main-view"}>
            <h2>Sponser Gk-Chart Development</h2>
            <br/>
            <p className={"text-justify"}>
                GkChart is an open source project and completely free to use. 
                However, the amount of effort needed to maintain and develop new features for the project is not 
                sustainable without proper financial backing. You can support GkChart development via the following 
                methods:
            </p>
            <br />
            <h2>One-time Donations</h2>
            <hr />
            <p>We accept donations through this channels:</p>
            <a href="https://www.paypal.me/ganpatkakar" target="blank"><img src="/static/images/paypal.png" className={"donation-paypal"} /></a>
            <hr />
            <p>Find any defficulty while implementation or caught an error then mail us <a href={"mailto:kakarganpat@gmail.com"}>kakarganpat@gmail.com</a></p>
            </div>
        </div>
    </Layout>
);

export default Index