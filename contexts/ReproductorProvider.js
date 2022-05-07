import { createContext,useState, useContext } from "react"; 
import { Alert } from "react-native";
import { PermissionContext } from "./index";
import { Audio } from "expo-av";

const ReproductorContext = createContext();

const ReproductorProvider = ({children})=> {

    const [ music, setMusicState ] = useState(null);

   // static contextType = PermissionContext;

    const setMusic = async( uri )=>{
        
        if(music) await music.unloadAsync();

        const audio = new Audio.Sound;
        await audio.loadAsync({uri : uri}, {isLooping : true})

        await audio.playAsync();
        
        setMusicState(audio);

    }
        
        return(
            <ReproductorContext.Provider
             value={{
                 music :music,
                 setMusic
             }}
             
            >
                {children}
            </ReproductorContext.Provider>
        )


}

export { ReproductorContext, ReproductorProvider }