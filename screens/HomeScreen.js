import { useContext } from 'react';
import { View,FlatList, Text, StyleSheet,Image, SafeAreaView, Alert } from 'react-native';
import { PermissionContext } from '../contexts/';
import { ItemListMusic } from "../components";

export const HomeScreen = ()=> {

        const { musics } = useContext(PermissionContext);

        return(
            <View style={styles.container}>
            <SafeAreaView>

                    <FlatList
                    data={musics.assets}
                    renderItem = {({item})=>< ItemListMusic item={item} />}
                    keyExtractor ={(item)=>item.id}
                    />
            
            </SafeAreaView>
            </View>
        )

    
}

const styles = StyleSheet.create({
    textHome : {
        color : 'white'
    },
    container : {
        width : '100%',
        height : '100%',
        backgroundColor : 'black',
        display : 'flex',
        justifyContent : 'center',  
        alignItems : 'center',
        flexWrap : 'wrap',
    }
    
})
