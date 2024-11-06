import React, {useEffect} from 'react';
// import {Section} from './Section';ß
import { Text, View } from 'react-native';
// import DeviceInfo from 'react-native-device-info';ß

const Device = () => {
    console.log('Hello device!');
  useEffect(() => {
    // Get the device's unique ID (IMEI on Android, IDFV on iOS)

    // const uniqueId = DeviceInfo.getUniqueId();
    // console.log('Unique ID:', uniqueId);

    // // Get the device's model (e.g., iPhone X, Samsung Galaxy S10)
    // const deviceModel = DeviceInfo.getModel();
    // console.log('Device Model:', deviceModel);

    // // Get the device's brand (e.g., Apple, Samsung)
    // const deviceBrand = DeviceInfo.getBrand();
    // console.log('Device Brand:', deviceBrand);

    // // Get the device's system name (e.g., iOS, Android)
    // const systemName = DeviceInfo.getSystemName();
    // console.log('System Name:', systemName);

    // // Get the device's system version (e.g., 14.5, 11)
    // const systemVersion = DeviceInfo.getSystemVersion();
    // console.log('System Version:', systemVersion);
  }, []);
  return (
    <View>
        <Text>abc</Text>
        </View>
  );
};

export default Device;
