import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import Wrapper from '../../../shared/components/organisms/Wrapper';
import SIZES from '../../../shared/theme/sizes';
import {iconPaths, imagePaths} from '../../../shared/constants/paths';
import {BellDotIcon, ChevronLeft, Search, X} from 'lucide-react-native';
import typography from '../../../shared/theme/typography';
import palette from '../../../shared/theme/palette';
import {FlatList} from 'react-native-gesture-handler';
import {screens} from '../../../shared/constants/screens';

export default function Presenter({color, text, navigation}) {
  const dummyNotifications = new Array(10).fill(0);

  return (
    <Wrapper color={color}>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: SIZES.SCALE_10,
        }}
        style={{
          paddingHorizontal: SIZES.SCALE_10,
          flex: 1,
        }}>
        <View
        //  style={{paddingHorizontal: SIZES.SCALE_10}}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: SIZES.SCALE_20,
              gap: SIZES.SCALE_10,
              marginHorizontal: SIZES.SCALE_6,
            }}>
            <TouchableOpacity style={{}}>
              <ChevronLeft color={color.text} size={SIZES.SCALE_14} />
            </TouchableOpacity>
            <Text
              style={{
                color: color.text,
                fontFamily: typography.medium,
                fontSize: typography.FONT_SIZE_20,
              }}>
              Buisnesses
            </Text>
          </View>
          {/* <View
            style={{
              flexDirection: 'row',
              gap: SIZES.SCALE_6,
              alignItems: 'center',
              marginHorizontal: SIZES.SCALE_10,
              marginBottom: SIZES.SCALE_20,
              padding: SIZES.SCALE_4,
              paddingHorizontal: SIZES.SCALE_10,
              backgroundColor: color.shadow,
              borderRadius: 12,
            }}>
            <Search color={color.placeholder} size={SIZES.SCALE_16} />
            <TextInput
              style={{
                color: color.text,
                fontFamily: typography.regular,
                fontSize: typography.FONT_SIZE_14,
                flex: 1,
                height: SIZES.SCALE_30,
              }}
              placeholder="Search"
              placeholderTextColor={color.placeholder}
            />
          </View> */}
          <View style={{gap: SIZES.SCALE_10, marginHorizontal: SIZES.SCALE_6}}>
            {dummyNotifications.map((notification, index) => {
              return <BuisnessCard color={color} />;
            })}
          </View>
        </View>
      </ScrollView>
    </Wrapper>
  );
}

const BuisnessCard = ({color}) => {
  return (
    <View
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        backgroundColor: color.background,
        overflow: 'hidden',
        borderRadius: 12,
      }}>
      {/* <View
        style={{
          position: 'absolute',
          backgroundColor: palette.banner,
          bottom: 0,
          right: 0,
          padding: SIZES.SCALE_4,
          paddingHorizontal: SIZES.SCALE_12,
          zIndex: 99,
        }}>
        <Text
          style={{
            color: color.white,
            fontFamily: typography.regular,
            fontSize: typography.FONT_SIZE_14,
          }}>
          Ad
        </Text>
      </View> */}
      <View
        style={{
          flexDirection: 'row',
          gap: SIZES.SCALE_6,
          padding: SIZES.SCALE_8,
          width: '100%',
        }}>
        <Image
          source={imagePaths.ob2}
          style={{
            height: SIZES.SCALE_50,
            width: SIZES.SCALE_50,
            borderRadius: 999,
            alignSelf: 'center',
          }}
        />
        <View style={{flex: 1, gap: SIZES.SCALE_8}}>
          <Text
            style={{
              color: color.text,
              fontFamily: typography.medium,
              fontSize: typography.FONT_SIZE_16,
              flexWrap: 'wrap',
            }}>
            Acme Corporation
          </Text>
          <Text
            style={{
              color: color.text,
              fontFamily: typography.regular,
              fontSize: typography.FONT_SIZE_12,
              width: '90%',
              flexWrap: 'wrap',
            }}>
            It has been providing local business services from 5 years.{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: SIZES.SCALE_4,
              flexWrap: 'wrap',
            }}>
            <Text
              style={{
                color: color.text,
                fontFamily: typography.regular,
                fontSize: typography.FONT_SIZE_12,
                borderRadius: 999,
                paddingHorizontal: SIZES.SCALE_4,
                paddingVertical: SIZES.SCALE_2,
                borderWidth: 1,
                borderColor: color.primary,
              }}>
              Automotive
            </Text>
            <Text
              style={{
                color: color.text,
                fontFamily: typography.regular,
                fontSize: typography.FONT_SIZE_12,
                borderRadius: 999,
                paddingHorizontal: SIZES.SCALE_4,
                paddingVertical: SIZES.SCALE_2,
                borderWidth: 1,
                borderColor: color.primary,
              }}>
              Car Wash
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-start',
            gap: SIZES.SCALE_4,
          }}>
          <Image
            style={{
              height: SIZES.SCALE_14,
              width: SIZES.SCALE_14,
              resizeMode: 'contain',
            }}
            source={iconPaths.star}
          />
          <Text
            style={{
              color: color.text,
              fontSize: typography.FONT_SIZE_14,
              fontFamily: typography.regular,
            }}>
            4.8
          </Text>
        </View>
      </View>
    </View>
  );
};
