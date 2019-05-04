import Head from "next/head";
import Header from "./header"
import Footer from "./footer/footer";
const Layout = (props) => (
    <div>
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                crossorigin="anonymous" />
            <link rel="stylesheet" href="/static/css/style.min.css" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-127096290-1"></script>
            <script async type="text/javascript" src="/static/js/analytics-google.js"></script>
        </Head>
        <Header />
        {props.children}
        <script type="text/javascript" src="/static/js/gk-chart.js"></script>
        <Footer />
    </div>
);

export default Layout;