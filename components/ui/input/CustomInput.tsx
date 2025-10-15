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
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@/hooks/useTheme';
import { spacing } from '@/constants/style/spacing';

export interface InputProps extends TextInputProps {
  label?: string;
  labelStyle?: TextStyle;
  rightIcon?: string;
  rightIconStyle?: TextStyle;
  leftIcon?: string;
  leftIconStyle?: TextStyle;
  iconPosition?: 'left' | 'right';
  containerStyle?: TextStyle;
  ref?: React.Ref<CustomInputMethods>;
}

export interface CustomInputMethods {
  setError: (errMsg: string) => void;
  focus: () => void;
  blur: () => void;
  clear: () => void;
}

const CustomInput = forwardRef<CustomInputMethods, InputProps>((props, ref) => {
  const { label,
    labelStyle,
    style,
    value,
    onChangeText,
    rightIcon,
    rightIconStyle,
    leftIcon,
    leftIconStyle,
    iconPosition,
    containerStyle,
    placeholder
  } = props
  const { theme } = useTheme();

  const textInputRef = useRef<TextInput>(null)

  const [error, setError] = useState<string>()

  useImperativeHandle(
    ref,
    () => ({
      setError: (errMsg: string) => {
        setError(errMsg)
      },
      focus: () => {
        textInputRef?.current?.focus()
      },
      blur: () => {
        textInputRef?.current?.blur()
      },
      clear: () => {
        textInputRef?.current?.clear()
      }

    })
  )



  return (
    <View style={[styles.container]}>
      <Text style={[theme.textVariants.fs20Bold, labelStyle]}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          { backgroundColor: theme.color.onPrimaryContainer },

        ]}>
        {leftIcon ? (
          <FontAwesome
            name={leftIcon}
            style={[
              styles.leftIcon,
              leftIconStyle,

              { color: theme.color.secondaryText },
            ]}
          />
        ) : null}
        <TextInput
          ref={textInputRef}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
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

      <Text style={[theme.textVariants.fs12PriReg, { color: theme.color.primaryText }]}>{error}</Text>
    </View>
  );
});

export default CustomInput

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

  leftIcon: {
    fontSize: 16,
    paddingHorizontal: spacing.sp4
  },
  rightIcon: {
    fontSize: 16,
  },
});
