import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Wrapper from '../../../shared/components/organisms/Wrapper';
import {imagePaths} from '../../../shared/constants/paths';
import SIZES from '../../../shared/theme/sizes';
import typography from '../../../shared/theme/typography';
import PrimaryButton from '../../../shared/components/atoms/Buttons';
import {Camera, ChevronLeft, Mail, User} from 'lucide-react-native';
import Input from '../../../shared/components/atoms/Inputs';
import {screens} from '../../../shared/constants/screens';

export default function Presenter({color, text, navigation}) {
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
            alignItems: 'center',
            marginBottom: SIZES.SCALE_10,
            gap: SIZES.SCALE_10,
          }}>
          <TouchableOpacity style={{}}>
            <ChevronLeft color={color.white} size={SIZES.SCALE_14} />
          </TouchableOpacity>
          <Text
            style={{
              color: color.white,
              fontFamily: typography.medium,
              fontSize: typography.FONT_SIZE_20,
            }}>
            Profile Setup
          </Text>
        </View>
        <Text
          style={{
            color: color.dim,
            fontFamily: typography.regular,
            fontSize: typography.FONT_SIZE_16,
          }}>
          Please complete your profile to continue.{' '}
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: SIZES.SCALE_40,
          }}>
          <View
            style={{
              height: SIZES.SCALE_70,
              width: SIZES.SCALE_70,
              borderRadius: 999,
              backgroundColor: 'green',
              alignItems: 'center',
              // overflow: 'hidden',
            }}>
            <View
              style={{
                backgroundColor: color.primary,
                position: 'absolute',
                zIndex: 100,
                height: SIZES.SCALE_24,
                width: SIZES.SCALE_24,
                right: 0,
                bottom: 0,
                borderRadius: 999,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Camera color={color.white} size={SIZES.SCALE_16} />
            </View>
            <View
              style={{
                height: '100%',
                width: '100%',
                overflow: 'hidden',
                borderRadius: 999,
              }}>
              <Image
                source={imagePaths.Buisness}
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
        </View>
        <View style={{gap: SIZES.SCALE_20, marginBottom: SIZES.SCALE_10}}>
          <Input
            heading={'Name'}
            placeholder={'Enter your name'}
            Icon={() => (
              <User
                strokeWidth={0.5}
                color={color.white}
                size={SIZES.SCALE_20}
              />
            )}
            color={color}
          />
          <Input
            heading={'Email'}
            placeholder={'Enter your email'}
            type={'email'}
            Icon={() => (
              <Mail
                strokeWidth={0.5}
                color={color.white}
                size={SIZES.SCALE_20}
              />
            )}
            color={color}
          />
        </View>

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <PrimaryButton
            onPress={() => navigation.navigate(screens.location)}
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
