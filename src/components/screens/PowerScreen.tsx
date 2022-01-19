import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import UsePusher from 'provider/pusher';
import SimpleGaugeCard from 'components/Types/SimpleGaugeCard'
import SimpleGauge from 'components/Types/simpleGauge';


function PowerScreen() {
  const {Power_MW}=UsePusher();

    return (
      // style={styles.container}
      <View style={styles.container}>
        <SimpleGauge 
        />
        <SimpleGauge 
        />
        <SimpleGauge 
        />
        <SimpleGauge 
        />      
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      // justifyContent: "space-around",
      // justifyContent: 'center',
      // alignItems: 'center',
      // borderWidth: 1,
    
      
    }
}
);


  export default PowerScreen;

  