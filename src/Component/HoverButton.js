import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {TabBg} from './TabBg';

export default function HoverButton() {
  return (
    <View style={styles.container} pointerEvents="box-none">
      <TabBg color={'red'} style={styles.background} />
      <TouchableOpacity style={styles.button}>
        <Icon name="plus" style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: '#2C3D63',
  },
  buttonIcon: {
    fontSize: 22,
    color: '#F6F7EB',
  },
});
