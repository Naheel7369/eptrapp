import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpenses';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconButton from './components/UI/IconButton';
import {StatusBar} from 'react-native';
import { GlobalStyles } from './constant/styles';
import ManageExpenses from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpense';
import ExpensesContextProvider from './stores/expense-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: GlobalStyles.colors.primary100,
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#5c5c5cc3',
        headerRight: ({tintColor}) => (
          <IconButton
            name="add-outline"
            size={25}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpenses');
            }}
          />
        ),
      })}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent Expenses',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle = 'default'/>
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: GlobalStyles.colors.primary400},
              headerTintColor: GlobalStyles.colors.primary100,
            }}>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ManageExpenses"
              component={ManageExpenses}
              options={{presentation: 'modal'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

export default App;