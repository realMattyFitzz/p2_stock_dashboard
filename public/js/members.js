console.log("linked!")

function sanitizeStockData(stocks) {
  const stockData = {};
  for (date in stocks) {
    const stock = stocks[date];
    //moment gives us the current month
    const month = moment(date).format("MMMM");
    // If month does not exist in stockData set it to empty array
    if (stockData[month] === undefined) {
      stockData[month] = [];
    }
    stockData[month].push({
      open: +stock["1. open"],
      high: +stock["2. high"],
      low: +stock["3. low"],
      close: +stock["4. close"],
      volume: +stock["5. volume"],
      date: date,
    });
  }
  return stockData;
}

const config = {
  type: "line",
  data: {
    labels: [],
    datasets: [],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Month",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Value",
          },
        },
      ],
    },
  },
};

function cb(){
  $.ajax({
    url: "/api/stocks",
    method: "GET",
  }).then(function (response) {
    console.log(response)
    const stocks = response["Time Series (Daily)"];
    const stockData = sanitizeStockData(stocks);
    const labels = Object.keys(stockData).reverse();
  
    const vals = labels.map((month) => {
      
      const stocks = stockData[month];
  
      const averageCloseValue =
        stocks.reduce((x, y) => ({ close: x.close + y.close }), {
          close: 0,
        }).close / stocks.length;
  
      return averageCloseValue.toFixed(2);
    });
  
    const ctx = document.getElementById("canvas").getContext("2d");
    config.data.labels = labels;
    config.data.datasets.push({
      label: "Microsoft",
      backgroundColor: window.chartColors.red,
      borderColor: window.chartColors.red,
      data: vals,
      fill: false,
    });
    window.myLine = new Chart(ctx, config);
  });

};
cb()
