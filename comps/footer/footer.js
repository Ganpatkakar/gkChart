import './footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <section className="footer-top">
          <section className="container">
            <section className="row text-center">
              <div className="col-xs-12">
                <div className="company-icons">
                  <a href="https://github.com/Ganpatkakar/Chartjs">
                    <i className="fa fa-github" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="https://plus.google.com/114041444512265862583">
                    <i className="fa fa-google-plus" />
                  </a>
                  <a href="mailto:kakarganpat@gmail.com">
                    <i className="fa fa-envelope" />
                  </a>
                </div>
              </div>
              <div className="col-sm-12">
                Copyright © 2016-2018 Ganpat Kakar
              </div>
            </section>
          </section>
        </section>
      </footer>
    );
  }
}
