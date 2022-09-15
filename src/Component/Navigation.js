import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import Drawer from '../assets/icone/📍 Leading Icon l Use High Emphasis.svg';
import Heart from '../assets/icone/Group 921.svg';
import Bell from '../assets/icone/📍Trailing icon 1.svg';
import {getResHeight, getResWidth} from '../../Responsive';

export class Navigation extends Component {
  render() {
    return (
      <View
        style={{
          marginHorizontal: '2%',
          paddingVertical: '2%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            background: 'white',
          }}>
          <View style={{flex: 1}}>
            <View
              style={[
                {
                  width: getResWidth(28),
                  height: getResHeight(30),
                },
                Styles.shadow,
              ]}>
              <Drawer />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '40%',
            }}>
            <View style={Styles.shadow}>
              <Heart />
            </View>
            <View style={Styles.shadow}>
              <Bell />
              <View
                style={{
                  width: getResWidth(12),
                  height: getResHeight(16),
                  backgroundColor: 'red',
                  alignItems: 'center',
                  borderRadius: 12,
                  position: 'absolute',
                  right: -2,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: 'white',
                  }}>
                  2
                </Text>
              </View>
            </View>
            <View style={Styles.shadow}>
              <Heart />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  shadow: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 10,
  },
});

export default Navigation;
