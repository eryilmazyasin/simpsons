import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CharacterComponent from '../components/CharacterComponent';

export default function HomeScreen({ navigation, data }) {
  console.log()
  return (
    <View
      style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', {
              id: item.id,
              name: item.name,
              avatar: item.avatar,
              job: item.job,
              about: item.about
            })}
            style={styles.renderView}>
            <CharacterComponent name={item.name} id={item.id} avatar={item.avatar} />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate('AddCharacter')} style={styles.add}>
        <Image source={require('../images/add.png')} style={styles.addIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 15,
  },
  renderView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 2.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    minWidth: '100%',
  },
  avatar: {
    width: 25,
    height: 50,
  },
  textView: {
    flexGrow: 1,
    marginHorizontal: 15,
  },
  button: {
    width: 20,
  },
  add: {
    position: 'absolute',
    bottom: 25,
    alignSelf: 'center',
  },
  addIcon: {
    width: 50,
    height: 50
  }
});
