import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { Button, StyleSheet, View } from 'react-native';

const Complete = () => {
  const animation = useRef(null);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        source={{
          uri: 'https://assets6.lottiefiles.com/packages/lf20_o02kdakv.json',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
      />
      <View style={styles.buttonContainer}>
        <Button
          title='Restart Animation'
          onPress={() => {
            animation.current?.reset();
            animation.current?.play();
          }}
        />
      </View>
    </View>
  );
};

export default Complete;

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
