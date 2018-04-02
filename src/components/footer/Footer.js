import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="tab-content">
          <div id="OVERVIEW" className="tab-pane fade in active">
            <p>Response Rate</p>
          </div>
          <div id="OVERVIEW" className="tab-pane fade in active">
            <p>83% 2100/2500 respondants</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
