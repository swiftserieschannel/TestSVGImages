/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
    Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Image, SvgUri, SvgXml} from "react-native-svg";
import Img from "./images/image.svg"
import ImgTwo from "./images/image_2.svg"
import ImgThree from "./images/image_3.svg"
import ImgFour from "./images/image_4.svg"
import ImgFive from "./images/image_5.svg"
import ImgSix from "./images/image_6.svg"
import ImgSeven from "./images/image_7.svg"
import ImgEight from "./images/image_8.svg"
import ImgNine from "./images/image_9.svg"
import ImgTen from "./images/image_10.svg"
import ImgEleven from "./images/image_11.svg"
import ImgTwelve from "./images/image_12.svg"
import ImgThirteen from "./images/image_13.svg"
import ImgFourteen from "./images/image_14.svg"

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Img style={styles.image} />
          <ImgTwo style={styles.image} />
          <ImgThree style={styles.image} />
          <ImgFour style={styles.image} />
          <ImgFive style={styles.image} />
          <ImgSix style={styles.image} />
          <ImgSeven style={styles.image} />
          <ImgEight style={styles.image} />
          <ImgNine style={styles.image} />
          <ImgTen style={styles.image} />
          <ImgEleven style={styles.image} />
          <ImgTwelve style={styles.image} />
          <ImgThirteen style={styles.image} />
          <ImgFourteen style={styles.image} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
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
  image:{
    width: Dimensions.get('screen').width - 40,
    marginVertical: 10,
    height: 200,
    alignSelf: 'center'
  }
});

export default App;
