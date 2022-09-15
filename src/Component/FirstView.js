import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {Button} from 'react-native-paper';
import Icon from '../assets/icone/📍 Leading Icon l Use High Emphasis-1.svg';
import Book from '../assets/icone/orders-illustration-image.svg';

export default class FirstView extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#33A1CC', borderRadius: 15}}>
        <View
          style={{
            height: 250,
            width: 360,
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
                backgroundColor: 'white',
              }}>
              <Book />
            </View>
            <View
              style={{
                width: 130,
                height: 40,
              }}>
              <Button
                contentStyle={{
                  borderRadius: 15,
                  backgroundColor: '#CC5E33',
                }}
                style={{
                  height: '100%',
                  width: '100%',
                }}
                uppercase={false}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    color: 'white',
                    fontSize: 14,
                  }}>
                  Order
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
                marginTop: '15%',
                paddingLeft: '8%',
                paddingRight: '18%',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 70,
                  width: 110,
                  alignItems: 'center',
                  paddingTop: '8%',
                  borderRadius: 10,
                  marginLeft: '25%',
                }}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 20,
                    color: '#2C3D63',
                  }}>
                  O2{' '}
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      fontSize: 13,
                      color: '#4C4C4C',
                    }}>
                    Pending
                  </Text>
                </Text>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 13,
                    color: '#2C3D63',
                  }}>
                  Orders from
                </Text>
              </View>
              <View
                style={{
                  position: 'relative',
                  bottom: 40,
                  right: -30,
                  height: 0,
                  flexDirection: 'row',
                }}>
                <View style={{width: 25}}>
                  <Icon />
                </View>
                <View style={{width: 25}}>
                  <Icon />
                </View>
              </View>
            </View>
          </View>
          {/* {Postion Abosulte} */}
          <View
            style={{
              position: 'absolute',
              width: 130,
              height: 75,
              right: 30,
              top: -10,
              borderRadius: 10,
              backgroundColor: '#CC5E33',
            }}>
            <View style={{alignItems: 'center', marginTop: '5%'}}>
              <Text style={{fontFamily: 'Roboto-Regular', color: 'white'}}>
                You have{' '}
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 20,
                  }}>
                  3
                </Text>{' '}
                active
              </Text>
              <Text style={{fontFamily: 'Roboto-Regular', color: 'white'}}>
                order from
              </Text>
            </View>
            <View
              style={{
                position: 'relative',
                bottom: 15,
                height: 35,
                flexDirection: 'row',
              }}>
              <View style={{width: 25}}>
                <Icon />
              </View>
              <View style={{width: 25}}>
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
