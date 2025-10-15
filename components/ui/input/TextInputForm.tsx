import { StyleSheet, Text, TextInputProps, TextStyle, View } from 'react-native'
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import CustomInput, { CustomInputMethods, InputProps } from './CustomInput';

export interface TextInputFormMethods {
  isValidData: () => boolean,
  getData: () => any // TODO: declare its type
}

interface Validation { name: string; regex: string; errorMessage: string }
interface TextInputFormProps extends InputProps {
  label?: string;
  labelStyle?: TextStyle;
  error?: string;
  errorStyle?: TextStyle;
  rightIcon?: string;
  rightIconStyle?: TextStyle;
  leftIcon?: string;
  leftIconStyle?: TextStyle;
  iconPosition?: 'left' | 'right';
  containerStyle?: TextStyle;
  validationData: Validation[]
}

const TextInputForm = forwardRef<TextInputFormMethods, TextInputFormProps>((props, ref) => {
  const {
    label,
    labelStyle,
    error,
    errorStyle,
    style,
    value,
    rightIcon,
    rightIconStyle,
    leftIcon,
    leftIconStyle,
    iconPosition,
    containerStyle,
    placeholder,
    validationData,
  } = props

  const [text, setText] = useState<string>()
  const inputRef = useRef<CustomInputMethods>(null)



  useEffect(() => {

    setText(value)

  }, [])

  const validateData = () => {
    for (const validation of validationData) {
      const regex = new RegExp(validation.regex);
      const valid = regex.test(text ?? "")

      console.log("valid data", valid)
      if (!valid) {
        inputRef?.current?.setError(validation?.errorMessage)
        return false
      }

    }
    return true
  }


  useImperativeHandle(
    ref,
    () => ({
      isValidData: () => validateData() === true,
      getData: () => ({ text: text ?? '' })
    })
  )


  const onChangeText = (newText: string) => {
    setText(newText)
  }

  return (
    <View>
      <CustomInput
        ref={inputRef}
        label={label}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={text}
        labelStyle={labelStyle}
      />
    </View>
  )
});

export default TextInputForm