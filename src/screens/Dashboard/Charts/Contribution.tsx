import React from 'react'
import { ScrollView } from 'react-native'
import {
  ContributionGraph
} from 'react-native-chart-kit'
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { width } from 'src/constants/Layout'

import { contributionData } from '../data'
import Container from 'src/components/Card/Container'

const height = 200

const chartConfig: AbstractChartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(83, 51, 237, ${opacity})`,
  labelColor: () => '#444',
  paddingTop: 0
}

export default function Component () {
  return (
    <Container empty={false} emptyText='' id='contribution' title='Активность'>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ContributionGraph
          tooltipDataAttrs={(v) => ({})}
          getMonthLabel={(i) => format(new Date(2021, i, 1), 'MMM', { locale: ru })}
          values={contributionData}
          width={width}
          // endDate={new Date()}
          numDays={60}
          height={height}
          chartConfig={chartConfig}
        />
      </ScrollView>
    </Container>
  )
}
