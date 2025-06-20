import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { togglePower, increaseVolume, decreaseVolume } from '../redux/slices/devicesSlice';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function DeviceCard({ device }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('SpeakerDetails', { id: device.id })}>
      <View style={styles.card}>
        <Text style={styles.name}>{device.name}</Text>
        <Text style={[styles.status, { color: device.isOn ? '#4CAF50' : '#F44336' }]}>
          {device.isOn ? 'Online' : 'Offline'}
        </Text>
        <Text style={styles.volume}>Volume: {device.volume}</Text>

        <View style={styles.controls}>
          <TouchableOpacity onPress={() => dispatch(decreaseVolume(device.id))}>
            <Feather name="volume-1" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dispatch(togglePower(device.id))}>
            <FontAwesome name="power-off" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dispatch(increaseVolume(device.id))}>
            <Feather name="volume-2" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e1e1e',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    marginBottom: 8,
  },
  volume: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 12,
  },
  controls: {
    flexDirection: 'row',
    gap: 25,
  },
});
