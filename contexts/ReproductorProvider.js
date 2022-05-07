import { Component, createContext } from "react"; 
import { Alert } from "react-native";
import { PermissionContext } from "./index";
import { Audio } from "expo-av";

const ReproductorContext = createContext();

class ReproductorProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            music : null
        }
    }

    static contextType = PermissionContext;

    setMusic = async( uri )=>{

        let { music } = this.state;
        
        if(music){
            await music.unloadAsync();

        }

        const audio = new Audio.Sound;
        await audio.loadAsync({uri : uri},
            {
                isLooping : true,

            })

        await audio.playAsync();
        
        this.setState({ music : audio })

    }

    /*
    async componentDidMount(){
    
            if(!this.context.musics?.assets) return;
               
                const { sound } = await Audio.Sound.createAsync(this.context.musics.assets[0]);

                this.setMusic(sound);
        
    }

    async componentDidUpdate(){

            let music = this.state.music;
            if(music){
                await music.playAsync();
                return;
               
            } 
            const musics = this.context.musics?.assets ? this.context.musics.assets : [] ;
            if( musics ){
                const { sound } = await Audio.Sound.createAsync(this.context.musics.assets[0]);

                this.setMusic(sound);

                return;
            }

    }
    async componentWillUnmount(){
        await this.state.music.stopAync();
        await this.state.music.unloadAsync(); 
        
    }

     async pause(){
        let { music } = this.state;
        await music.pauseAsync();

    }
    */

    render(){
        
        
        return(
            <ReproductorContext.Provider
             value={{
                 music : this.state.music,
                 setMusic : this.setMusic,
             }}
            >
                {this.props.children}
            </ReproductorContext.Provider>
        )

    }
}

export { ReproductorContext, ReproductorProvider }