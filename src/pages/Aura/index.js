import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../styles/theme';

export default function Aura() {
  return (
    <View style={styles.container}>
        <Text>Aqui ficaria a Aura :)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightOrange,
    alignItems: 'center',
    justifyContent: 'center'
  },
});