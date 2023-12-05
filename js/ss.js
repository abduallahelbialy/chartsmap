const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'choropleth',
    data: {
      datasets: [{
        label: 'Access to Clean Water',
        data:[{
          feature: {
            type: 'country',
            properties: {
              name: 'USA'
            }
          },
          80
        }, {
          feature: {
            type: 'country',
            properties: {
              name: 'Canada'
            }
          },
          90
        }, {
          feature: {
            type: 'country',
            properties: {
              name: 'Mexico'
            }
          },
          70
        }],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      title: {
        text: 'Access to Clean Water'
      },
      scales: {
        width: 800,
        height: 600,
        padding: 10
      },
      plugins: {
        datalabels: {
          display: true,
          anchor: 'center',
          align: 'start',
          clamp: true
        },
        geo: {
          enabled: true,
          weight: 1,
          color: 'rgba(255, 99, 132, 1)',
          outlineColor: 'rgba(255, 99, 132, 0.5)',
          graticule: {
            enable: true,
            lineString: false,
            stroke: 'rgba(255, 99, 132, 0.5)'
          }
        }
      }
    }
  });
