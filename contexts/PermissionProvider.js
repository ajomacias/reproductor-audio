import { Component, createContext, useContext, useState, useEffect } from "react";
import * as MediaLibrery  from "expo-media-library"
import { Alert } from "react-native";
 
const PermissionContext = createContext();

class PermissionProvider extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
        musics : []
    }
  }

  componentDidMount() {
    this.getPermission();
  }


  getPermissionAlert = () =>{
      Alert.alert("Permisos requeridos","Esta app necesita permisos",
      [
          {
              text: "ok",
              onPress : ()=>this.getPermission()
          },
          {
              text : "cancel",
              onPress : ()=> this.getPermissionAlert()
          }
          

      ])
  }

  getPermission = async()=>{
      let permission =  await MediaLibrery.getPermissionsAsync();

      if(permission.granted){
        const music =   await MediaLibrery.getAssetsAsync ({
            mediaType : 'audio'
        })
       this.setState({ musics : music })
      }

      if(!permission.granted && permission.canAskAgain){
          
          const { status, canAskAgain } = await MediaLibrery.requestPermissionsAsync();

          if(status === 'granted' ){
            this.setState( {musics : await MediaLibrery.getAssetsAsync({ mediaType : 'audio' })}) 
          }
          if(!status && canAskAgain ) {
              this.getPermissionAlert();
          }
          if(status === 'denied' && !canAskAgain ){
              Alert.alert("err","Debe dar permisos a la apLicacion")
          }
          
      }

  }

  render() {
    return (
      <PermissionContext.Provider
      value={{
          getPermission : this.getPermission,
          musics : this.state.musics
      }}
      >
        {this.props.children}
      </PermissionContext.Provider>
    );
  }
}


export { PermissionProvider,PermissionContext  };
