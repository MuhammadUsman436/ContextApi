import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, useTheme } from 'react-native-paper';
import { Screen12CreateContext } from '../Context/Screen12Context';

export default function Screen1({ navigation }) {
  const [name, setName] = useState(null);
  const [registration, setRegistration] = useState(null);
  const { setUser } = useContext(Screen12CreateContext);
  const { colors } = useTheme();

  function SubmitData() {
    setUser({ name: name, registration: registration });
    navigation.navigate('Screen2');
  }

  return (
    <View style={styles.container}>
        
      <TextInput
        label="Enter the Registration"
        value={registration}
        onChangeText={(text) => setRegistration(text)}
        style={styles.input}
        theme={{ colors: { primary: colors.primary } }}
      />
      <TextInput
        label="Enter the Name"
        //value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
        theme={{ colors: { primary: colors.primary } }}
      />
      <Button mode="contained" onPress={SubmitData} style={styles.button} labelStyle={{ color: colors.background }}>
        Go to Screen 2
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
