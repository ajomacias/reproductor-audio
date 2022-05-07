import {  PermissionContext , ReproductorContext} from "../contexts";
import { HomeScreen } from "../screens";
import { Fragment } from "react";

const Content = ( screen = null) => {


        return(
            <Fragment>
                    <PermissionContext.Consumer>
                        {(musics)=>(
                            
                            <ReproductorContext.Consumer>
                                {(music)=>(
                                    <HomeScreen music={music} musics={musics} />
                                    ) }
                            </ReproductorContext.Consumer>
                        )}
                    </PermissionContext.Consumer>
                    <HomeScreen />
                </Fragment>

        )
      
    


}

export { Content}