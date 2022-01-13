import * as React from 'react';
import { Text, View } from 'react-native';
import usePusher from 'provider/pusher';

function HomeScreen() {
  const {Power_MW}=usePusher();
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>New Home Yeah!!!</Text>
        <Text>Lets Rock!!!</Text>
        <Text>{Power_MW}</Text>
      </View>
    );
  }

  export default HomeScreen;

  