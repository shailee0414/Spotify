import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@/hooks/useTheme';
import { fontSize } from '@/constants/style/fontSize';
import { fontWeight } from '@/constants/style/fontWeight';
import { spacing } from '@/constants/style/spacing';
import { useNavigation } from '@react-navigation/native';

interface headerProps {
  headerTitle: string;
  onPress?: () => void;
}
const CustomHeader = ({ headerTitle, onPress }: headerProps) => {
  const { theme } = useTheme();
  const navigation = useNavigation()
  const onGoBack = () => {
    if (onPress) {
      onPress()
    }
    else {
      navigation.goBack()
    }
  }
  return (
    <View style={[styles.container]}>
      <FontAwesome
        name="chevron-left"
        style={[styles.icon, { color: theme.color.primaryText }]}
        onPress={onGoBack}
      />
      <View style={[styles.titleContainer]}>
        <Text style={[styles.headerTitle, { color: theme.color.primaryText }]}>
          {headerTitle}
        </Text>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sp16,
  },
  iconContainer: {},
  icon: {
    fontSize: fontSize.fs18,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: fontSize.fs20,
    fontWeight: fontWeight.extraBold,
  },
});
