import { StyleSheet, Text, View, Image, TextStyle } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { fontSize } from '@/constants/style/fontSize'
import { fontWeight } from '@/constants/style/fontWeight'
import { spacing } from '@/constants/style/spacing'

interface ArtistCardProps {
  source?: string,
  name?: string,
  isArtistSelected?: boolean,
  onClick?: () => void,
  imageStyle?: TextStyle,
  textStyle?: TextStyle
}

const ArtistCard = ({
  source,
  name,
  onClick,
  isArtistSelected,
  imageStyle,
  textStyle
}: ArtistCardProps) => {
  const { theme } = useTheme()
  const [isSelected, setIsSelected] = useState<boolean>(isArtistSelected || false)

  return (
    <View style={[styles.container]}>
      <Image
        style={[styles.imageContainer, imageStyle]}
        source={require("../../assets/images/auth.png")}
      />
      <Text style={[styles.text, { color: theme.color.primaryText }, textStyle]}>{name}</Text>
    </View>
  )
}

export default ArtistCard

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: spacing.sp16
  },
  imageContainer: {
    minWidth: 100,
    minHeight: 100,
    borderRadius: 5,
    borderColor: 'red',
    borderWidth: 2

  },
  text: {
    fontSize: fontSize.fs20,
    fontWeight: fontWeight.bold
  }
})