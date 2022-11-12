import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../screen/Home";
import Login from "../screen/auth/Login";
import Register from "../screen/auth/Register";
import Forget from "../screen/auth/Forget";
import Splash from "../screen/splash/Splash";
import AllFoods from "../screen/AllFoods";
import AddFood from "../screen/AddFood";

const Stack = createNativeStackNavigator();

const AppRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen options={{title:'',headerBackVisible:false,headerStyle:{backgroundColor:'#f79616'}}} 
                    name="Home" component={Home} 
                />
                <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
                <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
                <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
                <Stack.Screen options={{headerShown:false}} name="Forget" component={Forget} />
                <Stack.Screen options={{title:'Food Donation',headerStyle:{backgroundColor:'#f79616'}}} 
                    name="AllFoods" component={AllFoods} 
                />
                <Stack.Screen options={{title:'Food Donation',headerStyle:{backgroundColor:'#f79616'}}} 
                    name="AddFood" component={AddFood} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRouter;