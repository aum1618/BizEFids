import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import typography from '../../theme/typography';
import colors from '../../theme/colors';
import SIZES from '../../theme/sizes';

export default function PrimaryButton({onPress, text}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.dark.primary,
    borderRadius: 10,
    padding: SIZES.SCALE_14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: typography.medium,
    color: colors.dark.text,
    fontSize: typography.FONT_SIZE_16,
  },
});
