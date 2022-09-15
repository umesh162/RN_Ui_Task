import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {StyleSheet} from 'react-native';

import Home from './src/Component/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Customer from './src/Component/Customer';
import Pluse from './src/Component/Pluse';
import Khata from './src/Component/Khata';
import Order from './src/Component/Order';
import HoverButton from './src/Component/HoverButton';
import HomeIcon from './src/assets/icone/Group 910.svg';
import CustomersIcon from './src/assets/icone/Group 912.svg';
import KhataIcon from './src/assets/icone/Group 913.svg';
import OrdersIcon from './src/assets/icone/Group 914.svg';

const BottomBar = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomBar.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: 'Roboto-Black',
            fontWeight: '600',
          },
          tabBarStyle: {
            height: 55,
          },
        }}>
        <BottomBar.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => <HomeIcon size={24} color={color} />,
          }}
        />
        <BottomBar.Screen
          name="Customer"
          component={Customer}
          options={{
            tabBarIcon: ({color}) => <CustomersIcon size={24} color={color} />,
          }}
        />
        <BottomBar.Screen
          name="Pulse"
          component={Pluse}
          options={{
            tabBarIcon: ({color}) => <HoverButton bgColor={color} />,
            tabBarLabel: () => null,
          }}
        />
        <BottomBar.Screen
          name="Khata"
          component={Khata}
          options={{
            tabBarIcon: ({color}) => <KhataIcon size={24} color={color} />,
          }}
        />
        <BottomBar.Screen
          name="Order"
          component={Order}
          options={{
            tabBarIcon: ({color}) => <OrdersIcon size={24} color={color} />,
          }}
        />
      </BottomBar.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
  },
});

export default App;
