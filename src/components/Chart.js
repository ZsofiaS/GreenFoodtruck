import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { LineChart } from 'react-native-chart-kit';
import colours from '../../constants/Colors';

export default function Chart () {

  const reports = useSelector(state => state.order.reports);

  const labels = [];

  reports.forEach((report, i) => {
    labels.push(report.date);
  });

  const datasets = [];

  reports.forEach((data, i) => {
    datasets.push(data.total);
  })

  return(
    <LineChart
      data={{
        labels: labels,
        datasets: [
          {
            data: datasets
          }
        ]
      }}
      width={Dimensions.get("window").width - 30}
      height={220}
      yAxisLabel="£"
      yAxisInterval={3}
      chartConfig={{
        backgroundColor: colours.primaryColor,
        backgroundGradientFrom: colours.accentColor,
        backgroundGradientTo: colours.primaryColor,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: colours.primaryColor
        }
      }}
      onDataPointClick={(value) => console.log(value.value)}
      bezier
      segments={5}
      style={{
        marginVertical: 8,
        marginHorizontal: 15,
        borderRadius: 8
      }}
    />
    )
  }
