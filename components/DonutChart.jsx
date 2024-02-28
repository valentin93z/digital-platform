import ApexCharts from "apexcharts";


const DonutChart = ({ chartId, title, data }) => {


  const getChartOptions = () => {
    return {
      series: [data?.completed?.length, data?.assigned?.length, 0, 0],
      colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
      chart: {
        height: 260,
        width: "100%",
        type: "donut",
      },
      stroke: {
        colors: ["transparent"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: 20,
              },
              total: {
                showAlways: true,
                show: true,
                label: 'Статистика',
                fontFamily: "Inter, sans-serif",
                formatter: function (w) {
                  const sum = w.globals.seriesTotals.reduce((a, b) => {
                    return a + b
                  }, 0)
                  return title;
                },
              },
              value: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: -20,
                formatter: function (value) {
                  return value
                },
              },
            },
            size: "80%",
          },
        },
      },
      grid: {
        padding: {
          top: -2,
        },
      },
      labels: ["Пройденные", "Назначенные", "В процессе", "Непройденные"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            return value
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    }
  }
  
  if (document.getElementById(chartId) && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(document.getElementById(chartId), getChartOptions());
    chart.render();
  }
  

  return (
    <div>
      <div className="max-w-[320px] w-full bg-white rounded-lg shadow dark:bg-neutral-800 p-4 md:p-6">
          {/* <!-- Donut Chart --> */}
          <div className="py-2" id={chartId}></div>
          <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"></div>
      </div>
    </div>
  )
}

export default DonutChart;