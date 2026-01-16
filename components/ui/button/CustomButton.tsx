import {
  StyleSheet,
  Text,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  Pressable,
  PressableProps,
} from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@/hooks/useTheme';

interface ButtonProps extends PressableProps {
  title?: string;
  leftIcon?: string;
  rightIcon?: string;
  iconRightStyle?: TextStyle;
  iconLeftStyle?: TextStyle; // { color?: "red" }
  iconPosition?: 'left' | 'right';
  iconColor?: string;
  iconSize?: number;
  loading?: boolean;
  variant?: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

export default function CustomButton({
  title = 'Continue',
  leftIcon,
  rightIcon,
  iconRightStyle,
  iconLeftStyle,
  iconPosition,
  iconColor,
  iconSize,
  loading,
  onPress,
  variant,
  disabled,
  containerStyle,
  titleStyle,
}: ButtonProps) {
  const { theme } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: theme.color.primaryContainer,
          borderColor: theme.color.onPrimary,
          shadowColor: theme.color.onPrimary,
        },
        containerStyle,
      ]}>
      {loading ? (
        <ActivityIndicator style={[styles.indicator]} />
      ) : (
        <>
          {leftIcon ? (
            <FontAwesome
              name={leftIcon}
              style={[styles.leftIcon, iconLeftStyle]}
            />
          ) : null}
          <Text style={[{ ...theme.textVariants.fs16Bold, ...titleStyle }]}>
            {title}
          </Text>
          {rightIcon ? (
            <FontAwesome
              name={rightIcon}
              style={[styles.rightIcon, iconRightStyle]}
            />
          ) : null}
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {},

  leftIcon: {
    fontSize: 16,
  },
  rightIcon: {
    fontSize: 16,
  },
});
