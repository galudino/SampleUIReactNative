/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ReactNode} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface SectionProps {
  title?: string;
  body: string;
}

function Section(sectionProps: SectionProps): JSX.Element {
  const {title, body} = sectionProps;
  
  return (
    <>
    <Text style={styles.sectionHeaderFont}>{title}</Text>
    <View style={styles.sectionDivider}></View>
    <Text style={styles.sectionBodyFont}>{body}</Text>
    </>
  );
}

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Section title="SampleApp" body="Hello, world!"/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },

  sectionHeaderFont: {
    fontStyle:'italic',
    fontWeight:'bold'  
  },

  sectionDivider: {
    width:300,
    borderBottomColor:'black',
    borderWidth:0.5
  },

  sectionBodyFont: {
    fontWeight:'100',
    fontSize:60
  }
});

export default App;
