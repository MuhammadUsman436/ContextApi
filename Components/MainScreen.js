import React from 'react';
import { View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';

export default function MainScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: colors.text }}>
        Welcome to MainScreen
      </Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate('Screen1');
        }}
        style={{ marginVertical: 10 }}
      >
        Go to Screen 1
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate('Screen3');
        }}
        style={{ marginVertical: 10 }}
      >
        Go to Screen 3
      </Button>
    </View>
  );
}
