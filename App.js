import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AboutUs from './components/About-us';
import Contact from './components/Contact';
import Home from './components/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: 'red' } }}>
          <Stack.Screen name='Home' component={Home} options={{ title: 'Home' }}></Stack.Screen>
          <Stack.Screen name='About' component={AboutUs} options={{ title: 'About Us' }}></Stack.Screen>
          {/* passing dynamic data through options within title */}
          <Stack.Screen
            name='Contact'
            component={Contact}
            options={(navOptions) => {
              const id = navOptions.route.params.cId;
              return { title: id }
            }}>
          </Stack.Screen>
        </Stack.Navigator>
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
});
