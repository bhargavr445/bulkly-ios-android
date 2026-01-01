import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutUs from '../Screens/About-Us/About-us';
import BankingOverview from '../Screens/Bank';
import Home from '../Screens/Home';
import IconButton from './IconButton';
import Contact from '../Screens/Contact/Contact';

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
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
            listeners={({ navigation }) => ({
              tabPress: () => navigation.navigate("Home", { screen: "Products" }),
            })}
            options={{
              title: 'All Products',
              tabBarLabel: 'Home',
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
  )
}
