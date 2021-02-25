import React, { Component } from "react";
import { MDBAlert} from "mdbreact";
import { MDBDataTable } from 'mdbreact';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import "./index.css";


class App extends Component {
  state = {
    dataLine: {
      labels: [
            "2017-12-01",
            "2017-12-04",
            "2017-12-05",
            "2017-12-06",
            "2017-12-07",
            "2017-12-08",
            "2017-12-11",
            "2017-12-12",
            "2017-12-13",
            "2017-12-14",
            "2017-12-15",
            "2017-12-18",
            "2017-12-19",
            "2017-12-20",
            "2017-12-21",
            "2017-12-22",
            "2017-12-26",
            "2017-12-27",
            "2017-12-28"
        ],
      datasets: [
        {
          label: "Close",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [
               180.42, 184.9, 182.85, 180.8, 182.0, 183.41, 182.25, 181.8,183.03,182.13,182.58,184.73,185.98,187.31,188.08,188.13,190.36,190.19,189.78
          ]
        },
       
      ]
    }
  };
  render() {


  
    return (
        <div className="container-fluild">
          <MDBAlert color="primary">
            <h3 className="mt-5">Fraym FS Position - Skill Test </h3>
            <p>Historical Trends for End of Daily Stock Prices (Plotted with Dates against Close)</p>
          </MDBAlert>
          
           <div className="container-fluild">
            <div className="card p-3">
                <Line data={this.state.dataLine} options={{ responsive: true }} />
              </div>
            </div>
        </div>
    );
  }
}

export default App;
