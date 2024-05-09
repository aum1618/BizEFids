import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Wrapper from '../../../shared/components/organisms/Wrapper';
import {imagePaths} from '../../../shared/constants/paths';
import SIZES from '../../../shared/theme/sizes';
import typography from '../../../shared/theme/typography';
import PrimaryButton from '../../../shared/components/atoms/Buttons';
import {ChevronLeft, Phone} from 'lucide-react-native';
import Input from '../../../shared/components/atoms/Inputs';
import {screens} from '../../../shared/constants/screens';

export default function Presenter({color, text, navigation}) {
  const [phone, setPhone] = React.useState('');
  return (
    <Wrapper color={{background: color.secondary}}>
      <View
        style={{
          width: '100%',
          height: '60%',
          // backgroundColor: 'green',
          opacity: 0.3,
          zIndex: -99,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={imagePaths.graphic}
        />
      </View>
      <View style={{flex: 1, padding: SIZES.SCALE_20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: SIZES.SCALE_20,
          }}>
          <TouchableOpacity style={{position: 'absolute', left: 0, top: 0}}>
            <ChevronLeft color={color.white} size={SIZES.SCALE_14} />
          </TouchableOpacity>
          <Image
            source={imagePaths.logo}
            style={{
              height: SIZES.SCALE_30,
              width: SIZES.SCALE_30,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              color: color.white,
              textDecorationLine: 'underline',
              fontFamily: typography.regular,
              fontSize: typography.FONT_SIZE_14,
              position: 'absolute',
              right: 0,
              top: 0,
            }}></Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, {color: color.white}]}>
            Forgot Password
          </Text>
        </View>
        <Text
          style={{
            color: color.white,
            fontFamily: typography.regular,
            fontSize: typography.FONT_SIZE_14,
            textAlign: 'center',
            marginBottom: SIZES.SCALE_20,
          }}>
          {' '}
          Please Enter your Phone Number to receive a verification code
        </Text>
        <View style={{gap: SIZES.SCALE_20, marginBottom: SIZES.SCALE_10}}>
          <Input
            heading={'Phone Number'}
            placeholder={'3245023478'}
            type={'phone'}
            Icon={() => (
              <Phone
                strokeWidth={0.5}
                color={color.white}
                size={SIZES.SCALE_20}
              />
            )}
            value={phone}
            onChangeText={setPhone}
            color={color}
          />
        </View>

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <PrimaryButton
            onPress={() => navigation.navigate(screens.OTPScreen)}
            color={color}
            text={'Get Code'}
          />
        </View>
      </View>
    </Wrapper>
  );
}
const styles = {
  title: {
    fontSize: typography.FONT_SIZE_24,
    textAlign: 'center',
    fontFamily: typography.medium,
    marginBottom: SIZES.SCALE_10,
  },

  textContainer: {paddingVertical: SIZES.SCALE_20},
};
