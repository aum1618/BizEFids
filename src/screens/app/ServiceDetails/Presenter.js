import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  useWindowDimensions,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Wrapper from '../../../shared/components/organisms/Wrapper';
import SIZES from '../../../shared/theme/sizes';
import {iconPaths, imagePaths} from '../../../shared/constants/paths';
import {
  BellDotIcon,
  Bookmark,
  ChevronLeft,
  Mail,
  Phone,
  Search,
  X,
} from 'lucide-react-native';
import typography from '../../../shared/theme/typography';
import palette from '../../../shared/theme/palette';
import {FlatList} from 'react-native-gesture-handler';
import {screens} from '../../../shared/constants/screens';
import {OnboardingScreens} from '../../onboarding/data';

export default function Presenter({color, text, navigation}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <Wrapper color={color}>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: SIZES.SCALE_20,
          gap: SIZES.SCALE_10,
        }}
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: SIZES.SCALE_10,
            marginHorizontal: SIZES.SCALE_20,
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
            Details
          </Text>
        </View>

        <View>
          <FlatList
            data={OnboardingScreens}
            renderItem={({item}) => (
              <OnboardingItem
                scrollX={scrollX}
                currentIndex={currentIndex}
                color={color}
                item={item}
              />
            )}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            bounces={false}
            keyExtractor={item => item.id.toString()}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: SIZES.SCALE_30,
              zIndex: 100,
              alignSelf: 'center',
            }}>
            <Paginator
              data={OnboardingScreens}
              currentIndex={currentIndex}
              scrollX={scrollX}
              color={color}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: SIZES.SCALE_20,
          }}>
          <Text
            style={{
              color: color.text,
              fontSize: typography.FONT_SIZE_18,
              fontFamily: typography.medium,
            }}>
            Service Overview
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(screens.ads)}>
            <Bookmark size={SIZES.SCALE_16} color={color.placeholder} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: color.placeholder,
            fontSize: typography.FONT_SIZE_16,
            fontFamily: typography.regular,
            paddingHorizontal: SIZES.SCALE_20,
          }}>
          We provide complete electrician services for residential and
          commercial properties. Our licensed and experienced team prioritizes
          safety, efficiency.
        </Text>
        <Text
          style={{
            color: color.primary,
            fontSize: typography.FONT_SIZE_16,
            fontFamily: typography.regular,
            paddingHorizontal: SIZES.SCALE_20,
          }}>
          www.acmecorporation.com
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: SIZES.SCALE_10,
            paddingHorizontal: SIZES.SCALE_20,
          }}>
          <Phone size={SIZES.SCALE_18} color={palette.yellow} />
          <Text
            style={{
              color: color.placeholder,
              fontSize: typography.FONT_SIZE_16,
              fontFamily: typography.regular,
            }}>
            123 456 7890{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: SIZES.SCALE_10,
            paddingHorizontal: SIZES.SCALE_20,
          }}>
          <Mail size={SIZES.SCALE_18} color={palette.yellow} />
          <Text
            style={{
              color: color.placeholder,
              fontSize: typography.FONT_SIZE_16,
              fontFamily: typography.regular,
            }}>
            acmecorporation@gmail.com
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: SIZES.SCALE_20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: SIZES.SCALE_10,
              alignSelf: 'flex-start',
              width: '40%',
            }}>
            <Text
              style={{
                color: color.placeholder,
                fontSize: typography.FONT_SIZE_14,
                fontFamily: typography.regular,
              }}>
              starts at{' '}
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
                style={{
                  fontSize: typography.FONT_SIZE_14,
                  color: color.text,
                }}>
                hour
              </Text>
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: SIZES.SCALE_4,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: color.white,
                fontFamily: typography.regular,
                fontSize: typography.FONT_SIZE_12,
                borderRadius: 999,
                paddingHorizontal: SIZES.SCALE_4,
                paddingVertical: SIZES.SCALE_2,
                backgroundColor: palette.banner,
              }}>
              Automotive
            </Text>
            <Text
              style={{
                color: color.white,
                fontFamily: typography.regular,
                fontSize: typography.FONT_SIZE_12,
                borderRadius: 999,
                paddingHorizontal: SIZES.SCALE_4,
                paddingVertical: SIZES.SCALE_2,
                backgroundColor: palette.banner,
              }}>
              Car Wash
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: SIZES.SCALE_20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: SIZES.SCALE_10,
              alignSelf: 'flex-start',
              width: '70%',
            }}>
            <Image
              source={imagePaths.ob2}
              style={{
                height: SIZES.SCALE_40,
                width: SIZES.SCALE_40,
                borderRadius: 999,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                color: color.text,
                fontFamily: typography.medium,
                fontSize: typography.FONT_SIZE_16,
              }}>
              Acme Corporation
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
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
        <Text
          style={{
            color: color.text,
            fontSize: typography.FONT_SIZE_16,
            fontFamily: typography.medium,
            marginHorizontal: SIZES.SCALE_20,
          }}>
          Our Services include
        </Text>
        <Text
          style={{
            color: color.text,
            fontSize: typography.FONT_SIZE_16,
            fontFamily: typography.regular,
            marginHorizontal: SIZES.SCALE_20,
          }}>
          Electrical Installations: Whether you're building a new property or
          renovating an existing one, our skilled electricians can handle all
          your installation needs. Repairs and Maintenance: Electrical issues
          can arise unexpectedly, causing inconvenience and safety hazards. Our
          team is equipped to diagnose and repair various electrical problems
          promptly. Upgrades and Renovations: Planning to upgrade your
          electrical systems or renovate your space? Count on us to provide
          expert guidance and seamless execution. Safety Inspections: Ensuring
          the safety of your electrical systems is paramount. We conduct
          thorough inspections to identify any potential hazards or code
          violations. Emergency Services: Electrical emergencies can occur at
          any time, disrupting your daily activities and posing risks to your
          property.
        </Text>
      </ScrollView>
    </Wrapper>
  );
}

const Paginator = ({data, currentIndex, color}) => {
  return (
    <View style={styles.paginatorContainer}>
      {data.map((_, i) => {
        const unselectedStyle = {
          backgroundColor: color.white,
          borderRadius: 999,
          height: SIZES.SCALE_8,
          width: SIZES.SCALE_8,
          marginHorizontal: 2,
        };
        const selectedStyle = {
          backgroundColor: 'transparent',
          borderRadius: 999,
          height: SIZES.SCALE_12,
          width: SIZES.SCALE_12,
          marginHorizontal: SIZES.SCALE_2,
          borderWidth: 1,
          borderColor: color.primary,
          padding: SIZES.SCALE_2,
        };
        return (
          <View
            key={i.toString()}
            style={i === currentIndex ? selectedStyle : unselectedStyle}>
            {currentIndex === i && (
              <View
                style={{
                  borderRadius: 999,
                  flex: 1,
                  backgroundColor: color.primary,
                }}
              />
            )}
          </View>
        );
      })}
    </View>
  );
};

const OnboardingItem = ({item, color, currentIndex, scrollX}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={{width}}>
      <View style={[styles.imageContainer, {height: SIZES.SCALE_200, width}]}>
        <View style={styles.imageWrapper}>
          <Image source={iconPaths.banner} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {resizeMode: 'cover', width: '100%', height: '100%'},
  imageWrapper: {
    flex: 1,
    // padding: SIZES.SCALE_20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 18,
    overflow: 'hidden',
  },
  imageContainer: {padding: SIZES.SCALE_20},

  paginatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    padding: SIZES.SCALE_20,
  },
  textContainer: {paddingVertical: SIZES.SCALE_20},
});
