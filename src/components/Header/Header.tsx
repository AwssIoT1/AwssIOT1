import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {React$Node} from '../../App/TypesAndInterfaces/AppTypes';
import HeaderStyle from '../../Styles/HeaderStyle';

type CompProps = {
  children: React$Node | string | (string | React$Node)[];
  title: string;
}

const Header = (props: CompProps) => {
  return (
    <View style={HeaderStyle.header}>
      <Text>{props.title}</Text>
    </View>
  );

};


Header.defaultProps = {
    title: 'Solar Energy Monitoring'
}



export default Header;
