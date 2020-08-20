import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import { useSelector } from 'react-redux';

export default function ReportScreen () {

  const reports = useSelector(state => state.order.reports);

      return (
        <View style={styles.scrollContainer}>
            {
              reports.map((report, i) => {
                return(
                  <View key={i}>
                    {
                      Object.keys(report).map(key => {
                        return(
                          <View key={key}>
                            <Text>{key} £{report[key]}</Text>
                          </View>
                        )
                      })
                    }
                  </View>
                )
              })
            }
        </View>
      );
}

const styles = StyleSheet.create({
  scrollContainer: {
      backgroundColor: 'white',
  },
  orderTitle: {
    fontSize: 20,
    textAlign: 'left',
    marginVertical: 5
  }
})
