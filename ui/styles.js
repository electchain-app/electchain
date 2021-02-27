import {
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const pageStyles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const textStyles = StyleSheet.create({
    header: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 20,
    },
    h1: {
      color: Colors.black,
    },
    button: {
      color: Colors.white, 
      padding: 10,
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
        // paddingTop: 10,
        // paddingBottom: 10,
        marginLeft: 100, 
        marginRight: 100,
    }
})

export {pageStyles, textStyles, buttonStyles};