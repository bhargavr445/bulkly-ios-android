import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabsNavigation from './Components/TabsNavigation';


export default function App() {

  return (
    <>
      <StatusBar style="light" edges={['top']} />
      <NavigationContainer >
        <TabsNavigation />
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
