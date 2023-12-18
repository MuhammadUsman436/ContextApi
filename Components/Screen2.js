import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Screen12CreateContext } from '../Context/Screen12Context';

export default function Screen2() {
  const { User } = useContext(Screen12CreateContext);
  const { name, registration } = User;
  const { colors } = useTheme();

  if (!name && !registration) return <Text>No Available user Details!!</Text>;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Screen2</Text>
        <Text style={styles.text}>Registration: {registration}</Text>
        <Text style={styles.text}>Name: {name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black', // or use colors.text if defined in the theme
  },
});
