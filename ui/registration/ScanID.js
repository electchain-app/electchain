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
  Image
} from 'react-native';

import {pageStyles, textStyles, buttonStyles} from '.././styles.js';
import {InstructionText} from './../App.js';
import { RNCamera } from 'react-native-camera';

const ScanIDScreen = ({navigation}) => {

  const cameraRef = useRef(null);
  const [uri, setUri] = useState('');

  const takePicture = async () => {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log("just took: " + uri);
  
  }

    return(
          <View style={styles.camera_container}>

            <View style={[styles.main_container, {paddingTop: 32, paddingBottom: '30%',}]}>
              <InstructionText
                header="scan"
                details="your driver's license"
              />
            </View>
   
            <RNCamera 
            //   ref={ref => {
            //     this.camera = ref;
            // }}
            ref={cameraRef}
            defaultTouchToFocus
            mirrorImage={false}
            style={{flex: 1}}
            captureAudio={false}
            style={styles.preview}
            />

          <View style={[styles.main_container, {paddingBottom: '10%',}]}>
            <TouchableOpacity 
                style={buttonStyles.red_button}
                // onPress={() => navigation.navigate('LiveSelfie')}
                onPress={() => {
                  
                  takePicture(cameraRef);
                  console.log('in uri: ' + uri);
                  navigation.navigate('ViewPic', {
                    uri: uri,
                  })
                  
                }}
                >
                <Text style={textStyles.button}>Scan</Text>
              </TouchableOpacity>
          </View>

          </View>
    )
}

const ViewPicScreen = ({navigation, route}) => {

  const {uri} = route.params;

  return(
    <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>          
            <Image source={{uri: uri}}
            style={{width: 200, height: 200}}/>
    </View>
  );
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

export {ScanIDScreen, ViewPicScreen};