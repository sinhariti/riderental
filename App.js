import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'; // Correct import statement
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './screens/HomePage';
import ProfilePage from './screens/ProfilePage';
import ReservationPage from './screens/ReservationPage';
import PenaltyPage from './screens/PenaltyPage';
import CustomNavbar from './screens/CustomNavbar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>riderentals</Text>
        <StatusBar style="auto" />
      </View>
      <Stack.Navigator
        screenOptions={{
          header: ({ navigation }) => <CustomNavbar navigation={navigation} />,
        }}
      >
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Reservation" component={ReservationPage} />
        <Stack.Screen name="Penalty" component={PenaltyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
