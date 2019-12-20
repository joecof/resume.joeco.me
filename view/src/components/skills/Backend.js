import React, {Component} from 'react';
import { Radar } from 'react-chartjs-2';

import './Backend.css';


class Backend extends Component {

  data = {
    labels: ["C++", "Java", ".NET", "Javascript", "C"],
    datasets: [{
      label: "Languages",
      backgroundColor: "rgba(0,0,200,0.2)",
      data: [75, 80, 40, 85, 60]
    }]
  };

  chartOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 100,
        stepSize: 20
      },
      pointLabels: {
        fontSize: 18
      }
    },
    maintainAspectRatio: false
  };


  render() {
    return (
      <div className= "Backend-container">
        <Radar
            data={this.data}
            width={500}
            height={800}
            options={this.chartOptions}
          />
      </div>
    )
  }
}

export default Backend;