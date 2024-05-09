import {View, Text} from 'react-native';
import React from 'react';
import SIZES from '../../theme/sizes';
import typography from '../../theme/typography';
import {TextInput} from 'react-native-gesture-handler';
import {ChevronDown, Phone} from 'lucide-react-native';

export default function Input({
  color,
  type,
  heading,
  placeholder,
  Icon,
  value,
  onChangeText,
}) {
  return (
    <View
      style={{
        borderRadius: 12,
        borderWidth: 1,
        borderColor: color.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SIZES.SCALE_8,
        paddingVertical: SIZES.SCALE_4,
        gap: SIZES.SCALE_4,
      }}>
      <Text
        style={{
          fontSize: typography.FONT_SIZE_14,
          fontFamily: typography.regular,
          color: color.white,
          position: 'absolute',
          left: SIZES.SCALE_12,
          top: -SIZES.SCALE_8,
          backgroundColor: color.secondary,
          paddingHorizontal: SIZES.SCALE_4,
        }}>
        {heading}
      </Text>
      {type === 'phone' && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRightWidth: 1,
            borderRightColor: color.placeholder,
          }}>
          <ChevronDown
            strokeWidth={0.5}
            color={color.white}
            size={SIZES.SCALE_20}
          />
          <Text
            style={{
              fontFamily: typography.regular,
              color: color.placeholder,
              marginRight: SIZES.SCALE_8,
            }}>
            +92
          </Text>
        </View>
      )}
      <TextInput
        style={{flex: 1, fontFamily: typography.regular}}
        placeholder={placeholder}
        cursorColor={color.white}
        placeholderTextColor={color.dim}
        value={value}
        onChangeText={e => onChangeText(e)}
      />
      {Icon && <Icon />}
    </View>
  );
}
