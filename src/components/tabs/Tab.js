import React, { Component } from 'react';
import Footer from '../../components/footer/Footer';

const google=window.google;

class Tab extends Component {
  
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2013',  1000,      400],
        ['2014',  1170,      460],
        ['2015',  660,       1120],
        ['2016',  1030,      540]
      ]);

      var options = {
        title: 'Company Performance',
        hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0}
      };

      var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
  }
  render() {
    return (
      <div className="container">
        <ul className="nav nav-tabs">
          <li className="active"><a data-toggle="tab" href="#OVERVIEW">OVERVIEW</a></li>
          <li><a data-toggle="tab" href="#PRACTICES">TOP PRACTICES</a></li>
          <li><a data-toggle="tab" href="#OUTCOMES">OUTCOMES</a></li>
        </ul>

        <div className="tab-content">
          <div id="OVERVIEW" className="tab-pane fade in active">
            <p>Your Organization health looks good this month!<strong>78</strong><span className="glyphicon glyphicon-triangle-top"></span>10%</p>
            <div id="chart_div" style={{"width": "100%", "height": "500px"}}></div>
            <Footer/>
          </div>
          <div id="PRACTICES" className="tab-pane fade">
            <ul className="nav nav-tabs">
              <li><a data-toggle="tab" href="#">TOP PRACTICES</a></li>
              <li style={{"float": "right", "borderColor": "#eee #eee #ddd", "backgroundColor": "#eee"}}><a data-toggle="tab" href="#">Top numbers <span className="caret"></span></a></li>
            </ul>
            <ul className="list-group" style={{"textAlign": "left"}}>
              <li className="list-group-item">Personal ownership
              <span className="text-right">98</span>
              <br/>
              <br/>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{"width":"98%"}}>
                </div>
              </div>
              </li>
              <li className="list-group-item">People perf.review.
              <span className="text-right">93</span>
              <br/>
              <br/>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{"width":"93%"}}>
                </div>
              </div>
              </li>
              <li className="list-group-item">Talent Aquisition.
              <span className="text-right">89</span>
              <br/>
              <br/>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{"width":"89%"}}>
                </div>
              </div>
              </li>
              <li className="list-group-item">Supportive leadership.
              <span className="text-right">89</span>
              <br/>
              <br/>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{"width":"89%"}}>
                </div>
              </div>
              </li>
              <li className="list-group-item">Challenging leadership.
              <span className="text-right">87</span>
              <br/>
              <br/>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{"width":"87%"}}>
                </div>
              </div>
              </li>
            </ul>
          </div>
          <div id="OUTCOMES" className="tab-pane fade">
            <ul className="nav nav-tabs">
              <li><a data-toggle="tab" href="#">Overall Outcomes</a></li>
              <li style={{"float": "right"}}><a data-toggle="tab" href="#">Fortnightly comparison <span className="caret"></span></a></li>
            </ul>
            <table className="table" border="1" BORDERCOLOR="grey">
              <thead>
                <tr>
                  <th>Outcomes</th>
                  <th className="text-center">Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ul>
                      <li className="list-group-item text-left">
                        <span className="glyphicon glyphicon-chevron-right text-left-icon"></span>
                        <span className="text-margin">Direction</span>
                        <span className="text-right">87</span>
                        <br/>
                        <br/>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{"width":"87%"}}>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td>+6</td>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li className="list-group-item text-left">
                        <span className="glyphicon glyphicon-chevron-right text-left-icon"></span>
                        <span className="text-margin">Leadership.</span>
                        <span className="text-right">65</span>
                        <br/>
                        <br/>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{"width":"65%"}}>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td>-5</td>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li className="list-group-item text-left">
                        <span className="glyphicon glyphicon-chevron-right text-left-icon"></span>
                        <span className="text-margin">Work Environment.</span>
                        <span className="text-right">68</span>
                        <br/>
                        <br/>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{"width":"68%"}}>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td>+5</td>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li className="list-group-item text-left">
                        <span className="glyphicon glyphicon-chevron-right text-left-icon"></span>
                        <span className="text-margin">Accountability</span>
                        <span className="text-right">20</span>
                        <br/>
                        <br/>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{"width":"20%"}}>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td>+6</td>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li className="list-group-item text-left">
                        <span className="glyphicon glyphicon-chevron-right text-left-icon"></span>
                        <span className="text-margin">Coordination & Control</span>
                        <span className="text-right">59</span>
                        <br/>
                        <br/>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{"width":"59%"}}>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td>-5</td>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li className="list-group-item text-left">
                        <span className="glyphicon glyphicon-chevron-right text-left-icon"></span>
                        <span className="text-margin">Capabilities</span>
                        <span className="text-right">25</span>
                        <br/>
                        <br/>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{"width":"25%"}}>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td>+5</td>
                </tr>
              </tbody>
            </table>            
          </div>
        </div>
      </div>
    );
  }
}

export default Tab;
