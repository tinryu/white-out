"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  scales,
  plugins,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { fa, faker } from '@faker-js/faker';
import { title } from "process";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ChartVerticalBarOne() {
    const options = {
        reponsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        },
       
    }
    const labels = ['Phones', 'Laptops', 'Headsets', 'Games', 'Keyboardsy', 'Monitors', 'Speakers'];
    const data = {
        labels,
        datasets: [{
            label: '',
            data: labels.map(() => faker.number.int({ min: 0, max: 16000 })),
            backgroundColor: [
                'rgba(186, 237,189, 1)',
                'rgba(198, 199,248, 1)',
                'rgba(0, 0,0, 1)',
                'rgba(177, 227,255, 1)',
                'rgba(149, 164,252, 1)',
                'rgba(161, 227,203, 1)',
                'rgba(168, 197,218, 1)'
            ],
            barPercentage: .4,
            borderRadius: 5
          }
        ]
    }
  return <Bar options={options} data={data} />;
}

export default ChartVerticalBarOne;
