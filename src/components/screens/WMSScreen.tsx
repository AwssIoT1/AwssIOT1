import * as React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  import {React$Node} from '../../App/TypesAndInterfaces/AppTypes';
  import Header from '../Header/Header'
  type CompProps = {
    children: React$Node | string | (string | React$Node)[];
    title: string;
  }
  const Screen2: (props: CompProps) => React$Node = ({title}): React$Node => {
    return (
        <View >
        <Header title="WMS"  >{title}</Header>
         
        <ScrollView >
        <Text>Screen2</Text>
        </ScrollView>
      </View>
        );
    }
  export default Screen2;