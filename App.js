import 'expo-dev-client';
//import { StatusBar } from 'expo-status-bar';
import react from "react";
import { PermissionProvider,ReproductorProvider } from "./contexts";

import Router from "./Router";

export default function App() { 
  return (
    <react.Fragment>
      <PermissionProvider>
        <ReproductorProvider>
      <Router />
      </ReproductorProvider>
      </PermissionProvider>
    </react.Fragment>
  );
}
