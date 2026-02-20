import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from '../Screens/Product-Details/ProductDetails';
import TabsNavigation from './TabsNavigation';

const Stack = createStackNavigator();

const productDetailsOptions = {
    headerBackTitle: 'Products',
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#0d70adff' },
    tabBarActiveTintColor: '#0d70adff',
    headerShown: true
}

const stackNavigatorOptions = {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#0d70adff' },
    tabBarActiveTintColor: '#0d70adff',
    headerBackButtonDisplayMode: 'generic',
    headerShown: false
}

export default function MainStack() {
    return (
        <Stack.Navigator screenOptions={{ ...stackNavigatorOptions }}>
            <Stack.Screen name='main' component={TabsNavigation} />
            <Stack.Screen name='ProductDetails' component={ProductDetails} options={{ ...productDetailsOptions }}></Stack.Screen>
        </Stack.Navigator>
    )
}
