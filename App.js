import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import IconButton from './Components/IconButton';
import AboutUs from './Screens/About-Us/About-us';
import BankingOverview from './Screens/Bank';
import Contact from './Screens/Contact';
import Home from './Screens/Home';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <>
      <StatusBar style="light" edges={['top']} />
      <NavigationContainer >
        <Tab.Navigator
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#0d70adff' },
            tabBarActiveTintColor: '#0d70adff',
            headerBackButtonDisplayMode: 'generic'
          }}>
          <Tab.Screen
            name='Home'
            component={Home}
            options={{
              title: 'Home',
              tabBarIcon: (routeOptions) => <IconButton iconName="home" size={24} color={routeOptions.color} />
            }}>
          </Tab.Screen>
          <Tab.Screen
            name='About'
            component={AboutUs}
            options={{
              title: 'About Bullkly',
              tabBarIcon: (routeOptions) => <IconButton iconName="albums-outline" size={24} color={routeOptions.color} />
            }}>

          </Tab.Screen>
          {/* passing dynamic data through options within title */}
          <Tab.Screen
            name='Contact'
            component={Contact}
            options={{
              tabBarIcon: (routeOptions) => <IconButton iconName="people-outline" size={24} color={routeOptions.color} />
            }}>
          </Tab.Screen>

          <Tab.Screen
            name='Banking'
            component={BankingOverview}
            options={{
              tabBarIcon: (routeOptions) => <IconButton iconName="people-outline" size={24} color={routeOptions.color} />
            }}>
          </Tab.Screen>

        </Tab.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safe: {
    flex: 1,
    backgroundColor: 'grey',
  }
});
