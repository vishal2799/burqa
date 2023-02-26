import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import RootNavigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; //-->add
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <RootNavigation />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
    // <View style={styles.container}>
    //   <Text style={{ fontFamily: 'Roboto_400Regular' }}>Hello World</Text>
    //   <Text style={{ fontFamily: 'Roboto_700Bold' }}>Hello World</Text>
    //   <Text>Hello World</Text>
    //   <Ionicons name='md-checkmark-circle' size={32} color='green' />

    //   <StatusBar style='auto' />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
