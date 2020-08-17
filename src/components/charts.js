import { mdbPieChart,mdbBarChart,mdbLineChart,mdbRadarChart}  from "mdbvue";
import router from "@/router/index.js";
import Menu from "@/components/Menu.vue";
  export default {
    name: "ChartPage2",
    components: {
        mdbPieChart,
        mdbBarChart,
        mdbLineChart,
        mdbRadarChart,
        Menu
    },
    data() {
      return {
        pieChartData: {
            labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
            datasets: [
              {
                data: [300, 50, 100, 40, 120],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
              }
            ]
          }, //here
        barChartData: {
          labels: [
            "Red",
            "Blue",
            "Yellow",
            "Green",
            "Purple",
            "Orange",
            "Brown",
            "Pink" ,
            "Yellow",
            "Green",
            "Purple",
            "Brown",
            "Pink" ,
            "Yellow",
            "Green",
            "Purple",
          ],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3 , 4, 6 ,9,4,2],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                
              ],
              borderWidth: 1
            }
          ]
        }, //here
        lineChartData: {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July"
            ],
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: "rgba(255, 99, 132, 0.1)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 0.7,
                data: [65, 59, 80, 81, 56, 55, 40]
              },
              {
                label: "My Second dataset",
                backgroundColor: "rgba(151,187,205,0.2)",
                borderColor: "rgba(151,187,205,1)",
                borderWidth: 0.8,
                data: [28, 48, 40, 19, 86, 27, 90]
              }
            ]
          },// here
          radarChartData: {
            labels: [
              "Eating",
              "Drinking",
              "Sleeping",
              "Designing",
              "Coding",
              "Cycling",
              "Running"
            ],
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: "rgba(255, 99, 132, 0.1)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 0.7,
                data: [65, 59, 90, 81, 56, 55, 40]
              },
              {
                label: "My Second dataset",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 0.7,
                data: [28, 48, 40, 19, 96, 27, 100]
              }
            ]
          },//here
          radarChartOptions: {
            responsive: false,
            maintainAspectRatio: false
          },
          lineChartOptions: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)"
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)"
                  }
                }
              ]
            }
          },
        barChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                barPercentage: 1,
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ]
          }
        },
        pieChartOptions: {
            responsive: false,
            maintainAspectRatio: false,
            plugins: {
              datalabels: {
                color: "white",
                align: "center",
                font: {
                  size: 16
                },
                formatter: value => {
                  const [dataset] = this.pieChartData.datasets;
                  const setValue = dataset.data.reduce((a, b) => a + b);
  
                  return `${Math.round((value / setValue) * 100)}%`;
                }
              }
            }
        }
      };
    },
    methods: {
     goBack (){
       router.replace("/logbook")
    }
    }
  };