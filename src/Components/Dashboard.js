import { GrGallery } from "react-icons/gr";
import { IoMdDocument } from "react-icons/io";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import {Line, Pie} from 'react-chartjs-2'
import lineData from "../data/line.json"
import pieData from "../data/pie.json"

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";




const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="cardsReport">
        <div className="displayCard">
          <GrGallery className="cardSvg svgIcon-large" />
          <div className="cardInfo">
            <p>Gallery</p>
            <h2>4</h2>
          </div>
        </div>
        <div className="displayCard">
          <IoMdDocument className="cardSvg svgIcon-large" />
          <div className="cardInfo">
            <p>Document</p>
            <h2>4</h2>
          </div>
        </div>
      </div>
      <div className="chartBox">
        <div className="lineChart">
          <Line
            data={{
              labels: lineData.map((item) => item.label),
              datasets: [
                {
                  label: "Wadood",
                  data: lineData.map((data) => data.progressW),
                  backgroundColor: "rgba(75, 192, 192, 0.2)",
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 3,
                },
                {
                  label: "Muzzammil",
                  data: lineData.map((data) => data.progressM),
                  backgroundColor: [
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                  ],
                  borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 132, 1)",
                  ],
                  borderWidth: 3,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Monthly Progress",
                },
              },
            }}
          />
        </div>
        <div className="pieChart">
          <Pie
            data={{
              labels: pieData.map((item) => item.label),
              datasets: [
                {
                  label: "Wadood",
                  data: pieData.map((data) => data.progress),
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "All student Performance",
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
