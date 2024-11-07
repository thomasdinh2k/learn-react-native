import React, {useEffect, useState} from 'react';
// import {Section} from './Section';ß
import {FlatList, StyleSheet, Text, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Section} from './Section';
// import DeviceInfo from 'react-native-device-info';ß

const Device = () => {
  const [deviceInfo, setDeviceInfo] = useState<{key: string; value: string}[]>(
    [],
  );

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      try {
        // Get the device's unique ID (IMEI on Android, IDFV on iOS)
        const uniqueId = await DeviceInfo.getUniqueId();
        // Get the device's model (e.g., iPhone X, Samsung Galaxy S10)
        const deviceModel = await DeviceInfo.getModel();
        // Get the device's brand (e.g., Apple, Samsung)
        const deviceBrand = await DeviceInfo.getBrand();
        // Get the device's system name (e.g., iOS, Android)
        const systemName = await DeviceInfo.getSystemName();
        // Get the device's system version (e.g., 14.5, 11)
        const systemVersion = await DeviceInfo.getSystemVersion();
        // Tell if device is a tablet
        const isTablet = await DeviceInfo.isTablet();

        setDeviceInfo([
          {
            key: 'device_id',
            value: uniqueId,
          },
          {
            key: 'device_model',
            value: deviceModel,
          },
          {
            key: 'device_brand',
            value: deviceBrand,
          },
          {
            key: 'system_name',
            value: systemName,
          },
          {
            key: 'system_version',
            value: systemVersion,
          },
          {
            key: 'is_tablet',
            value: isTablet ? 'Yes' : 'No',
          },
        ]);
      } catch (error) {
        console.error('Error fetching device info:', error);
      }
    };

    fetchDeviceInfo();
  }, []);

  const FlatListStyles = StyleSheet.create({
    container: {
      padding: 16,
    },
    item: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    itemSpecial: {
      flexDirection: 'row',
      marginBottom: 8,
      fontWeight: 'bold',
      color: 'red',
    },
    keyText: {
      fontWeight: 'bold',
    },
    valueText: {
      marginLeft: 4,
    },
  });

  return (
    <>
      <Section title="Device Info">
        <View>
          <FlatList
            data={deviceInfo}
            renderItem={({item}) => (
              <>
                <Text
                  style={
                    item.key === 'is_tablet'
                      ? FlatListStyles.itemSpecial
                      : FlatListStyles.keyText
                  }>
                  {item.key}
                </Text>
                <Text style={FlatListStyles.item}>{item.value}</Text>
              </>
            )}
          />
        </View>
      </Section>
    </>
  );
};

export default Device;
