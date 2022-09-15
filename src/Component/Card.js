import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {getFontSize, getResHeight, getResWidth} from '../../Responsive';
import Stamp from '../assets/icone/Group 900.svg';
import Vector from 'react-native-vector-icons/AntDesign';

export default class Card extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: '5%',
          borderRadius: 10,
          padding: '5%',
          borderWidth: 1,
          borderColor: '#ddd',
          backgroundColor: 'white',
          borderBottomWidth: 0,
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 10,
        }}>
        <View>
          <View>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: getFontSize(20),

                color: '#2C3D63',
                marginVertical: '2%',
              }}>
              New order created
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: getFontSize(16),
                color: '#4C4C4C',
                marginVertical: '2%',
              }}>
              New Order created with Order
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: getFontSize(14),
                color: '#FF7742',
                marginBottom: '2%',
              }}>
              09:00 AM
            </Text>
          </View>
          <Vector name="arrowright" size={20} color={'#FF7742'} />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              width: getResWidth(52),
              height: getResHeight(62),
              borderRadius: 50,
              backgroundColor: '#FF804E',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Stamp />
          </View>
        </View>
      </View>
    );
  }
}
