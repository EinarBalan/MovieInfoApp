import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home"
import MovieDetails from "../screens/MovieDetails"

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Movie Details" component={MovieDetails}/>
        </Stack.Navigator>
    )
}



export default HomeStack