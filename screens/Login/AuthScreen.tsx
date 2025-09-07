import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { FontAwesome } from '@expo/vector-icons';
import CustomButton from '@/components/ui/customButton/CustomButton';

const AuthScreen = () => {
  const { theme } = useTheme();

  return (
    <ScrollView
      style={[
        styles.scrollContainer,
        { backgroundColor: theme.color.onPrimary },
      ]}>
      <View style={[styles.container]}>
        <Image
          style={[styles.image]}
          source={require('../../assets/images/auth.png')}
        />
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
            fontSize: theme.fontSize.fs28,
            fontWeight: theme.fontWeight.bold,
            marginTop: theme.spacing.sp12,
            textAlign: 'center',
          }}>
          Millions of songs. {'\n'}
          Free on Spotify.
        </Text>
        <CustomButton
          title="Sign up Free"
          onPress={() => {}}
          containerStyle={{
            marginTop: theme.spacing.sp12,
            backgroundColor: theme.color.tertiary,
            width: '90%',
            borderRadius: theme.borderRadii.br45,
          }}
          titleStyle={{
            color: theme.color.onPrimary,
            fontSize: theme.fontSize.fs16,
            fontWeight: theme.fontWeight.bold,
          }}
        />
        <CustomButton
          title="Continue with Google"
          onPress={() => {}}
          containerStyle={{
            paddingHorizontal: theme.spacing.sp16,
            marginTop: theme.spacing.sp8,
            backgroundColor: theme.color.onPrimary,
            width: '90%',
            borderRadius: theme.borderRadii.br45,
            borderWidth: 2,
            borderColor: theme.color.primaryText,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: 80,
          }}
          titleStyle={{ color: theme.color.primaryText, fontSize: 16 }}
          leftIcon="google"
          iconLeftStyle={{ color: theme.color.primaryText, fontSize: 24 }}
        />
        <CustomButton
          title="Continue with Facebook"
          onPress={() => {}}
          containerStyle={{
            paddingHorizontal: theme.spacing.sp16,
            marginTop: theme.spacing.sp8,
            backgroundColor: theme.color.onPrimary,
            width: '90%',
            borderRadius: theme.borderRadii.br45,
            borderWidth: 2,
            borderColor: theme.color.primaryText,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: 80,
          }}
          titleStyle={{ color: theme.color.primaryText, fontSize: 16 }}
          leftIcon="facebook"
          iconLeftStyle={{ color: theme.color.primaryText, fontSize: 24 }}
        />
        <CustomButton
          title="Continue with Apple"
          onPress={() => {}}
          containerStyle={{
            paddingHorizontal: theme.spacing.sp16,
            marginTop: theme.spacing.sp8,
            backgroundColor: theme.color.onPrimary,
            width: '90%',
            borderRadius: theme.borderRadii.br45,
            borderWidth: 2,
            borderColor: theme.color.primaryText,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: 80,
          }}
          titleStyle={{ color: theme.color.primaryText, fontSize: 16 }}
          leftIcon="apple"
          iconLeftStyle={{ color: theme.color.primaryText, fontSize: 24 }}
        />
        <CustomButton
          title="Log In"
          onPress={() => {}}
          containerStyle={{
            paddingHorizontal: theme.spacing.sp16,
            marginTop: theme.spacing.sp8,
            backgroundColor: theme.color.onPrimary,
            width: '90%',
          }}
          titleStyle={{ color: theme.color.primaryText, fontSize: 16 }}
        />
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
  image: {},
});
