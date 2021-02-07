// Mock data object used for LineChart and BarChart

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    data: [
      50,
      20,
      2,
      86,
      71,
      100
    ],
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
  }, {
    data: [
      20,
      10,
      4,
      56,
      87,
      90
    ]
  }, {
    data: [
      30,
      90,
      67,
      54,
      10,
      2
    ]
  }]
}

// Mock data object used for Contribution Graph

const contributionData = [
  { date: '2021-01-01', count: 20 },
  { date: '2021-01-02', count: 10 },
  { date: '2021-01-03', count: 2 },
  { date: '2021-01-04', count: 3 },
  { date: '2021-01-05', count: 40 },
  { date: '2021-01-06', count: 15 },
  { date: '2021-01-30', count: 10 },
  { date: '2021-01-31', count: 3 },
  { date: '2021-01-01', count: 29 },
  { date: '2021-02-02', count: 4 },
  { date: '2021-02-05', count: 0 },
  { date: '2021-02-03', count: 4 }
]

// Mock data object for Pie Chart

const pieChartData = [
  { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
]

// Mock data object for Progress

const progressChartData = [0.4, 0.6, 0.8]

export { data, contributionData, pieChartData, progressChartData }
