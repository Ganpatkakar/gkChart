import Link from "next/link";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            openNavbar: false
        }
    }
    toggleNavbar = () => {
        this.setState({
            openNavbar: !this.state.openNavbar
        });
    }
    render() {
        return (
            <nav className="navbar navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed"
                            onClick={this.toggleNavbar}
                            data-toggle="collapse" data-target="#navbar" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link href="/"><a className="navbar-brand">GK-Chart</a></Link>
                    </div>
                    <div id="navbar" className={this.state.openNavbar ? "navbar-collapse" : "navbar-collapse collapse" }>
                        <ul className="nav navbar-nav navbar-right scroll-to">
                            <li>
                                <Link href="/"><a>Home</a></Link>
                            </li>
                            <li>
                                <Link href="/galery"><a>Charts Gallery</a></Link>
                            </li>
                            <li>
                                <a href="/static/js/gk-chart.min.js" download>Download</a>
                            </li>
                            <li className="dropdown">
                                <a href="/support-gkchart">Support Gk Chart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;