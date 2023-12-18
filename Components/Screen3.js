import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, useTheme } from 'react-native-paper';
import { Screen34CreateContext } from '../Context/Screen34Context';

export default function Screen1({ navigation }) {
  const [city, setCity] = useState(null);
  const [province, setProvince] = useState(null);
  const { setUser } = useContext(Screen34CreateContext);
  const { colors } = useTheme();

  function SubmitData() {
    setUser({ city: city, province: province});
    navigation.navigate('Screen4');
  }

  return (
    <View style={styles.container}>
      <TextInput
        label="Enter the City"
        value={city}
        onChangeText={(text) => setCity(text)}
        style={styles.input}
        theme={{ colors: { primary: colors.primary } }}
      />
      <TextInput
        label="Enter the Province"
        value={province}
        onChangeText={(text) => setProvince(text)}
        style={styles.input}
        theme={{ colors: { primary: colors.primary } }}
      />
      <Button mode="contained" onPress={SubmitData} style={styles.button} labelStyle={{ color: colors.background }}>
        Go to Screen 4
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});
