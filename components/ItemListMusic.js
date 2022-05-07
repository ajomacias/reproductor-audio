import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useContext } from "react";
import { ReproductorContext } from "../contexts"

const ItemListMusic = ({item})=> {

    const { setMusic } = useContext(ReproductorContext);

    const size = item.filename.length;

    let title = size > 30 ? item.filename.slice(0, 50).trim() + "..." : item.filename;

    return (
            <View style={styles.containerItemList}>
            <TouchableOpacity 

            onPress={ async()=> await setMusic(item.uri) }
            style={styles.touchableItemList}
            >

            <Text style={styles.textItemList} > {title} </Text> 
            
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={title} >
                    |||
                </Text>
            </TouchableOpacity>
            </View>

    ) 

}

const styles = StyleSheet.create({
    containerItemList : {
        margin : 4,
        padding : 4,
        display : "flex",
        flexWrap : "nowrap",
        justifyContent : "space-between"
    },
    touchableItemList :{
        width : "100%",
        height : "100%",
        overflow : "hidden",
        display : "flex",
        flexWrap : "wrap",
        borderWidth : 0.3,
        height : 40,
        padding : 4


    },
    textItemList : {
        color : "white",
        opacity : 0.7
    }

})


export { ItemListMusic }