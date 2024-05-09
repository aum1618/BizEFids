import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Wrapper from '../../../shared/components/organisms/Wrapper';
import {imagePaths} from '../../../shared/constants/paths';
import SIZES from '../../../shared/theme/sizes';
import typography from '../../../shared/theme/typography';
import PrimaryButton from '../../../shared/components/atoms/Buttons';
import {ChevronDown, ChevronLeft, Eye, Phone, User} from 'lucide-react-native';
import Input from '../../../shared/components/atoms/Inputs';
import {Avatar} from 'react-native-paper';

export default function Presenter({color, text}) {
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

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
            }}>
            skip for now
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, {color: color.white}]}>
            Create New Account
          </Text>
        </View>
        <View
          style={{
            marginBottom: SIZES.SCALE_10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={imagePaths.warn}
            style={{
              height: SIZES.SCALE_20,
              width: SIZES.SCALE_20,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              color: color.white,
              fontFamily: typography.regular,
              fontSize: typography.FONT_SIZE_14,
              textAlign: 'center',
            }}>
            {' '}
            Please enter your phone number and password
          </Text>
        </View>
        <View style={{gap: SIZES.SCALE_20, marginBottom: SIZES.SCALE_10}}>
          <Input
            heading={'Username'}
            placeholder={'Enter your username'}
            type={'text'}
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
          <Input
            value={password}
            type={'password'}
            onChangeText={setPassword}
            heading={'Password'}
            placeholder={'Enter your password'}
            Icon={() => (
              <Eye
                strokeWidth={0.5}
                color={color.white}
                size={SIZES.SCALE_20}
              />
            )}
            color={color}
          />
          <Input
            value={password}
            type={'password'}
            onChangeText={setPassword}
            heading={'Confirm Password'}
            placeholder={'confirm your password'}
            Icon={() => (
              <Eye
                strokeWidth={0.5}
                color={color.white}
                size={SIZES.SCALE_20}
              />
            )}
            color={color}
          />
        </View>

        <View style={{marginVertical: SIZES.SCALE_20}}>
          <PrimaryButton color={color} text={'Sign Up'} />
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: color.placeholder,
            marginVertical: SIZES.SCALE_20,
          }}>
          <View
            style={{
              width: '100%',
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              top: -SIZES.SCALE_6,
            }}>
            <Text
              style={{
                color: color.placeholder,
                fontFamily: typography.regular,
                fontSize: typography.FONT_SIZE_14,
                textAlign: 'center',
                backgroundColor: color.secondary,
                paddingHorizontal: SIZES.SCALE_4,
              }}>
              OR
            </Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: SIZES.SCALE_20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: SIZES.SCALE_10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: color.white,
              paddingVertical: SIZES.SCALE_12,
              paddingHorizontal: SIZES.SCALE_24,
              borderRadius: 12,
            }}>
            <Image
              source={imagePaths.google}
              style={{
                resizeMode: 'contain',
                height: SIZES.SCALE_20,
                width: SIZES.SCALE_20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: color.white,
              paddingVertical: SIZES.SCALE_12,
              paddingHorizontal: SIZES.SCALE_24,
              borderRadius: 12,
            }}>
            <Image
              source={imagePaths.apple}
              style={{
                resizeMode: 'contain',
                height: SIZES.SCALE_20,
                width: SIZES.SCALE_20,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Text
            style={{
              color: color.white,
              fontFamily: typography.regular,
              fontSize: typography.FONT_SIZE_14,
            }}>
            Already have an account?{' '}
          </Text>
          <Text
            style={{
              color: color.primary,
              fontFamily: typography.regular,
              fontSize: typography.FONT_SIZE_14,
              textDecorationLine: 'underline',
            }}>
            Sign In
          </Text>
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
