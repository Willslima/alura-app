import { StatusBar, SafeAreaView } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta'

export default function App() {
  let [fonteCarregada, fontError] = useFonts({
    "MontserratRegular":Montserrat_400Regular, 
    "MontserratBold":Montserrat_700Bold
  });

  if(!fonteCarregada){
     SplashScreen.preventAutoHideAsync();
     return null
  } else {
     SplashScreen.hideAsync();
  }

  return (
    <SafeAreaView >
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}

