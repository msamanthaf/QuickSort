import * as React from 'react';
<<<<<<< HEAD


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';

import { useState } from 'react';


import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#005555",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];
  
  
  const LineChartYear = () => {
    return (
      <LineChart
      data={{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ]
          }
        ]
      }}
      width={(Dimensions.get("window").width)*0.95} // from react-native
      height={(Dimensions.get("window").height)*0.4}
      yAxisLabel="$"
      yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
      bezier
      style={{
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 16,
        left: (Dimensions.get("window").width)*0.025,
  
      }}
    />
    )
  }
  
  
  const LineChartWeek = () => {
    return (
    <LineChart
      data={{
        labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ]
          }
        ]
      }}
      width={(Dimensions.get("window").width)*0.95} // from react-native
      height={(Dimensions.get("window").height)*0.4}
      yAxisLabel="$"
      yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
      bezier
      style={{
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 16,
        left: (Dimensions.get("window").width)*0.025,
  
      }}
    />
    )
  }
  
  const LineChartMonth = () => {
    return (
      <LineChart
      data={{
        labels: ["1 - 7", "8 - 14", "15 - 21", "21 - end"],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ]
          }
        ]
      }}
      width={(Dimensions.get("window").width)*0.95} // from react-native
      height={(Dimensions.get("window").height)*0.4}
      yAxisLabel="$"
      yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
      bezier
      style={{
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 16,
        left: (Dimensions.get("window").width)*0.025,
  
      }}
    />
    )
  }
  
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
  };
  
  const styleProfile = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    userName: {
      marginTop:10,
      marginLeft: 20,
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    userEmail: {
      marginLeft: 20,
      fontSize: 18,
      color: 'gray',
    },
  });
  const ProfileNavigation = () => {
    return (
      <View style={styleProfile.container}>
        <Text style={styleProfile.userName}>{user.name}</Text>
        <Text style={styleProfile.userEmail}>{user.email}</Text>
      </View>
    );
  
  };
  const LogOut = () => {
    return (
      <View style={styleProfile.container}>
        <Text style={styleProfile.userEmail}>Log Out </Text>
      </View>
    );
  
  };
  
  

export default function ProfileScreen({ navigation }: any) {
    const [activeChart, setActiveChart] = useState(1);
  const ButtonChoices = () => {
    const toggleChart = (chartNumber) => {
      setActiveChart(chartNumber);
    };
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: (Dimensions.get("window").width)*0.96,
        left: (Dimensions.get("window").width)*0.02
      },
      button: {
        backgroundColor: '#3498db',
        padding: 15,
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 1,
      },
      buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
      },
    });
    return (
      <SafeAreaView style = {styles.container}>
        <TouchableOpacity
        style={styles.button}
        onPress={() => toggleChart(1)}
      >
        <Text style={styles.buttonText}>Last Year</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => toggleChart(2)}
      >
        <Text style={styles.buttonText}>Last Month</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => toggleChart(3)}
      >
        <Text style={styles.buttonText}>Last Week</Text>
      </TouchableOpacity>
        
        
        </SafeAreaView>
    )
  }
  
    return (
        <ScrollView>
      <ProfileNavigation></ProfileNavigation>
      
      {activeChart == 1 && <LineChartYear/>}
      {activeChart == 2 && <LineChartMonth/>}
      {activeChart == 3 && <LineChartWeek/>} 
      <ButtonChoices></ButtonChoices>
      
      

  

<PieChart
  data={data}
  width={(Dimensions.get("window").width)*0.95}
  height={(Dimensions.get("window").height)*0.25}
  chartConfig={{
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  }}
  accessor={"population"}
  backgroundColor={ '#f8f'}
  paddingLeft="15"
  
  center={[10, 10]}
  style = {{
    borderRadius: 16,
    left: (Dimensions.get("window").width)*0.025,
    marginTop: 50,
  }}
/>

<LogOut></LogOut>

</ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
      borderRadius: 16
    }, 
    
  });
=======
import { View, Text } from 'react-native';

export default function ProfileScreen({ navigation }: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Profile Screen</Text>
        </View>
    );
}
>>>>>>> fafee5974f15057d14c0a25783aa207381f59cf8
