/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from './src/pages/Category';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProductList from './src/pages/ProductList';
import ProductDetail from './src/pages/ProductDetail';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerTitleStyle: { color: '#FFA500' }, headerTintColor: '#FFA500', headerStyle: { backgroundColor: '#fff' } }}
          >
            <Stack.Screen name="Categories" component={Category} />
            <Stack.Screen name="Meals" component={ProductList} />
            <Stack.Screen name="Details" component={ProductDetail}  />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
});
export default App;
