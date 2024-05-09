import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Wrapper from '../../../shared/components/organisms/Wrapper';
import {imagePaths} from '../../../shared/constants/paths';
import SIZES from '../../../shared/theme/sizes';
import typography from '../../../shared/theme/typography';
import PrimaryButton from '../../../shared/components/atoms/Buttons';
import {Camera, ChevronDown, ChevronLeft, MapPin} from 'lucide-react-native';
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
            marginBottom: SIZES.SCALE_30,
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
            locations
          </Text>
        </View>

        <View
          style={{
            gap: SIZES.SCALE_10,
            marginBottom: SIZES.SCALE_20,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Input
              heading={'Postal code'}
              placeholder={'Postal Code'}
              color={color}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: color.primary,
              borderRadius: 12,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              // padding: SIZES.SCALE_10,
              gap: SIZES.SCALE_6,
            }}>
            <MapPin color={color.white} size={SIZES.SCALE_16} />
            <Text
              style={{
                color: color.white,
                fontFamily: typography.regular,
                fontSize: typography.FONT_SIZE_14,
              }}>
              Use my Location
            </Text>
          </View>
        </View>
        <View
          style={{
            gap: SIZES.SCALE_10,
            marginBottom: SIZES.SCALE_20,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Input
              heading={'Province'}
              placeholder={'Province'}
              Icon={() => (
                <ChevronDown
                  strokeWidth={0.5}
                  color={color.white}
                  size={SIZES.SCALE_20}
                />
              )}
              color={color}
            />
          </View>
          <View style={{flex: 1}}>
            <Input
              heading={'City'}
              placeholder={'City'}
              Icon={() => (
                <ChevronDown
                  strokeWidth={0.5}
                  color={color.white}
                  size={SIZES.SCALE_20}
                />
              )}
              color={color}
            />
          </View>
        </View>
        <View style={{gap: SIZES.SCALE_20, marginBottom: SIZES.SCALE_10}}>
          <Input
            heading={'Address'}
            Icon={() => <MapPin color={color.white} size={SIZES.SCALE_16} />}
            placeholder={'H # 123, Street # 123'}
            color={color}
          />
          <Input
            heading={'Address'}
            Icon={() => <MapPin color={color.white} size={SIZES.SCALE_16} />}
            placeholder={'H # 123, Street # 123'}
            color={color}
          />
        </View>

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <PrimaryButton
            onPress={() => navigation.navigate(screens.success)}
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
