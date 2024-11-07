/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import type {PropsWithChildren} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import Fundamental from './src/components/Fundamental';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DeviceInfoComponent from './src/components/DeviceInfo';

export type SectionProps = PropsWithChildren<{
  title: string;
}>;

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{flex: 1, gap: 5, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Device detail"
        onPress={() => navigation.navigate('Device_info')}
      />
      <Button
        title="Miscellaneous"
        onPress={() => navigation.navigate('Miscellaneous')}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: {backgroundColor: 'tomato'},
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Thomas App',
      },
    },
    Device_info: DeviceInfoComponent,
    Miscellaneous: Fundamental,
  },
});

const Navigation = createStaticNavigation(RootStack);

console.log('DOM loaded!');

export default function App() {
  return <Navigation />;
}

// export default App;
