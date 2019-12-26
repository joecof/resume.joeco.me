import React, {Component} from 'react';
import { Radar } from 'react-chartjs-2';

import './Frontend.css';


class Frontend extends Component {

  data = {
    labels: ["HTML", "CSS", "React js", "JQuery", "Bootstrap"],
    datasets: [{
      label: "Frontend",
      backgroundColor: "rgba(200,0,0,0.2)",
      data: [90, 85, 80, 70, 80]
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
    animation: {
      duration: 3000
    },
    maintainAspectRatio: false
  };

  render() {
    return (
      <div className= "Frontend-container">
        <Radar
            data={this.data}
            width={500}
            height={620}
            options={this.chartOptions}
          />
      </div>
    )
  }
}

export default Frontend;