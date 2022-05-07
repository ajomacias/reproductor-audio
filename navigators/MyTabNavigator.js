import {
  useNavigationBuilder,
  NavigationHelpersContext,
  TabRouter,
  TabActions,
  createNavigatorFactory
} from "@react-navigation/native";

import { Pressable, StyleSheet, View, Text } from "react-native";

function TabNavigator({
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
  initialRouteName,
}) {
  const { NavigationContent, descriptors, state, navigation } =
    useNavigationBuilder(TabRouter, {
      children,
      initialRouteName,
      screenOptions,
    });

    return(
        <NavigationContent >
            <View 
            style={styles.tabBarStyles}
            >
                {state.routes.map(route=>(
                    <Pressable 
                    key={route.key}

                    style={{flex : 1, backgroundColor : "red", width : 1, margin : 1}}

                    onPress={()=>{
                        const event = navigation.emit({ 
                            type : "TabPress",
                            target : route.key,
                            canPreventDefault : true
                        })
                        if(!event.defaultPrevented){
                            navigation.dispatch({
                                ...TabActions.jumpTo(route.name),
                                target : state.key
                            })
                        }
                    }}
                    
                    >

                        <Text style={{color: "black" }} > { descriptors[route.key].options.title || route.name } slkdsl </Text>

                    </Pressable>

                ))}

            </View>
            <View style={[{ flex: 1 }]}>
        {state.routes.map((route, i) => {
          return (
            <View
              key={route.key}
              style={[
                StyleSheet.absoluteFill,
                { display: i === state.index ? 'flex' : 'none' },
              ]}
            >
              {descriptors[route.key].render()}
            </View>
          );
        })}
      </View>

        </NavigationContent>
    )
}

export const createAnderNavigator = createNavigatorFactory(TabNavigator);

const styles = StyleSheet.create({
    tabBarStyles : {
        display : "flex",
        flexDirection : "row",
        height : 100,
        backgroundColor : "white",
        justifyContent : "space-between",
        alignItems : "center"
    }
})