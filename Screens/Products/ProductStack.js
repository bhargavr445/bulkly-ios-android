import { createStackNavigator } from '@react-navigation/stack';
import LiveProductsSection from './Products';
import ProductDetails from '../Product-Details/ProductDetails';

const Stack = createStackNavigator();

export default function ProductsStack() {
    return (
        <Stack.Navigator initialRouteName='Products' screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#0d70adff' },
            tabBarActiveTintColor: '#0d70adff',
            headerBackButtonDisplayMode: 'generic'
        }}>
            <Stack.Screen name='Products' component={LiveProductsSection}></Stack.Screen>
            <Stack.Screen name='ProductDetails' component={ProductDetails}></Stack.Screen>
        </Stack.Navigator>
    )
}
