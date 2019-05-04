import Layout from "../comps/layout";
import Home from "../comps/home/home";
import Head from "next/head";

import Header from "../comps/header";
const Index = () => (
	<Layout>
		<Head>
			<title>Open Source chart Library: GK-Chart - Home</title>
			<meta name="google-site-verification" content="zGEfNJ2m6SnEgSYNP3Et7H5I6k0T2IF5S_GxcxkMyhU" />
			<meta name="keywords" content="Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"></meta>
  			<meta name="author" content="Ganpat Kakar" />
			<meta name="og:title" property="og:title" content="Open Source chart Library: GK-Chart - Home"></meta>
			<meta name="description" content="Gk-Chart is an open source chart library provides charts as line chart, bar chart , pie chart, doughnut chart, meter chart, line chart comparison, bar chart comparison, bar and line chart comparison and 20 plus more charts with the business data presentation in chart view, integrate is easy with javascript" />
		</Head>
		<Home />
	</Layout>
);

export default Index