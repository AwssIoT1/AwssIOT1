import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';

const SimpleGauge = () => {
    var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
      return (
        // <View style={styles.container}>
          <View style={styles.gaugeTop}>
            <AnimatedGaugeProgress
              size={100}
              width={15}
              fill={RandomNumber}
              cropDegree={90}
              tintColor="#4682b4"
              backgroundColor="#b0c4de"
            />
            <Text style={styles.Value}>{RandomNumber}</Text>
          </View>
         
        // </View>
      );
    }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   borderWidth: 1,
    //   height:100,
    //   width:100
    },
    gaugeTop: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        height:100,
         width:100,
        margin:1,
    },
    rowItem: {
      flex: 0.2,
      alignItems: 'center',
    },
    gaugeBottom: {
      flexDirection: 'row',
      paddingTop: 20,
    },
    Value:{
    textAlign:'center'
    }
  });

  export default SimpleGauge;