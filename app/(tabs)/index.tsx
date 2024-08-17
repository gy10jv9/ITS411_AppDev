import React from 'react';
import { Image, StyleSheet, Platform, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [text, onChangeText] = React.useState('Enter Email Address or Mobile Number');
  const [number, onChangeNumber] = React.useState('');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#3b5998', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/facebook-banner.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Facebook Login</ThemedText>
        <HelloWave />
      </ThemedView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Password"
        keyboardType="numeric"
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
