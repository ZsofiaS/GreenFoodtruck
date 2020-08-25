import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { LineChart } from 'react-native-chart-kit';
import colours from '../../constants/Colors';
import Chart from '../components/Chart';

export default function ReportScreen () {

  const reports = useSelector(state => state.order.reports);

  useEffect(() => {
    const labels = [];
    reports.forEach((report, i) => {
      labels.push(report.date);
    });
    const datasets = [];
    reports.forEach((data, i) => {
      datasets.push(data.total);
    })
  }, []);

  return (
        <View style={styles.scrollContainer}>
          <Text style={styles.orderTitle}>Sales report</Text>
          <View style={styles.chartContainer}>
            <Chart />
          </View>
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
  }
})
