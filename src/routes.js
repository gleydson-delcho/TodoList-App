import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FormList from './pages/createList/FormList';
import Home from './pages/createList/Home';
// import TodoDetails from './pages/createList/TodoDetails';

const {Navigator, Screen} = createStackNavigator(); 

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Home" component={Home}/>
                <Screen name="FormList" component={FormList}/>
                {/* <Screen name="TodoDetails" component={TodoDetails}/> */}
            </Navigator>
        </NavigationContainer>
    );
}