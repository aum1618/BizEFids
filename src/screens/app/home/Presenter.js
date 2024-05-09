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
  const [showAdd, setShowAdd] = useState(true);
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: SIZES.SCALE_10,
          }}>
          <Text
            style={{
              color: color.text,
              fontSize: typography.FONT_SIZE_18,
              fontFamily: typography.medium,
            }}>
            Classified Ads
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(screens.ads)}>
            <Text
              style={{
                color: color.primary,
                fontSize: typography.FONT_SIZE_14,
                fontFamily: typography.regular,
                textDecorationLine: 'underline',
              }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{marginVertical: SIZES.SCALE_10}}
          contentContainerStyle={{padding: SIZES.SCALE_10}}
          ItemSeparatorComponent={() => {
            return <View style={{width: SIZES.SCALE_10}} />;
          }}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <AdCard color={color} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}
        />
        {showAdd && (
          <View
            style={{
              marginHorizontal: SIZES.SCALE_10,
              borderRadius: 12,
              backgroundColor: color.primary,
              height: SIZES.SCALE_100,
            }}>
            <TouchableOpacity
              onPress={() => setShowAdd(false)}
              style={{
                position: 'absolute',
                height: SIZES.SCALE_20,
                width: SIZES.SCALE_20,
                borderRadius: 999,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: color.error,
                top: -SIZES.SCALE_8,
                right: -SIZES.SCALE_8,
                zIndex: 999,
              }}>
              <X color={color.white} size={SIZES.SCALE_12} />
            </TouchableOpacity>
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: SIZES.SCALE_10,
          }}>
          <Text
            style={{
              color: color.text,
              fontSize: typography.FONT_SIZE_18,
              fontFamily: typography.medium,
            }}>
            Buisnesses
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.businesses)}>
            <Text
              style={{
                color: color.primary,
                fontSize: typography.FONT_SIZE_14,
                fontFamily: typography.regular,
                textDecorationLine: 'underline',
              }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{gap: SIZES.SCALE_10, marginHorizontal: SIZES.SCALE_4}}>
          {new Array(10).fill(0).map((_, index) => (
            <BuisnessCard key={index.toString()} color={color} />
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

const AdCard = ({color, text}) => {
  return (
    <View
      style={{
        width: SIZES.SCALE_140,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        alignSelf: 'center',
        shadowRadius: 4.65,
        elevation: 7,
        backgroundColor: color.background,
        overflow: 'hidden',
        borderRadius: 12,
      }}>
      <View
        style={{
          position: 'absolute',
          backgroundColor: palette.banner,
          top: 0,
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
      </View>
      <View
        style={{
          padding: SIZES.SCALE_8,
          gap: SIZES.SCALE_6,
          paddingVertical: SIZES.SCALE_20,
        }}>
        <Image
          source={imagePaths.ob2}
          style={{
            height: SIZES.SCALE_60,
            width: SIZES.SCALE_60,
            borderRadius: 999,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            color: color.text,
            fontFamily: typography.bold,
            fontSize: typography.FONT_SIZE_14,
            textAlign: 'center',
            flexWrap: 'wrap',
          }}>
          Acme Corporation
        </Text>
        <Text
          style={{
            color: color.text,
            fontFamily: typography.regular,
            fontSize: typography.FONT_SIZE_12,
            alignSelf: 'center',
            width: '80%',
            textAlign: 'center',
            flexWrap: 'wrap',
          }}>
          It has been providing local business services from 5 years.{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: SIZES.SCALE_4,
            alignItems: 'center',
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
    </View>
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
          fontFamily: typography.bold,
        }}>
        Home
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
