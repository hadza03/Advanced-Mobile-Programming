import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import DeviceCard from '../components/DeviceCard';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function DashboardScreen() {
  const devices = useSelector((state) => state.devices.devices);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212', paddingTop: 20 }}>
      <Text style={{ fontSize: 24, textAlign: 'center',color:'#fff', marginBottom: 10 }}>Your Devices</Text>
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <DeviceCard device={item} />}
      />
    </SafeAreaView>
  );
}
