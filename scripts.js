import jsonFile from "./data.json" assert { type: "json" };

const ctx = document.getElementById("myChart");
const { amount } = jsonFile.reduce((x, y) => (x.amount > y.amount ? x : y));
const objColors = {
  blue: "hsl(186, 34%, 60%)",
  orange: "hsl(10, 79%, 65%)",
  brown: "hsl(28, 10%, 53%)",
};

const colors = jsonFile.map((item) => {
  if (item.amount === amount) {
    return objColors.blue;
  }
  return objColors.orange;
});

new Chart(ctx, {
  type: "bar",
  data: {
    labels: jsonFile.map(({ day }) => day),
    datasets: [
      {
        data: jsonFile.map(({ amount }) => amount),
        backgroundColor: colors,
        borderRadius: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
          showLabelBackdrop: false,
        },
      },
      x: {
        grid: {
          drawTicks: false,
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: objColors.brown,
          padding: 10,
        },
      },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
  },
});
