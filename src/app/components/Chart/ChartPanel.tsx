import {
  ChartLine,
  ChartVerticalBar,
  ChartHorizontalBar,
  ChartStackedBar,
  ChartGroupedBar,
  ChartArea,
  ChartMultiaxisLine,
  ChartPie,
  ChartDoughNut,
  ChartPolarArea,
  ChartRadar,
  ChartScatter,
  ChartBubble,
  ChartMultitype,
  ChartEvents,
  ChartRef,
  ChartGradient,
} from "./Chart";

const ChartPanel = () => {
  return (
    <>
      <div>
        <ChartDoughNut />
      </div>
      <div>
        <ChartPolarArea />
      </div>
      <div>
        <ChartPie />
      </div>
      <div>
        <ChartMultitype />
      </div>
      <div>
        <ChartEvents />
      </div>
      <div>
        <ChartRef />
      </div>

      <div>
        <ChartScatter />
      </div>
      <div>
        <ChartBubble />
      </div>
      <div>
        <ChartStackedBar />
      </div>
      <div>
        <ChartGroupedBar />
      </div>
      <div>
        <ChartMultiaxisLine />
      </div>
      <div>
        <ChartLine />
      </div>
      <div>
        <ChartVerticalBar />
      </div>
      <div>
        <ChartRadar />
      </div>
      <div>
        <ChartHorizontalBar />
      </div>
      <div>
        <ChartGradient />
      </div>
      <div>
        <ChartArea />
      </div>
    </>
  );
};

export default ChartPanel;
