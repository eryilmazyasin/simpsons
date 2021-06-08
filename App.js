import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AddCharacterScreen from './screens/AddCharacterScreen';

const Stack = createStackNavigator();

function App() {
  const [characters, setCharacters] = useState();

  async function getCharacters() {
    await fetch('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')
    .then((response) => response.json())
    .then((characters) => setCharacters(characters))
    .catch((error) => console.error(error))
  }

   useEffect(() => {
    getCharacters();
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ title: 'Simpsons' }}>
          { props => <HomeScreen {...props} data={characters} />}
        </Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="AddCharacter" options={{ title: 'Add New Character' }} component={AddCharacterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;