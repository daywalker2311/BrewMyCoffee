import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartMachineScreen from '../screens/StartMachineScreen';
import SelectCoffeeStyleScreen from '../screens/SelectCoffeeStyleScreen';
import SelectCoffeeSizeScreen from '../screens/SelectCoffeeSizeScreen';
import SelectCoffeeExtrasScreen from '../screens/SelectCoffeeExtrasScreen';

const Stack = createStackNavigator();

const Navigators = (props) => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={StartMachineScreen}>

                <Stack.Screen
                    name="StartMachineScreen"
                    component={StartMachineScreen}
                    options={{
                        //headerShown: false,
                        headerTitle: 'Dark Roasted Beans'
                    }}
                />

                <Stack.Screen
                    name="SelectCoffeeStyleScreen"
                    component={SelectCoffeeStyleScreen}
                    options={{
                        //headerShown: false,
                        headerTitle: 'Brew With Dewalker'
                    }}
                />

                <Stack.Screen
                    name="SelectCoffeeSizeScreen"
                    component={SelectCoffeeSizeScreen}
                    options={{
                        //headerShown: false,
                        headerTitle: 'Brew With Dewalker'
                    }}
                />

                <Stack.Screen
                    name="SelectCoffeeExtrasScreen"
                    component={SelectCoffeeExtrasScreen}
                    options={{
                        //headerShown: false,
                        headerTitle: 'Brew With Dewalker'
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Navigators;