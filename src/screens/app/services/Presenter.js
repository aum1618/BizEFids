import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Wrapper from '../../../shared/components/organisms/Wrapper';
import SIZES from '../../../shared/theme/sizes';
import {iconPaths, imagePaths} from '../../../shared/constants/paths';
import {BellDotIcon, X} from 'lucide-react-native';
import typography from '../../../shared/theme/typography';
import palette from '../../../shared/theme/palette';
import {FlatList} from 'react-native-gesture-handler';
import {screens} from '../../../shared/constants/screens';

export default function Presenter({color, text, navigation}) {
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
        <View style={{paddingHorizontal: SIZES.SCALE_10}}>
          <Header navigatiion={navigation} color={color} />
        </View>
        <FlatList
          style={{marginBottom: SIZES.SCALE_10}}
          contentContainerStyle={{paddingHorizontal: SIZES.SCALE_10}}
          ItemSeparatorComponent={() => {
            return <View style={{width: SIZES.SCALE_6}} />;
          }}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Tag color={color} text={text} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}
        />
        <View style={{gap: SIZES.SCALE_10, marginHorizontal: SIZES.SCALE_4}}>
          {new Array(10).fill(0).map((_, index) => (
            <BuisnessCard
              navigation={navigation}
              key={index.toString()}
              color={color}
            />
          ))}
          {/* <FlatList
            contentContainerStyle={{padding: SIZES.SCALE_10}}
            ItemSeparatorComponent={() => {
              return <View style={{height: SIZES.SCALE_10}} />;
            }}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <BuisnessCard color={color} />}
            showsHorizontalScrollIndicator={false}
            bounces={false}
          /> */}
        </View>
      </ScrollView>
    </Wrapper>
  );
}

const BuisnessCard = ({color, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(screens.serviceDetails);
      }}
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
      <View
        style={{
          flexDirection: 'row',
          gap: SIZES.SCALE_6,
          padding: SIZES.SCALE_8,
          paddingVertical: SIZES.SCALE_12,
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
              fontSize: typography.FONT_SIZE_18,
              flexWrap: 'wrap',
            }}>
            Acme Corporation
          </Text>
          <Text
            style={{
              color: color.primary,
              fontFamily: typography.regular,
              fontSize: typography.FONT_SIZE_16,
              width: '90%',
              flexWrap: 'wrap',
            }}>
            $ 20 /{' '}
            <Text
              style={{fontSize: typography.FONT_SIZE_14, color: color.text}}>
              hour
            </Text>
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: color.primary,
                fontFamily: typography.regular,
                fontSize: typography.FONT_SIZE_14,
                textDecorationLine: 'underline',
              }}>
              View Details
            </Text>
          </TouchableOpacity>
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
    </TouchableOpacity>
  );
};

const Tag = ({color, text}) => {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setSelected(!selected)}
      style={{
        padding: SIZES.SCALE_4,
        paddingHorizontal: SIZES.SCALE_10,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: color.primary,
        backgroundColor: selected ? color.primary : color.white,
      }}>
      <Text
        style={{
          fontSize: typography.FONT_SIZE_14,
          fontFamily: typography.regular,
          color: selected ? color.white : color.primary,
        }}>
        Automotive
      </Text>
    </TouchableOpacity>
  );
};

const Header = ({color, navigatiion}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.SCALE_20,
      }}>
      <Text
        style={{
          color: color.text,
          fontSize: typography.FONT_SIZE_20,
          fontFamily: typography.medium,
        }}>
        Services
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: SIZES.SCALE_8,
        }}>
        <TouchableOpacity
          onPress={() => navigatiion.navigate(screens.notification)}
          style={{
            height: SIZES.SCALE_24,
            width: SIZES.SCALE_24,
            borderRadius: 999,
            backgroundColor: palette.yellow,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}>
          <BellDotIcon color={color.white} size={SIZES.SCALE_14} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={imagePaths.ob1}
            style={{
              height: SIZES.SCALE_24,
              width: SIZES.SCALE_24,
              borderRadius: 999,
              backgroundColor: palette.yellow,
              overflow: 'hidden',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
