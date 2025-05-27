import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInput,
  TextInputProps,
} from 'react-native';
import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@/hooks/useTheme';

interface InputProps extends TextInputProps {
  title?: string;
  titleStyle?: TextStyle;
  bottomText?: string;
  bottomTextStyle?: TextStyle;
  rightIcon?: string;
  rightIconStyle?: TextStyle;
  leftIcon?: string;
  leftIconStyle?: TextStyle;
  iconPosition?: 'left' | 'right';
  containerStyle?: TextStyle;
}

export default function CustomInput({
  title,
  titleStyle,
  bottomText,
  bottomTextStyle,
  style,
  value,
  onChange,
  rightIcon,
  rightIconStyle,
  leftIcon,
  leftIconStyle,
  iconPosition,
  containerStyle,
  placeholder,
}: InputProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.container]}>
      <Text style={[theme.textVariants.fs20Bold]}>{title}</Text>
      <View
        style={[
          styles.inputContainer,
          { backgroundColor: theme.color.onPrimaryContainer },
        ]}>
        {leftIcon ? (
          <MaterialIcons
            title={leftIcon}
            style={[
              styles.leftIcon,
              leftIconStyle,

              { color: theme.color.secondaryText },
            ]}
          />
        ) : null}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          placeholderTextColor={theme.color.secondaryText}
          selectionColor={theme.color.secondaryText}
          style={[
            styles.textInput,
            {
              color: theme.color.primaryText,
            },
            style,
          ]}
        />
        {rightIcon ? (
          <MaterialIcons
            title={rightIcon}
            style={[styles.rightIcon, rightIconStyle]}
          />
        ) : null}
      </View>

      {bottomText ? <Text style={[bottomTextStyle]}>{bottomText}</Text> : <></>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 51,
    borderRadius: 6,
  },
  textInput: {
    fontSize: 18,
    flex: 1,
    borderWidth: 1,
    borderColor: '#00000000',
  },
  indicator: {},

  leftIcon: {
    fontSize: 16,
  },
  rightIcon: {
    fontSize: 16,
  },
});
