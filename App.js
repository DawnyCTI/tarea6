// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ToolBoxScreen from './screens/ToolBoxScreen';
import GenderPredictionScreen from './screens/GenderPredictionScreen';
import AgePredictionScreen from './screens/AgePredictionScreen';
import UniversitiesScreen from './screens/UniversitiesScreen';
import WeatherScreen from './screens/WeatherScreen';
import NewsScreen from './screens/NewsScreen';
import AboutScreen from './screens/AboutScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tools" component={ToolBoxScreen} />
        <Tab.Screen name="Gender" component={GenderPredictionScreen} />
        <Tab.Screen name="Age" component={AgePredictionScreen} />
        <Tab.Screen name="Universities" component={UniversitiesScreen} />
        <Tab.Screen name="Weather" component={WeatherScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
