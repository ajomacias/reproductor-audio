import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const ReproductorScreen = ( {navigation} ) =>{

    const [estado, onChageEstado ] = React.useState("");

    return (
        <View>
            <Text>Como te sentis</Text>
            <TextInput
            value={estado}
            onChangeText ={onChageEstado}
             />

        </View>
    )

}


export { ReproductorScreen };