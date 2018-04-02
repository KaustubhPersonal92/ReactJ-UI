import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><a>OHI LIVE</a></li>
              <li><a>Date</a></li>
              <li><a><span className="glyphicon glyphicon-download-alt"></span></a></li>
              <li><a><span className="  glyphicon glyphicon-random"></span></a></li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li><a><span className="glyphicon glyphicon-stop"></span> Top Quartile</a></li>
            <li><a><span className="glyphicon glyphicon-stop"></span> Quartile 2</a></li>
            <li><a><span className="glyphicon glyphicon-stop"></span> Quartile 3</a></li>
            <li><a><span className="glyphicon glyphicon-stop"></span> Bottom Quartile</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
