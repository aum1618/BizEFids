import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {OnboardingScreens} from './data';
import Wrapper from '../../shared/components/organisms/Wrapper';
import SIZES from '../../shared/theme/sizes';
import typography from '../../shared/theme/typography';
import colors from '../../shared/theme/colors';
import {useDispatch} from 'react-redux';
import {completeOnboarding} from '../../redux/reducers/appConfig';
import PrimaryButton from '../../shared/components/atoms/Buttons';

const color = colors.dark;
export default function Onboarding() {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;
  const nextSlide = () => {
    if (currentIndex < OnboardingScreens.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      console.log('Last slide');
      dispatch(completeOnboarding());
    }
  };
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <Wrapper color={{background: color.secondary}}>
      <View style={styles.buttonContainer}>
        <Paginator
          data={OnboardingScreens}
          currentIndex={currentIndex}
          scrollX={scrollX}
        />
        <Text style={styles.skip}>Skip</Text>
      </View>
      <View style={{flex: 3}}>
        <FlatList
          data={OnboardingScreens}
          renderItem={({item}) => <OnboardingItem item={item} />}
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
      </View>
      <View style={{flex: 0.7, padding: SIZES.SCALE_20}}>
        <PrimaryButton
          onPress={nextSlide}
          text={
            currentIndex === OnboardingScreens.length - 1
              ? 'Get Started'
              : 'Next'
          }
        />
      </View>
    </Wrapper>
  );
}

const Paginator = ({data, currentIndex}) => {
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
          backgroundColor: color.secondary,
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

const OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[{width}]}>
      <View style={[styles.imageContainer, {height: width, width}]}>
        <View style={styles.imageWrapper}>
          <Image source={item.image} style={styles.image} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.data.title}</Text>
        <Text style={styles.description}>{item.data.description}</Text>
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
  image: {resizeMode: 'contain', flex: 1, borderRadius: 999},
  imageWrapper: {
    flex: 1,
    borderRadius: 999,
    padding: SIZES.SCALE_20,
    borderWidth: 2,
    borderColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {padding: SIZES.SCALE_20},
  title: {
    fontWeight: typography.FONT_WEIGHT_BOLD,
    fontSize: typography.FONT_SIZE_24,
    marginBottom: SIZES.SCALE_10,
    color: color.text,
    textAlign: 'center',
    fontFamily: typography.bold,
  },
  description: {
    fontFamily: typography.light,
    textAlign: 'center',
    paddingHorizontal: SIZES.SCALE_64,
    color: color.white,
  },
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
  skip: {
    color: color.text,
    textDecorationLine: 'underline',
    fontFamily: typography.regular,
    fontSize: typography.FONT_SIZE_16,
  },
  textContainer: {paddingVertical: SIZES.SCALE_20},
});
