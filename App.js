import React from 'react';
import {SafeAreaView, View, StatusBar, Image, Text} from 'react-native';
import { Asset } from 'react-native-unimodules';

//import { setCustomSourceTransformer } from 'react-native/Libraries/Image/resolveAssetSource';
// Override React Native's asset resolution for `Image` components, this recoverse the behaviour I want
/*
setCustomSourceTransformer(resolver => {
  // try {
  //     const asset = Asset.fromMetadata(resolver.asset);
  //     return resolver.fromSource(asset.downloaded ? asset.localUri : asset.uri);
  // }
  // catch (e) {
  //     return resolver.defaultAsset();
  // }
  return resolver.defaultAsset();
});
*/

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
