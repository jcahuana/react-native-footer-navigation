// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Navigation from './app/navigations/Navigation'
// import {
//   createInstance,
//   OptimizelyFeature,
//   OptimizelyProvider,
// } from '@optimizely/react-sdk';

// const optimizely = createInstance({
//   sdkKey: ''
// });

export default function App() {
  return <Navigation/>
}

// TODO: merge feature flags
/* export default function App() {
  return (
    <OptimizelyProvider
        optimizely={optimizely}
        timeout={5000}
        user={{
          id: 'user123',
        }}
      >
          <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" /> 

          <OptimizelyFeature feature="bottom-menu">
            {(enabled) => (
              enabled ? <Text>Feature is ON!</Text> : <Text>Feature is off.</Text>
            )}
          </OptimizelyFeature>
          </View>
    </OptimizelyProvider>
    
  );
} */