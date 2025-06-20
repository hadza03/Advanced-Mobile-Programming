import React, { useState } from 'react';
import {View,Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';

export default function RegisterScreen({ navigation }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleRegister = () => {
    const { firstName, lastName, email, username, password } = form;
    if (!firstName || !lastName || !email || !username || !password) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    dispatch(login({
  username: form.username,
  email: form.email,
  firstName: form.firstName,
  lastName: form.lastName,
}));

    navigation.navigate('Main');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/SoundSa_logo.png')} style={styles.logo} />
      <Text style={styles.title}>Create Your Account</Text>

      <TextInput
        placeholder="First Name"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={form.firstName}
        onChangeText={(text) => handleChange('firstName', text)}
      />
      <TextInput
        placeholder="Last Name"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={form.lastName}
        onChangeText={(text) => handleChange('lastName', text)}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#aaa"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={form.email}
        onChangeText={(text) => handleChange('email', text)}
      />
      <TextInput
        placeholder="Username"
        placeholderTextColor="#aaa"
        style={styles.input}
        autoCapitalize="none"
        value={form.username}
        onChangeText={(text) => handleChange('username', text)}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#aaa"
        style={styles.input}
        secureTextEntry
        value={form.password}
        onChangeText={(text) => handleChange('password', text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flexGrow: 1,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#aaa',
    marginTop: 20,
  },
});
