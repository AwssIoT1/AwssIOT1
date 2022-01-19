import React from 'react'
import {View,StyleSheet,Text,ViewPropTypes} from 'react-native'
import PropTypes from 'prop-types';
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';

const SimpleGaugeCard = (Value:number,Max?:any) => {
    var Value_pc = (Value/Max) * 100
      return (
           <View style={styles.gaugeTop}>
            <AnimatedGaugeProgress
              size={100}
              width={15}
              fill={Value_pc}
              cropDegree={90}
              tintColor="#4682b4"
              backgroundColor="#b0c4de"
            />
            <Text style={styles.Value}>{Value}</Text>
          </View>
        
        );
    }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      height:200,
      width:200
    },
    gaugeTop: {
        flex: 1,
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


  interface SignalPar {
    Value: number
}

  SimpleGaugeCard.propTypes = {
    // style: ViewPropTypes.style,
    Value: PropTypes.number.isRequired,
    Max: PropTypes.number,
  }
  
  SimpleGaugeCard.defaultProps = {
    Max: 100,
    size: 100,
    width: 15,
    fill: 5,
    cropDegree:90,
    tintColor:"#4682b4",
    backgroundColor:"#b0c4de"
   };


  export default SimpleGaugeCard;