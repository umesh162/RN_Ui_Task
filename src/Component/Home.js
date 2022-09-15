import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';
import SerachIcon from '../assets/icone/Group 922.svg';
import Vector from 'react-native-vector-icons/AntDesign';
import Dot from 'react-native-vector-icons/Entypo';
import Calender from '../assets/icone/Group 911.svg';

import Navigation from './Navigation';
import FirstView from './FirstView';
import SecondView from './SecondView';
import ThirdView from './ThirdView';
import {getFontSize, getResHeight, getResWidth} from '../../Responsive';
import Card from './Card';

const data = [
  {id: 11, name: <FirstView />},
  {id: 12, name: <SecondView />},
  {id: 13, name: <ThirdView />},
];

const date = [
  {id: 20, day: 'MON'},
  {id: 21, day: 'TUE'},
  {id: 22, day: 'WED'},
  {id: 23, day: 'THU'},
  {id: 24, day: 'FRI'},
  {id: 25, day: 'SAT'},
  {id: 26, day: 'SUN'},
];

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{}}>
        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
          <Navigation />

          <View style={{paddingBottom: 30}}>
            <View
              style={{
                marginHorizontal: '3%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: '5%',
                }}>
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      fontSize: getFontSize(20),
                      color: '#2C3D63',
                    }}>
                    Welcome, Mypot !!
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      color: '#7A869A',
                    }}>
                    here is your dashboard...
                  </Text>
                </View>
                <View style={style.shadow}>
                  <SerachIcon />
                </View>
              </View>
              <FlatList
                data={data}
                style={{
                  width: '100%',
                }}
                contentContainerStyle={{
                  paddingVertical: '5%',
                }}
                ItemSeparatorComponent={() => (
                  <View
                    style={{
                      width: getResWidth(20),
                    }}
                  />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => <>{item.name}</>}
              />

              <View
                style={{
                  flexDirection: 'row',

                  width: '100%',
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: getFontSize(13),
                      fontFamily: 'Roboto-Regular',
                    }}>
                    January, 23 2021
                  </Text>
                  <Text
                    style={{
                      fontSize: getFontSize(22),
                      color: '#2C3D63',
                      fontFamily: 'Roboto-Regular',
                    }}>
                    Today
                  </Text>
                </View>
                <View
                  style={[
                    {
                      alignItems: 'center',
                      marginVertical: 5,
                      justifyContent: 'center',
                      width: getResWidth(100),
                    },
                    style.shadow,
                  ]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: getResWidth(70),
                    }}>
                    <Text
                      style={{
                        marginRight: '5%',
                        fontFamily: 'Roboto-Regular',
                        fontSize: getFontSize(13),
                        color: '#2C3D63',
                      }}>
                      TIMELINE
                    </Text>
                    <Vector size={12} color="black" name="caretdown" />
                  </View>
                </View>
                <View
                  style={[
                    {
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 5,
                      justifyContent: 'center',
                      width: getResWidth(90),
                    },
                    style.shadow,
                  ]}>
                  <Calender />
                  <Text
                    style={{
                      marginLeft: '5%',
                      fontFamily: 'Roboto-Regular',
                      fontSize: getFontSize(13),
                      color: '#2C3D63',
                    }}>
                    JAN, 2021
                  </Text>
                </View>
              </View>
            </View>
            <FlatList
              data={date}
              horizontal
              contentContainerStyle={{
                paddingLeft: '5%',
                paddingTop: '5%',
              }}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    width: getResWidth(21),
                  }}
                />
              )}
              renderItem={({item, index}) => (
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      color: index === 3 ? '#008080' : '#C5D6FC',
                    }}>
                    {item.day}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      color: index === 3 ? '#008080' : '#2C3D63',
                    }}>
                    {item.id}
                  </Text>

                  {index === 3 && (
                    <Dot name="dot-single" size={25} color={'#008080'} />
                  )}
                </View>
              )}
            />

            <Card />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  shadow: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 10,
  },
});
