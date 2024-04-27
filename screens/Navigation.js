// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomNavbar from './CustomNavbar';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import ReservationPage from './ReservationPage';
import PenaltyPage from './PenaltyPage';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomePage" drawerContent={() => <CustomNavbar />}>
        <Drawer.Screen name="HomePage" component={HomePage} />
        <Drawer.Screen name="ProfilePage" component={ProfilePage} />
        <Drawer.Screen name="ReservationPage" component={ReservationPage} />
        <Drawer.Screen name="PenaltyPage" component={PenaltyPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
