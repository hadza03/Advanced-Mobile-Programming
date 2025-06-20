import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  devices: [
    {
      id: 1,
      name: 'JBL Flip 5',
      volume: 50,
      isOn: true,
      bass: 50,
      mid: 50,
      treble: 50,
      equalizerEnabled: false,
    },
    {
      id: 2,
      name: 'Sony SoundBar',
      volume: 70,
      isOn: false,
      bass: 50,
      mid: 50,
      treble: 50,
      equalizerEnabled: false,
    },
    {
      id: 3,
      name: 'Marshall Emberton',
      volume: 40,
      isOn: true,
      bass: 50,
      mid: 50,
      treble: 50,
      equalizerEnabled: false,
    },
  ],
};

const devicesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    togglePower: (state, action) => {
      const device = state.devices.find(d => d.id === action.payload);
      if (device) {
        device.isOn = !device.isOn;
      }
    },
    increaseVolume: (state, action) => {
      const device = state.devices.find(d => d.id === action.payload);
      if (device && device.volume < 100) {
        device.volume += 10;
      }
    },
    decreaseVolume: (state, action) => {
      const device = state.devices.find(d => d.id === action.payload);
      if (device && device.volume > 0) {
        device.volume -= 10;
      }
    },
    updateEqualizerToggle: (state, action) => {
      const { id, value } = action.payload;
      const device = state.devices.find((d) => d.id === id);
      if (device) {
        device.equalizerEnabled = value;
      }
    },
    updateEqualizerValue: (state, action) => {
      const { id, type, value } = action.payload;
      const device = state.devices.find((d) => d.id === id);
      if (device && ['bass', 'mid', 'treble'].includes(type)) {
        device[type] = value;
      }
    },
  },
});

export const {
  togglePower,
  increaseVolume,
  decreaseVolume,
  updateEqualizerToggle,
  updateEqualizerValue,
} = devicesSlice.actions;

export default devicesSlice.reducer;
