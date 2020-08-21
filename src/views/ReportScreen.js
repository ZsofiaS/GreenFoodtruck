import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import { LineChart } from 'react-native-chart-kit';
import colours from '../../constants/Colors';

export default function ReportScreen () {

  const reports = useSelector(state => state.order.reports);
  const labels = [];
  reports.forEach((report, i) => {
    labels.push(report.date);
  });
  const datasets = [];
  reports.forEach((data, i) => {
    datasets.push(data.total);
  })

      return (
        <View style={styles.scrollContainer}>
          <Text style={styles.orderTitle}>Sales report</Text>
          <View style={styles.chartContainer}>
          <LineChart
            data={{
              labels: labels,
              datasets: [
                {
                  data: datasets
                }
              ]
            }}
            width={Dimensions.get("window").width - 30} // from react-native
            height={220}
            yAxisLabel="£"
            yAxisInterval={3} // optional, defaults to 1
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
                stroke: "#ffa726"
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
          </View>
          {/*
          <View style={styles.listContainer}>
            {
              reports.map((report, i) => {
                return(
                  <View key={i}>
                    <Text>{report.date}: £{report.total}</Text>
                  </View>
                )
              })
            }
          </View>
          */}
        </View>
      );
}

const styles = StyleSheet.create({
  scrollContainer: {
      backgroundColor: 'white',
  },
  orderTitle: {
    fontSize: 27,
    textAlign: 'center',
    marginVertical: 20,
    color: colours.primaryColor
  },
  listContainer: {
    marginVertical: 20,
    marginHorizontal: 20
  }
})
