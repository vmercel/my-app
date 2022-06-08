import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DetailsScreen from '../pages/DetailsScreen';
import Logout from '../pages/logout';
import MediaScreen from './MediaScreen';

function HomeScreen() {
  return (
    <Logout />
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>Settings!</Text>
    </View>
  );
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Your Profile Details </Text>
       </View>
    );
  }

  function MarketScreen() {
    return (
        <MediaScreen />
    );
  }

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
      />

<Tab.Screen name="Profile" component={ProfileScreen} 
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
      />

<Tab.Screen name="Market Area" component={MarketScreen} 
          options={{
            tabBarLabel: 'Shopping',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="cart"
                color={color}
                size={size}
              />
            ),
          }}
      />

      <Tab.Screen name="Settings" component={SettingsScreen} 
        options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                name="menu"
                color={color}
                size={size}
                />
            ),
            }}
      />
    </Tab.Navigator>
  );
}

export default function Dashboard() {
  return (
    //<NavigationContainer>
      <MyTabs />
    //</NavigationContainer>
  );
}
