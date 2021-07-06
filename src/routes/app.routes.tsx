import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import IconFeather from 'react-native-vector-icons/Feather';
import AntDesignFeather from 'react-native-vector-icons/AntDesign';

import Profile from '../pages/Profile';
import Wallet from '../pages/Wallet';
import Freelas from '../pages/Freelas';
import Chat from '../pages/Chat';
import QrCode from '../pages/QRCode';
import Home from '../pages/Home';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#0A3FA5',
        inactiveTintColor: '#0A3FA5',
        labelStyle: {fontSize: 12, fontFamily: 'Poppins-Regular'},
        style: {
          height: 85,
        },
      }}>
      <Screen
        options={{
          tabBarIcon: () => (
            <IconFeather name="home" size={18} color="#0A3FA5" />
          ),
        }}
        name="Home"
        component={Home}
      />

      <Screen
        options={{
          tabBarIcon: () => (
            <IconFeather name="user" size={18} color="#0A3FA5" />
          ),
        }}
        name="Profile"
        component={Profile}
      />

      <Screen
        options={{
          tabBarIcon: () => (
            <AntDesignFeather name="wallet" size={18} color="#0A3FA5" />
          ),
        }}
        name="Wallet"
        component={Wallet}
      />

      <Screen
        options={{
          tabBarIcon: () => (
            <IconFeather name="map-pin" size={18} color="#0A3FA5" />
          ),
        }}
        name="Freelas"
        component={Freelas}
      />

      <Screen
        options={{
          tabBarIcon: () => (
            <IconFeather name="message-circle" size={18} color="#0A3FA5" />
          ),
        }}
        name="Chat"
        component={Chat}
      />

      <Screen
        options={{
          tabBarIcon: () => (
            <AntDesignFeather name="qrcode" size={18} color="#0A3FA5" />
          ),
        }}
        name="QR Code"
        component={QrCode}
      />
    </Navigator>
  );
}
