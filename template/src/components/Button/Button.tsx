import React from 'react';
import { If } from 'components';
import {
  ActivityIndicator,
  Pressable,
  PressableAndroidRippleConfig,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { styles } from './styles';
import Colors from 'themes/Colors';
interface Props {
  onPress: () => void;
  children?: React.ReactNode;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  androidRipple?: PressableAndroidRippleConfig;
  buttonStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
}

export const Button = (props: Props) => {
  const {
    title,
    titleStyle,
    buttonStyle,
    children,
    disabled,
    loading,
    loadingColor = Colors.white,
    androidRipple,
    onPress,
  } = props;
  const buttonStyleWrapper = disabled
    ? [styles.container, styles.disabledButton, buttonStyle]
    : [styles.container, buttonStyle];
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      android_ripple={androidRipple}
      style={buttonStyleWrapper}>
      <If condition={Boolean(loading)}>
        <ActivityIndicator color={loadingColor} />
      </If>
      <If condition={Boolean(!loading && title)}>
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      </If>
      <If condition={Boolean(!loading && children)}>{children}</If>
    </Pressable>
  );
};
