import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {Button} from 'react-native-paper';
import Icon from '../assets/icone/📍 Leading Icon l Use High Emphasis-1.svg';
import Book from '../assets/icone/customers-illustration-image.svg';
import Arrow from '../assets/icone/ic-arrow-narrow-up.svg';
import Hill from '../assets/icone/Mini Chart.svg';

export class ThirdView extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#31CE95', borderRadius: 15}}>
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
            <View style={{}}>
              <Button
                contentStyle={{
                  borderRadius: 20,
                  width: '100%',
                  backgroundColor: '#CE316A',
                }}
                uppercase={false}>
                <Text style={{fontSize: 13, color: 'white'}}>
                  View Customers
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
                marginTop: 55,
                paddingLeft: '10%',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 70,
                  marginLeft: 28,
                  justifyContent: 'flex-end',

                  width: 125,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    marginLeft: '10%',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontFamily: 'Roboto-Regular',
                        fontSize: 22,
                        color: '#2C3D63',
                      }}>
                      1.8%
                    </Text>
                    <View style={{marginLeft: 20}}>
                      <Arrow />
                    </View>
                  </View>
                  <View style={{alignSelf: 'flex-end'}}>
                    <Hill />
                  </View>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  marginTop: 8,

                  height: 70,
                  justifyContent: 'flex-end',
                  paddingBottom: '8%',
                  borderRadius: 10,
                  width: 112,
                }}>
                <View
                  style={{
                    marginLeft: '5%',
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
                        fontSize: 14,
                        color: '#7A869A',
                      }}>
                      Active
                    </Text>
                  </Text>
                  <Text
                    style={{fontFamily: 'Roboto-Regular', color: '#2C3D63'}}>
                    Customers
                  </Text>
                </View>
                <View
                  style={{
                    position: 'relative',
                    bottom: 60,
                    height: 0,
                    right: -56,
                    flexDirection: 'row',
                  }}>
                  <View style={{width: 22}}>
                    <Icon width={80} height={80} />
                  </View>
                  <View style={{width: 22}}>
                    <Icon width={80} height={80} />
                  </View>
                  <View>
                    <Icon width={80} height={80} />
                  </View>
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
              backgroundColor: '#CE316A',
            }}>
            <View style={{alignItems: 'center', marginTop: '5%'}}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  fontSize: 20,
                  color: 'white',
                }}>
                15{' '}
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 13,
                    color: 'white',
                  }}>
                  New Customers
                </Text>
              </Text>
            </View>
            <View
              style={{
                position: 'relative',
                bottom: 5,
                left: -15,
                height: 35,
                flexDirection: 'row',
              }}>
              <View style={{width: 25}}>
                <Icon width={100} height={100} />
              </View>
              <View style={{width: 25}}>
                <Icon width={100} height={100} />
              </View>
              <View>
                <Icon width={100} height={100} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ThirdView;
