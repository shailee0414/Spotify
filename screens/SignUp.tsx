import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { spacing } from '@/constants/style/spacing';
import React, { useState, useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';
import CustomHeader from '@/components/ui/header/CustomHeader';
import signup from '@/constants/screens/signup.json';
import CustomButton from '@/components/ui/button/CustomButton';
import { borderRadii } from '@/constants/style/borderRadii';
import TextInputForm, { TextInputFormMethods } from '@/components/ui/input/TextInputForm';
import ArtistCard from '@/components/ui/ArtistCard';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAMES } from '@/constants/navigation';

const SignUp = () => {
  const { theme } = useTheme();
  const textInputFormRef = useRef<TextInputFormMethods>(null);
  const [activeIndex, setActiveIndex] = useState(3);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [dataSharingOptIn, setDataSharingOptIn] = useState(false);
  const navigation = useNavigation()

  const currentData = signup[activeIndex]

  const onBackPress = () => {
    if (activeIndex === 0) {
      return;
    } else {
      setActiveIndex(activeIndex - 1);
    }
  }

  const onNextPress = () => {
    // Validate the input before proceeding
    const isValid = textInputFormRef.current?.isValidData()
    console.log('at shail 111', isValid)
    if (isValid) {
      const inputData = textInputFormRef?.current?.getData();
      console.log('Valid input data:', inputData);

      // Proceed to next step or submit
      if (activeIndex < signup.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else {
        navigation.navigate(SCREEN_NAMES.ARTIST)
      }
    } else {
      console.log('Validation failed');
    }
  }

  const renderForm = (item, index) => {
    if (activeIndex === index) {
      return (
        <TextInputForm
          ref={textInputFormRef}
          label={item?.label}
          placeholder={item?.placeholder}
          labelStyle={{ color: theme.color.primaryText }}
          value={item?.value}
          validationData={item?.validation ?? []}
          errorStyle={{ color: theme.color.primaryText }}
        />
      )
    }
    return null
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.color.onPrimary, flex: 1 },
      ]}>
      <SafeAreaView>
        <View style={[styles.safeAreaContainer]}>
          <CustomHeader
            headerTitle={currentData?.page || ""}
            onPress={onBackPress}
          />

          {signup?.map(renderForm)}

          {
            currentData.type === "name" ?
              <View style={styles.termsContainer}>
                <View style={[styles.divider, { backgroundColor: theme.color.border }]} />

                <Text style={[styles.termsText, { color: theme.color.primaryText }]}>{currentData?.terms?.heading}
                  <Text style={[styles.linkText, { color: theme.color.tertiary }]}>{currentData?.terms?.termsButtonText}</Text>.
                </Text>

                <Text style={[styles.privacyText, { color: theme.color.primaryText }]}>{currentData?.terms?.privacy}
                  <Text style={[styles.linkText, { color: theme.color.tertiary }]}>{currentData?.terms?.privacyButtonText}</Text>.
                </Text>

                {/* Marketing opt-in checkbox */}
                <TouchableOpacity
                  style={styles.checkboxRow}
                  onPress={() => setMarketingOptIn(!marketingOptIn)}
                >
                  <View style={[
                    styles.checkbox,
                    { borderColor: theme.color.primaryText },
                    marketingOptIn && { backgroundColor: theme.color.primaryText }
                  ]}>
                    {marketingOptIn && (
                      <Text style={[styles.checkmark, { color: theme.color.primary }]}>✓</Text>
                    )}
                  </View>
                  <Text style={[styles.checkboxText, { color: theme.color.primaryText }]}>
                    {currentData?.terms?.marketing}
                  </Text>
                </TouchableOpacity>

                {/* Data sharing opt-in checkbox */}
                <TouchableOpacity
                  style={styles.checkboxRow}
                  onPress={() => setDataSharingOptIn(!dataSharingOptIn)}
                >
                  <View style={[
                    styles.checkbox,
                    { borderColor: theme.color.primaryText },
                    dataSharingOptIn && { backgroundColor: theme.color.primaryText }
                  ]}>
                    {dataSharingOptIn && (
                      <Text style={[styles.checkmark, { color: theme.color.primary }]}>✓</Text>
                    )}
                  </View>
                  <Text style={[styles.checkboxText, { color: theme.color.primaryText }]}>
                    {currentData?.terms?.sharing}                  </Text>
                </TouchableOpacity>
              </View> : <></>
          }

          <CustomButton
            title={currentData?.buttonText}
            onPress={onNextPress}
            containerStyle={{
              ...styles.buttonContainer,
              ...(currentData?.type === "name" ? { backgroundColor: theme.color.primaryText } : {})
            }}
          />

        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: spacing.sp16,
    flex: 1,
  },
  safeAreaContainer: {
    // flex: 1,
  },

  // Terms and Privacy styles
  termsContainer: {
    marginTop: spacing.sp24,

  },
  divider: {
    height: 1,
    marginBottom: spacing.sp20,
  },
  termsText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: spacing.sp12,
  },
  privacyText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: spacing.sp20,
  },
  linkText: {
    fontWeight: '500',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.sp16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginRight: spacing.sp12,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    marginTop: spacing.sp20,
    borderRadius: borderRadii.br45,
    paddingHorizontal: spacing.sp20,
    alignSelf: 'center'
  }
});
