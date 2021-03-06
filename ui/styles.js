import {
  StyleSheet,
  Platform,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import React from "react";

var ios = Platform.OS === 'ios';

const pageStyles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

const selectPageStyles = StyleSheet.create({
  body: {
    backgroundColor: '#FFA2A0',
    flex: 1
  },
  sectionContainer: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: '#FFA2A0',
  },
  buttonContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#FFA2A0',
    flexDirection: 'row'
  },
  choiceContainer: {
    marginTop: 30,
    height: 50,
    borderRadius: 42,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 25,
    alignItems: 'center'
  }
});

const textStyles = StyleSheet.create({
  header: {
    color: Colors.black,
    fontSize: 36,
    fontFamily: 'Barlow-Bold',
    fontWeight: 'bold'
  },
  details: {
    color: Colors.black,
    fontSize: 25,
    fontFamily: 'Barlow-Regular'
  },
  h1: {
    color: Colors.black,
  },
  button: {
    color: Colors.white,
    padding: 10,
  },
  field: {
  },
  fieldInput: {
    color: Colors.black,
    fontFamily: 'Inter-Light',
    fontSize: 16,
    borderBottomWidth: 1.0,
    paddingVertical: ios ? 5 : 0,
  },
  fieldLabel: {
    color: Colors.black,
    fontFamily: 'Inter-Light',
    fontSize: 16,
    marginBottom: ios ? 20 : 0,
    marginTop: ios ? 5 : 0,
  },
  checkbox: {
    color: Colors.black,
    fontFamily: 'Barlow-Regular',
    fontSize: 16,
    padding: 10,
  },
  centered: {
    textAlign: 'center',
    color: Colors.black,
    paddingBottom: 20,
    fontSize: 16,
  }
})

const selectTextStyles = StyleSheet.create({
  header: {
    color: '#FF0400',
    fontSize: 36,
    fontFamily: 'Barlow-Bold'
  },
  details: {
    color: Colors.white,
    fontSize: 25,
    fontFamily: 'Barlow-Regular'
  },
  button: {
    opacity: 0,
    height: 0
  },
})

const buttonStyles = StyleSheet.create({
  red_button: {
    backgroundColor: '#FF5D5B',
    borderRadius: 25,
    alignItems: 'center',
    marginLeft: 100,
    marginRight: 100,
    marginTop: 30
  },
  next_blue_button: {
    backgroundColor: '#8CB9FF',
    borderRadius: 25,
    marginLeft: 190,
    marginRight: 0,
    marginTop: 30
  },
  next_blue_button_2: {
    backgroundColor: '#8CB9FF',
    alignItems: 'center',
    marginLeft: 300,
    marginRight: 0,
    marginTop: 30,
    borderRadius: 25

  },
  prev_blue_button: {
    backgroundColor: '#8CB9FF',
    borderRadius: 25,
    marginTop: 30
  },
  text: {
    color: Colors.white,
    width: 80,
    padding: 10,
    marginLeft: 15,
  },
  hidden: {
    opacity: 0,
    height: 0
  }
})

const shapes = StyleSheet.create({
  CircleShape: {
    marginVertical: 50,
    marginHorizontal: 50,
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    borderStyle: 'solid',
    borderColor: '#0064FF',
    borderWidth: 5,
    // backgroundColor: '#0064FF',
    }
})

export {pageStyles, selectPageStyles, textStyles, selectTextStyles, buttonStyles, shapes};
