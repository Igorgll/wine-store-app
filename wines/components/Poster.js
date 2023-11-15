import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function Poster() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://imgur.com/0XwsQGZ.jpg' }}
        style={{ width: '100%', height: 100, borderRadius: 14 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    maxWidth: '100%',
  },
});
