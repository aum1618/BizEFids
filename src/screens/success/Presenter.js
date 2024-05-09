import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Wrapper from '../../shared/components/organisms/Wrapper';
import SIZES from '../../shared/theme/sizes';
import typography from '../../shared/theme/typography';
import PrimaryButton from '../../shared/components/atoms/Buttons';
import {screens} from '../../shared/constants/screens';
import LottieView from 'lottie-react-native';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/reducers/appConfig';

export default function Presenter({color, text, navigation}) {
  const animationRef = useRef(null);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };
  console.log('🚀 ~ handleLogin ~ handleLogin:', handleLogin);
  useEffect(() => {
    animationRef.current?.play();

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play();
  }, []);
  return (
    <Wrapper
      style={{padding: SIZES.SCALE_20}}
      color={{background: color.secondary}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LottieView
          ref={animationRef}
          style={{height: SIZES.SCALE_200, width: SIZES.SCALE_200}}
          source={require('../../assets/animations/done.json')}
          loop={false}
          autoPlay={true}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.title, {color: color.white}]}>Profile Type</Text>
          <Text style={[styles.description, {color: color.white}]}>
            Select your role to proceed.
          </Text>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <PrimaryButton onPress={handleLogin} color={color} text={'Get Code'} />
      </View>
    </Wrapper>
  );
}
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
};
