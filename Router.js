import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import Category from './src/pages/Category';
import Food from './src/pages/Food';
import Details from './src/pages/Details/Details';
const Stack = createStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
          <Stack.Navigator >
              <Stack.Screen name='CategoryPage'component={Category} options={{title:"Categories",headerStyle:{backgroundColor:"white"},headerTitleStyle:{color:"#FD7F20",fontSize:38}}}/>
              <Stack.Screen name='FoodPage' component={Food} options={{title:"Meals",headerStyle:{backgroundColor:"#615e2f"},headerTitleStyle:{color:"#f5f093",fontSize:38}}}/>
              <Stack.Screen name='DetailsPage' component={Details} options={{title:"Details",headerStyle:{backgroundColor:"#FD7F20"},headerTitleStyle:{color:"white",fontSize:38}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}