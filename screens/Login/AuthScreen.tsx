import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { FontAwesome } from '@expo/vector-icons';
import CustomButton from '@/components/ui/customButton/CustomButton';
import authScreen from '@/constants/screens/authScreen.json';
import { dark } from '@/constants/style/dark';

const AuthScreen = () => {
  const { theme } = useTheme();

  return (
    <ScrollView
      style={[
        styles.scrollContainer,
        { backgroundColor: theme.color.onPrimary },
      ]}>
      <View style={[styles.container]}>
        <Image source={require('../../assets/images/auth.png')} />
        <View>
          <FontAwesome
            name="spotify"
            size={60}
            color={theme.color.primaryText}
          />
        </View>
        <Text
          style={{
            color: theme.color.primaryText,
            ...styles.containerTitle,
          }}>
          Millions of songs. {'\n'}
          Free on Spotify.
        </Text>
        {authScreen.map((item) => {
          return (
            <CustomButton
              key={item.id}
              title={item.text}
              onPress={() => {}}
              containerStyle={{
                ...styles.baseButton,
                backgroundColor:
                  item?.id === 'signUp'
                    ? theme.color.tertiary
                    : theme.color.onPrimary,
                borderColor: item?.id?.includes('continueWith')
                  ? theme.color.primaryText
                  : 'transparent',
                ...(item?.id?.includes('continueWith')
                  ? styles.socialButton
                  : {}),
              }}
              leftIcon={item.icon ?? undefined}
              iconLeftStyle={{
                ...styles.leftIcon,
                color: theme.color.primaryText,
              }}
              titleStyle={{
                color:
                  item?.id === 'signUp'
                    ? theme.color.onPrimary
                    : theme.color.primaryText,
              }}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTitle: {
    fontSize: dark.fontSize.fs28,
    fontWeight: dark.fontWeight.bold,
    marginTop: dark.spacing.sp12,
    textAlign: 'center',
  },

  baseButton: {
    marginTop: dark.spacing.sp12,
    width: '90%',
    borderRadius: dark.borderRadii.br45,
  },

  leftIcon: {
    marginRight: dark.spacing.sp8,
    fontSize: dark.fontSize.fs24,
  },

  socialButton: {
    paddingHorizontal: 16,
    marginTop: 8,
    borderWidth: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 80,
  },

  baseTitle: {
    fontSize: dark.fontSize.fs16,
    fontWeight: dark.fontWeight.bold,
  },
});
