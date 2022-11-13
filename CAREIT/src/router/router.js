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
import Homejobs from "../screen/Homejobs";
import AddJobPoster from "../screen/AddJobPoster";
import AddBook from "../screen/AddBook";
import AllBooks from "../screen/AllBooks";
import AllPosts from "../screen/AllPosts";
import AllJobs from "../screen/AllJobs";
import AddPost from "../screen/AddPost";
import ClothsAndSanitationHome from "../screen/ClothsAndSanitationHome";

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
                <Stack.Screen options={{title:'',headerBackVisible:false,headerStyle:{backgroundColor:'#1e7529'}}} 
                    name="Homejobs" component={Homejobs} 
                />
                <Stack.Screen options={{title:'Food Donation',headerStyle:{backgroundColor:'#1e7529'}}} 
                    name="AddJobPoster" component={AddJobPoster} 
                />
                <Stack.Screen options={{title:'Food Donation',headerStyle:{backgroundColor:'#1e7529'}}} 
                    name="AllJobs" component={AllJobs} 
                />

                <Stack.Screen options={{title:'Book Donation',headerStyle:{backgroundColor:'#f79616'}}} 
                    name="AllBooks" component={AllBooks} 
                />
                <Stack.Screen options={{title:'Book Donation',headerStyle:{backgroundColor:'#f79616'}}} 
                    name="AddBook" component={AddBook}
                />
                <Stack.Screen options={{headerShown:false}} name="ClothsAndSanitationHome" component={ClothsAndSanitationHome} />
                <Stack.Screen options={{headerShown:false}} name="AddPost" component={AddPost} />
                <Stack.Screen options={{headerShown:false}} name="AllPosts" component={AllPosts} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRouter;