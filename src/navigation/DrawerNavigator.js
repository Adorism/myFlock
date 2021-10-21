/* eslint-disable no-unused-vars */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import { View, StyleSheet, Text } from 'react-native';
import InitialLocation from '../maps/InitialLocation';
import UserLocation_Android from '../maps/UserLocation_Android';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/RegisterScreen';
import NestView from '../screens/NestViewScreen';
import AddChatScreen from '../screens/AddChat';
import encode from '../maps/util/encode';
import marker_animate from '../maps/marker_animate';
import AddInterest from '../screens/AddInterest';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Drawer.Screen name="Tabs" component={TabNavigator} />
			<Drawer.Screen name="UserLocation_Android" component={UserLocation_Android} />
			<Drawer.Screen name="InitialLocation" component={InitialLocation} />
			<Drawer.Screen name="Chat" component={ChatScreen} />
			<Drawer.Screen name="Login" component={LoginScreen} />
			<Drawer.Screen name="Register" component={RegisterScreen} />
			<Drawer.Screen name="Messages" component={NestView} />
			<Drawer.Screen name="Add a Chat" component={AddChatScreen} />
			<Drawer.Screen name="Animated Marker" component={marker_animate} />
			<Drawer.Screen name="encode" component={encode} />
			<Drawer.Screen name="addInterest" component={AddInterest} />
		</Drawer.Navigator>
	);
}

export default DrawerNavigator;
