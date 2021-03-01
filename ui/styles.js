import {
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

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

const textStyles = StyleSheet.create({
  header: {
    color: Colors.black,
    fontSize: 36,
    fontFamily: 'Barlow-Bold'
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
  fieldInput: {
    color: Colors.black,
    fontFamily: 'Inter-Light',
    fontSize: 16,
    borderBottomWidth: 1.0,
  },
  fieldLabel: {
    color: Colors.black,
    fontFamily: 'Inter-Light',
    fontSize: 16,
  },
  checkbox: {
    color: Colors.black,
    fontFamily: 'Barlow-Regular',
    fontSize: 16,
    marginTop: 20,
  },
  centered: {
    textAlign: 'center',
    color: Colors.black,
    paddingBottom: 20,
    fontSize: 16,
  }
})

const buttonStyles = StyleSheet.create({
  red_button: {
    backgroundColor: '#FF5D5B',
    borderRadius: 25,
    alignItems: 'center',
    marginLeft: 100, 
    marginRight: 100,
    marginTop: 30
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

export {pageStyles, textStyles, buttonStyles, shapes};