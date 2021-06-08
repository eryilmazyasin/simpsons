import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const win = Dimensions.get('window');

export default function DetailsScreen({ route }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      <ScrollView>
        <Image
          source={{uri: route.params?.avatar}}
          resizeMode={'contain'}
          style={styles.imageStyle}
        />
        <Text style={styles.textTitle}>{route.params?.name}</Text>
        <Text style={styles.textJob}>{route.params?.job}</Text>
        <Text style={styles.textAbout}>{route.params?.about}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 15,
  },
  imageStyle: {
    flex: 1,
    alignSelf: 'center',
    width: win.width / 2,
    height: win.height / 2,
    marginVertical: 15,
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 18,
  },
  textJob: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 15,
    opacity: 0.7,
  },
  textAbout: {
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 15,
    opacity: 0.9,
    padding: 15,
  },
});
