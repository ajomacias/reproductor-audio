import { Image, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ReproductorContext } from "../contexts";
import { useContext } from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ReproductorInferior = ({children})=>{

  const  { music }  = useContext(ReproductorContext);

  //const navigation = useNavigation();

  const handlePressPlay = async()=>{
    let status = await music.getStatusAsync();

    if (status.shouldPlay) await music.pauseAsync();
    else await music.playAsync();
  }
  

    return (
      
      <>
        {children}
        <View style={styles.container}>
          <TouchableOpacity
            disabled={music ? false : true}
            onPress={async () => console.log("next->")}
          >
            <Entypo style={styles.icons} name="controller-jump-to-start" />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={music ? false : true}
            onPress={async () =>await handlePressPlay(music)}
          >
            <Entypo style={styles.icons} name="controller-play" />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={music ? false : true}
            onPress={async () => console.log("next->")}
          >
            <Entypo style={styles.icons} name="controller-next" />
          </TouchableOpacity>
      
          <TouchableOpacity
            disabled={music ? false : true}
            onPress={async () => console.log(await music.getStatusAsync())}
          >
            <Text>GetStatus</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    display: "flex",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  icons : {
    fontSize : 40
  }
});

export { ReproductorInferior };
