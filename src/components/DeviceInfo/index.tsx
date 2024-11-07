import React from 'react';
import {Header} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {
  useColorScheme,
  SafeAreaView,
  StatusBar,
  View,
  Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Device from './Device';

function DeviceInfoComponent(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Device />
        </View>
        <Button
          title="Device Info.... again"
          onPress={() => navigation.push('Device_info')}
        />
      </SafeAreaView>
    </>
  );
}

export default DeviceInfoComponent;
