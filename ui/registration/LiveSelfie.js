import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';

import {pageStyles, textStyles, buttonStyles} from '.././styles.js';
import {InstructionText} from './../App.js';
import { RNCamera } from 'react-native-camera';

var ios = Platform.OS === 'ios';

const LiveSelfieScreen = ({navigation}) => {

  const cameraRef = useRef(null);
  const [uri, setUri] = useState('initial');
  const [nextPage, setNextPage] = useState(false);

  const takePicture = async () => {
      const options = { quality: 0.5, base64: true }; 
      const data = await cameraRef.current.takePictureAsync(options);
      const data_uri = await data.uri;
      await setUri(data_uri);
      console.log("1 just took:" + data_uri);

  }

    return(
    <View style={styles.camera_container}>

      <View style={[styles.main_container, {paddingTop: 32, paddingBottom: ios ? '10%':'30%',}]}>
        <InstructionText
          header="take"
          details="a picture of yourself"
        />
      </View>

      <RNCamera 
      ref={cameraRef}
      defaultTouchToFocus
      mirrorImage={false}
      style={{flex: 1}}
      captureAudio={false}
      style={styles.preview}
      onPictureTaken={() => navigation.navigate('ViewPic', {
              uri: uri,
              nextPage: 'IdentityApproval',
            })}
      />

      <View style={[styles.main_container, {paddingBottom: '10%',}]}>
        <TouchableOpacity 
            style={buttonStyles.red_button}
            onPress={() => {
              takePicture()
              console.log('2 in uri: ' + uri);                 
            }}
            >
            <Text style={textStyles.button}>Capture</Text>
          </TouchableOpacity>
      </View>

    </View>
    )
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
  camera_container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export {LiveSelfieScreen};