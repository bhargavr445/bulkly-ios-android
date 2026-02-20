import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import MainStack from './Components/MainStack';


export default function App() {

  return (
    <>
      <StatusBar style="light" edges={['top']} />
      <NavigationContainer >
        <MainStack />
      </NavigationContainer>
    </>

  );
}

