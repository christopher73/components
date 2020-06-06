import React from 'react';
import { Link } from 'react-router-dom';
//'#026670'
function ProjectList(props) {
  return (
    <div>
      <div className="row my-3">
        <div
          className="col-md-12  text-left"
          style={{
            backgroundColor: 'rgba(2, 102, 112, .7)',
          }}
        >
          {/* px-md-3 px-sm-0 px-0 */}
          <p className="h4 m-0 py-3 text-white">
            {props.project.title}{' '}
            <Link
              type="button"
              style={{ backgroundColor: '#fce181', color: '#8C4A7B' }}
              className="btn btn-sm float-right "
              to={props.project.localLink}
            >
              Learn more ...
            </Link>
          </p>
        </div>
        <div className="col-md-6  text-right "></div>
      </div>
      <div className="row">
        <div className="col-md-11 m-auto text-left">
          <h5 className="text-left ">Description:</h5>
          <ul>
            {props.project.descLong.map(function(elem, i) {
              return (
                <li key={i} className="my-2 ">
                  {elem}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-11 m-auto text-left">
          <h5 className="text-left">Technologies:</h5>
          <div className="container w-100">
            <div className="row">
              {props.project.chartPower.data.labels.map(function(
                elem,
                i,
              ) {
                return (
                  <div
                    key={i}
                    className="col-md-2 col-sm-4 col-3 m-auto text-center"
                  >
                    <img
                      className="m-1"
                      alt={elem}
                      style={{ width: '100%', height: '100%' }}
                      src={`./assets/img/icons/${elem}`}
                    ></img>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectList;
