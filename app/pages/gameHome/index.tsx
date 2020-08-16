import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import { tetris, cheil } from '../../assets/images'

const GameHome = (props: any) => {
  const { navigetion } = props
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.gameBox}>
        <TouchableHighlight
          onPress={() => {
            navigetion.navigate('asdf')
          }}
          style={styles.gameBoxItem}
        >
          <>
            <Image
              source={tetris}
              style={styles.gameBoxItemImg}
              blurRadius={5}
            />
            <Text style={styles.gameBoxItemTitle}>俄罗斯方块</Text>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            navigetion.navigate('asdf')
          }}
          style={styles.gameBoxItem}
        >
          <>
            <Image
              source={cheil}
              style={styles.gameBoxItemImg}
              blurRadius={3}
            />
            <Text style={styles.gameBoxItemTitle}>2048</Text>
          </>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}
export default GameHome

const styles = StyleSheet.create({
  gameBox: {
    display: 'flex',
    flex: 1,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  gameBoxItem: {
    borderRadius: 12,
    width: 120,
    height: 120,
    margin: 12,
    overflow: 'hidden',
    position: 'relative'
  },
  gameBoxItemImg: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  gameBoxItemTitle: {
    marginTop: 10,
    marginLeft: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    opacity: 0
  }
})
