import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Noticia from './components/noticia'

const HomeScreen = () => {
  const [Posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=0731aaf9be83422b961903f457b22173")
      .then(responde => responde.json())
      .then(data => setPosts(data.articles))
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={Posts}
        renderItem={({ item }) => <Noticia
          titulo={item.title}
          resumo={item.description}
          url={item.urlToImage}
          urlItem={item.url} />}
        keyExtractor={item => item.url}
      />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    </View>
  )
}

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.topBar}>
        <Stack.Screen
          name="Top 20 Noticias"
          component={HomeScreen}
          options={{
            title: 'Top Noticias - Felipe',
            headerStyle: {
              backgroundColor: '#333',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
            }
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
    justifyContent: 'center',

  },

  topBar: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App