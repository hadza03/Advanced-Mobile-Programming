import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { updateEqualizerToggle, updateEqualizerValue } from '../redux/slices/devicesSlice';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function SpeakerDetailsScreen() {
  const route = useRoute();
  const { id } = route.params;

  const dispatch = useDispatch();
  const device = useSelector((state) =>
    state.devices.devices.find((d) => d.id === id)
  );

  if (!device) return <Text>Device not found</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{device.name}</Text>

      <SafeAreaView style={styles.switchRow}>
        <Text style={styles.label}>Equalizer</Text>
        <Switch
          value={device.equalizerEnabled}
          onValueChange={(value) =>
            dispatch(updateEqualizerToggle({ id, value }))
          }
        />
      </SafeAreaView>

      <Text style={styles.label}>Bass</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={device.bass}
        onValueChange={(value) =>
          dispatch(updateEqualizerValue({ id, type: 'bass', value }))
        }
      />

      <Text style={styles.label}>Mid</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={device.mid}
        onValueChange={(value) =>
          dispatch(updateEqualizerValue({ id, type: 'mid', value }))
        }
      />

      <Text style={styles.label}>Treble</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={device.treble}
        onValueChange={(value) =>
          dispatch(updateEqualizerValue({ id, type: 'treble', value }))
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  label: { color: '#ccc', fontSize: 16, marginTop: 20 },
  slider: { width: '100%', height: 40 },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});
