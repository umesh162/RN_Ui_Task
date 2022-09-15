import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {Button} from 'react-native-paper';
import Icon from '../assets/icone/📍 Leading Icon l Use High Emphasis-1.svg';
import Book from '../assets/icone/subscriptions-illustration-image.svg';
import {getResHeight, getResWidth} from '../../Responsive';

export default class SecondView extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#DCB223', borderRadius: 15}}>
        <View
          style={{
            height: getResHeight(220),
            width: getResWidth(275),
            flexDirection: 'row',
          }}>
          {/* //Left Container */}
          <View
            style={{
              width: '50%',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                borderRadius: 100,
                width: getResWidth(85),
                backgroundColor: 'white',
              }}>
              <Book />
            </View>
            <View style={{}}>
              <Button
                contentStyle={{
                  borderRadius: 20,
                  backgroundColor: '#234DDC',
                }}
                uppercase={false}>
                <Text style={{fontFamily: 'Roboto-Regular', color: 'white'}}>
                  Subscription
                </Text>
              </Button>
            </View>
          </View>
          {/* //Right Section */}
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
            }}>
            <View
              style={{
                marginTop: 45,

                paddingLeft: '10%',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: getResHeight(65),
                  justifyContent: 'flex-end',
                  paddingBottom: '8%',
                  marginLeft: '10%',
                  width: getResWidth(82),
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    marginLeft: '10%',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      fontSize: 20,
                      color: '#2C3D63',
                    }}>
                    10{' '}
                    <Text
                      style={{
                        fontFamily: 'Roboto-Regular',
                        fontSize: 13,
                        color: '#7A869A',
                      }}>
                      Active
                    </Text>
                  </Text>
                  <Text
                    style={{fontFamily: 'Roboto-Regular', color: '#2C3D63'}}>
                    Subscription
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  marginTop: 8,
                  marginLeft: 35,
                  height: getResHeight(60),
                  justifyContent: 'flex-end',
                  paddingBottom: '8%',
                  borderRadius: 10,
                  width: getResWidth(82),
                }}>
                <View
                  style={{
                    marginLeft: '10%',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      fontSize: 20,
                      color: '#2C3D63',
                    }}>
                    119{' '}
                    <Text
                      style={{
                        fontFamily: 'Roboto-Regular',
                        fontSize: 13,
                        color: '#7A869A',
                      }}>
                      Pending
                    </Text>
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      fontSize: 15,
                      color: '#2C3D63',
                    }}>
                    Deliveries
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* {Postion Abosulte} */}
          <View
            style={{
              position: 'absolute',
              width: getResWidth(100),
              height: getResHeight(70),
              right: 30,
              top: -10,
              borderRadius: 10,
              backgroundColor: '#234DDC',
            }}>
            <View style={{alignItems: 'center', marginTop: '5%'}}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  fontSize: 18,
                  color: 'white',
                }}>
                03{' '}
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 14,
                    color: 'white',
                  }}>
                  deliveries
                </Text>
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  color: 'white',
                }}>
                pending for
              </Text>
            </View>
            <View
              style={{
                position: 'relative',
                bottom: 18,
                left: -10,
                height: 35,
                flexDirection: 'row',
              }}>
              <View style={{width: getResWidth(20)}}>
                <Icon />
              </View>
              <View style={{width: getResWidth(20)}}>
                <Icon />
              </View>
              <View>
                <Icon />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
