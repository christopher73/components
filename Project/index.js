import Chart from 'chart.js';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

class Project extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      title: this.props.project.title,
      gitLink: this.props.project.gitLink,
      externalLink: this.props.project.externalLink,
      desc: this.props.project.desc,
      descLong: this.props.project.descLong,
      chartPower: this.props.project.chartPower,
      pictureLink: this.props.project.pictureLink,
    };
  }

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d');
    new Chart(myChartRef, this.state.chartPower);
  }
  chartRef = React.createRef();
  render() {
    let styloLink = {
      color: 'rgb(2, 115, 115)',
      marginLeft: '20px',
      float: 'right',
    };

    return (
      <div style={this.props.stylo} className="w-100">
        <div className="container">
          <div className="row my-3">
            <div className="col-md-12 m-auto ">
              <h3 className="my-2">
                {this.state.title}
                <a
                  style={styloLink}
                  href={this.state.gitLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  style={styloLink}
                  href={this.state.externalLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-12 col-12">
              <p
                className="h5 font-weight-lighter"
                style={{ lineHeight: '1.3' }}
              >
                {this.state.desc}
              </p>
              {this.state.descLong.map(function(elem, i) {
                return (
                  <p
                    className="h5 font-weight-lighter"
                    style={{ lineHeight: '1.3' }}
                    key={i}
                  >
                    {elem}
                  </p>
                );
              })}
            </div>

            <div className="col-md-6 col-sm-12 col-12 text-center">
              <img
                style={{ height: '400px', maxWidth: '100%' }}
                src={this.state.pictureLink}
                alt={this.state.title}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 col-12 m-auto py-3">
              <canvas id="myChart" ref={this.chartRef} />
            </div>
          </div>
        </div>{' '}
      </div>
    );
  }
}
export default Project;
