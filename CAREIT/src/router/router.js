import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../screen/Home";
import Login from "../screen/auth/Login";
import Register from "../screen/auth/Register";
import Forget from "../screen/auth/Forget";
import Splash from "../screen/splash/Splash";
import PlaceOrder from "../screen/PlaceOrder";
import ClothsAndSanitationHome from "../screen/ClothsAndSanitationHome";

const Stack = createNativeStackNavigator();

const AppRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
                <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
                <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
                <Stack.Screen options={{headerShown:false}} name="Forget" component={Forget} />
                <Stack.Screen options={{headerShown:false}} name="PlaceOrder" component={PlaceOrder} />
                <Stack.Screen options={{headerShown:false}} name="ClothsAndSanitationHome" component={ClothsAndSanitationHome} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRouter;