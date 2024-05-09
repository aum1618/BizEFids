import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Wrapper from '../../../shared/components/organisms/Wrapper';
import {imagePaths} from '../../../shared/constants/paths';
import SIZES from '../../../shared/theme/sizes';
import typography from '../../../shared/theme/typography';
import PrimaryButton from '../../../shared/components/atoms/Buttons';
import {screens} from '../../../shared/constants/screens';

export default function Presenter({color, text, navigation}) {
  const [isIndividual, setIsIndividual] = useState(0);
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
        }}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={imagePaths.graphic}
        />
      </View>
      <View style={{flex: 1, padding: SIZES.SCALE_20}}>
        <View
          style={{
            margin: SIZES.SCALE_20,
            marginTop: SIZES.SCALE_50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={imagePaths.logo}
            style={{height: SIZES.SCALE_100, width: SIZES.SCALE_100}}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, {color: color.white}]}>Profile Type</Text>
          <Text style={[styles.description, {color: color.white}]}>
            Select your role to proceed.
          </Text>
        </View>
        <Card
          color={color}
          image={imagePaths.Individual}
          title={'Individual User'}
          descritpion={
            'Discover, book, and manage local services with verified reviews.'
          }
          selected={isIndividual === 1}
          setSelected={setIsIndividual}
        />
        <Card
          color={color}
          image={imagePaths.Buisness}
          title={'Business User'}
          descritpion={
            'Service listing, subscription management, promotion, analytics.'
          }
          selected={isIndividual === 2}
          setSelected={setIsIndividual}
        />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <PrimaryButton
            onPress={() => {
              navigation.navigate(screens.login);
            }}
            text={'CONTINUE'}
          />
        </View>
      </View>
    </Wrapper>
  );
}

const Card = ({color, image, title, descritpion, selected, setSelected}) => {
  const onPress = () => {
    if (title === 'Individual User') {
      setSelected(1);
    } else {
      setSelected(2);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{
        padding: SIZES.SCALE_10,
        marginBottom: SIZES.SCALE_20,
        paddingVertical: SIZES.SCALE_14,
        borderRadius: 12,
        backgroundColor: color.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SIZES.SCALE_10,
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            height: SIZES.SCALE_44,
            width: SIZES.SCALE_44,
            borderRadius: 32,
            backgroundColor: color.tertiary,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              resizeMode: 'contain',
              height: '70%',
              width: '70%',
              borderRadius: 999,
            }}
            source={image}
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: color.primary,
            fontSize: typography.FONT_SIZE_20,
            fontFamily: typography.medium,
            marginBottom: SIZES.SCALE_4,
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: color.black,
            fontSize: typography.FONT_SIZE_14,
            fontFamily: typography.regular,
          }}>
          {descritpion}
        </Text>
      </View>
      {selected && (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={imagePaths.check}
            style={{
              height: SIZES.SCALE_20,
              width: SIZES.SCALE_20,
              resizeMode: 'contain',
            }}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = {
  title: {
    fontWeight: typography.FONT_WEIGHT_BOLD,
    fontSize: typography.FONT_SIZE_24,
    textAlign: 'center',
    fontFamily: typography.bold,
    marginBottom: SIZES.SCALE_10,
  },
  description: {
    fontFamily: typography.light,
    textAlign: 'center',
  },
  textContainer: {paddingVertical: SIZES.SCALE_20},
};
