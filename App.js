import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LIVRARIAS SENAI</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LIVRARIAS SENAI"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#003D73', // Cor do fundo da barra de ferramentas
          },
          headerTintColor: '#fff', // Cor do texto do título na barra
          headerTitleAlign: 'center', // Alinhar o título no centro
        }}
      >
        <Stack.Screen name="LIVRARIAS SENAI" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
    fontFamily: 'Product-Sans',  
    headerTitleAlign: 'left'
  }
});