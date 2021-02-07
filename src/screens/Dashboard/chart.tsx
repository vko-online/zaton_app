import React from 'react'
import { ScrollView, StatusBar, Dimensions, Text } from 'react-native'
import {
  LineChart,
  // BarChart,
  // PieChart,
  ProgressChart
  // ContributionGraph
} from 'react-native-chart-kit'
// import { format } from 'date-fns'
// import { ru } from 'date-fns/locale'

import { data, progressChartData } from './data'
// import 'babel-polyfill'

// in Expo - swipe left to see the following styling, or create your own
const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
}

export default class App extends React.Component {
  renderTabBar () {
    return <StatusBar hidden/>
  }

  render () {
    const width = Dimensions.get('window').width
    const height = 220
    const labelStyle = {
      color: chartConfig.color(),
      marginVertical: 10,
      textAlign: 'center',
      fontSize: 16
    }
    const graphStyle = {
      marginVertical: 8
      // ...chartConfig.style
    }
    return (
      <ScrollView
        key={Math.random()}
        style={{
          backgroundColor: chartConfig.backgroundColor
        }}
      >
        <Text style={labelStyle as any}>Bezier Line Chart</Text>
        <LineChart
          data={data}
          width={width}
          height={height}
          chartConfig={chartConfig}
          bezier
          style={graphStyle}
        />
        <Text style={labelStyle as any}>Progress Chart</Text>
        <ProgressChart
          data={progressChartData}
          width={width}
          height={height}
          chartConfig={chartConfig}
          style={graphStyle}
        />
        <Text style={labelStyle as any}>Bar Graph</Text>
        {/* <BarChart
          width={width}
          height={height}
          data={data}
          chartConfig={chartConfig}
          style={graphStyle}
        />
        <Text style={labelStyle as any}>Pie Chart</Text>
        <PieChart
          data={pieChartData}
          height={height}
          width={width}
          chartConfig={chartConfig}
          accessor='population'
          style={graphStyle}
        />
        <Text style={labelStyle as any}>Line Chart</Text>
        <LineChart
          data={data}
          width={width}
          height={height}
          chartConfig={chartConfig}
          style={graphStyle}
        />
        <Text style={labelStyle as any}>Contribution Graph</Text>
        <ContributionGraph
          getMonthLabel={(i) => format(new Date(2021, i, 1), 'MMM', { locale: ru })}
          values={contributionData}
          width={width}
          height={height}
          endDate={new Date('2016-05-01')}
          chartConfig={chartConfig}
          style={graphStyle}
        /> */}
      </ScrollView>
    )
  }
}
