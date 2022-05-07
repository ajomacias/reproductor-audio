import { Component, createContext, useContext, useState, useEffect } from "react";
import * as MediaLibrery  from "expo-media-library"
import { Alert } from "react-native";
 
const PermissionContext = createContext();

const PermissionProvider = ({children})=> {
 
  const [musics, setMusics] = useState([]);


  const getPermissionAlert = () =>{
      Alert.alert("Permisos requeridos","Esta app necesita permisos",
      [
          {
              text: "ok",
              onPress : ()=>getPermission()
          },
          {
              text : "cancel",
              onPress : ()=> getPermissionAlert()
          }
          

      ])
  }

  const getPermission = async()=>{
      let permission =  await MediaLibrery.getPermissionsAsync();

      if(permission.granted){
        const music =   await MediaLibrery.getAssetsAsync ({
            mediaType : 'audio'
        })
       setMusics(music);
       
      }

      if(!permission.granted && permission.canAskAgain){
          
          const { status, canAskAgain } = await MediaLibrery.requestPermissionsAsync();

          if(status === 'granted' )
            setMusics(await MediaLibrery.getAssetsAsync({ mediaType : "audio" }))
          
          if(!status && canAskAgain ) getPermissionAlert();
          
          if(status === 'denied' && !canAskAgain ) Alert.alert("err","Debe dar permisos a la apLicacion")
          
      }

  }

  useEffect(()=>{
    (async()=>await getPermission())();
  },[])


    return (
      <PermissionContext.Provider
      value={{
          getPermission,
          musics : musics
      }}
      >
        {children}
      </PermissionContext.Provider>
    );
  
}


export { PermissionProvider,PermissionContext  };
