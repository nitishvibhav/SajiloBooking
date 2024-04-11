import React from "react";
import AppNavigator from "./src/AppNavigator";
import { PaperProvider } from 'react-native-paper';


const App = () => {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}
export default App;
