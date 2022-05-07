import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Screens from "./screens/index";
import {  ReproductorInferior } from "./components";
import React from "react";
import { stackNavigateOptions } from "./options/AllOptions";

const Router = () =>{

    const Stack = createNativeStackNavigator();

    return(  
       <React.Fragment>
           
       <NavigationContainer>
       <ReproductorInferior>
           <Stack.Navigator 
            initialRouteName="Home" >
                
               <Stack.Screen options={stackNavigateOptions} name="Home" component={ Screens.HomeScreen } />
               <Stack.Screen name="Reproductor" component={Screens.ReproductorScreen} />
               
           </Stack.Navigator>
           </ReproductorInferior>
           
       </NavigationContainer>

      </React.Fragment>

    );
}

export default Router;