import React from 'react'
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';


function deleteCharacter(id) {
  alert(`TODO DELETE ${id}`)
  // fetch(`https://5fc9346b2af77700165ae514.mockapi.io/simpsons/${id}`, { method: 'DELETE' });
}

export default function CharacterComponent({ name, avatar, id }) {
  return (
    <View style={styles.view}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.textView}>
        <Text>{name}</Text>
      </View>
      <TouchableOpacity onPress={ () => deleteCharacter(id) }>
        <Image source={require('../images/delete.png')} style={styles.button}/>
      </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
  avatar: {
    width: 25,
    height: 50,
  },
  textView: {
    flexGrow: 1,
    marginHorizontal: 15,
  },
  button: {
    width: 25,
    height: 25
  },
  view: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
});
