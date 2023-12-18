import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Screen34CreateContext } from '../Context/Screen34Context';

export default function Screen4() {
  const { User } = useContext(Screen34CreateContext);
  const { city, province } = User;
  const { colors } = useTheme();

  if (!city && !province) return <Text>No Available user Details!!</Text>;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>Screen4</Text>
      <Text style={[styles.text, { color: colors.text }]}>City: {city}</Text>
      <Text style={[styles.text, { color: colors.text }]}>Province: {province}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
