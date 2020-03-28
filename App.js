import React from 'react';
import {SafeAreaView, View, StatusBar, Image, Text} from 'react-native';
import { Asset } from 'react-native-unimodules';

const imagen = require('./icono.png');

const App: () => React$Node = () => {
  const uriDeImagen = Image.resolveAssetSource(imagen).uri;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>
            This is being rendered, under me there should be an image.
          </Text>
          <Text>That images resolves as {uriDeImagen}</Text>
          <Text>
            If you comment or uncomment the line where Asset is imported, and
            reload the app, the image uri changes!
          </Text>
          <Image source={imagen} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
