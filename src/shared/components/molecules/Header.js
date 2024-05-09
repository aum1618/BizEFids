import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SIZES from '../../theme/sizes';
import typography from '../../theme/typography';

const Header = ({color, text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.welcome, {color: color.placeholder}]}>
          {text.hey} there!
        </Text>
        <Text style={[styles.time, {color: color.text}]}>
          Thursday, 12 November
        </Text>
      </View>
      <View>
        <Text style={[styles.time, {color: color.text}]}>Card</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: SIZES.SCALE_20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: SIZES.SCALE_10,
  },
  circle: {
    height: SIZES.SCALE_6,
    width: SIZES.SCALE_6,
    borderRadius: 4,
    top: -SIZES.SCALE_2,
    right: SIZES.SCALE_2,
    position: 'absolute',
    zIndex: 100,
  },
  time: {
    fontSize: typography.SCALE_16,
    fontFamily: typography.bold,
  },
  welcome: {
    fontSize: typography.FONT_SIZE_12,
    fontFamily: typography.regular,
  },
  overFlow: {overflow: 'hidden'},
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Header;
