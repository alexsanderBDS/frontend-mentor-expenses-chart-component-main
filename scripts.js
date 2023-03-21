import jsonFile from "./data.json" assert { type: "json" };

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: jsonFile.map(({ day }) => day),
    datasets: [
      {
        label: "# of Votes",
        data: jsonFile.map(({ amount }) => amount),
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
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
