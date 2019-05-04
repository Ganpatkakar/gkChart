import Link from "next/link";

export default class Galery extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <GalerySideBar />
        <div className="page-content container-fluid">
          {this.props.children}
        </div>
      </div>
    )
  }
}

class GalerySideBar extends React.Component {
  constructor () {
    super();
    this.state = {
      openSideBar : false
    }
  }

  toggleSidebar = () => {
    this.setState({
      openSideBar : !this.state.openSideBar
    })
  }
  
  render (){
    return (
      <div>
      <button type="button" className="sidebar-icon" onClick={this.toggleSidebar}>
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <div className={this.state.openSideBar ? "cover" : "" } onClick={this.toggleSidebar}></div>
      <aside className={this.state.openSideBar ? "side-navbar sidebar sidebar-open" : "side-navbar sidebar" }>
        <div className="scrollbar">
          <div className="dashboard-menu">
            <ul className="menu-list" onClick={this.toggleSidebar}>
              <li className="menu">
                <Link href="/galery/line-chart"><a>Line Chart</a></Link>
              </li>
              <li className="menu">
                <Link href="/galery/line-chart-fill"><a>Line Chart Fill</a></Link>
              </li>
              <li className="menu">
                <Link href="/galery/line-chart-comparision"><a>Line Chart Comparision</a></Link>
              </li>
              <li className="menu">
                <Link href="/galery/line-chart-comparision-fill"><a>Line Chart Comparision Fill</a></Link>
              </li>
              
              <li className="menu">
                <Link href="/galery/step-line-chart"><a>Step Line Chart</a></Link>
              </li>
              <li className="menu">
                <Link href="/galery/step-line-chart-fill"><a>Step Line Chart Fill</a></Link>
              </li>
              <li className="menu">
                <Link href="/galery/step-line-chart-comparision"><a>Step Line Chart Comparision</a></Link>
              </li>
              <li className="menu">
                <Link href="/galery/step-line-chart-comparision-fill"><a>Step Line Chart Comparision Fill</a></Link>
              </li>
              
              <li className="menu">
                <Link href="/galery/smooth-line-chart"><a>Smooth Line Chart</a></Link>
              </li>
              <li className="menu">
                <Link href="/galery/smooth-line-chart-fill"><a>Smooth Line Chart Fill</a></Link>
              </li>
              <li className="menu">
                <Link href="/galery/smooth-line-chart-comparision"><a>Smooth Line Chart Comparision</a></Link>
              </li>
              <li className="menu">
                <Link href="/galery/smooth-line-chart-comparision-fill"><a>Smooth Line Chart Comparision Fill</a></Link>
              </li>
              
              <li className="menu">
                <Link href="/galery/bar-chart"><a>Bar Chart</a></Link>
              </li>
              <li className="menu">
                <Link href="/galery/bar-chart-comparision"><a>Bar Chart Compoarision</a></Link>
              </li>
              <li className="menu">
                <Link href="/galery/bar-smooth-chart-comparision"><a>Bar and Smooth Line Chart Compoarision</a></Link>
              </li>
              <li className="menu">
                <Link href="/galery/pie-chart"><a>Pie Chart</a></Link>
              </li>
              <li className="menu">
                <Link href="/galery/doughnut-chart"><a>Doughnut Chart</a></Link>
              </li>
              <li className="menu">
                <Link href="/galery/meter-chart"><a>Meter Chart</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      </div>
    )
  }
}
