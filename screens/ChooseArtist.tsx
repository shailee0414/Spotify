import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@/hooks/useTheme'
import CustomHeader from '@/components/ui/header/CustomHeader'
import { spacing } from '@/constants/style/spacing'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '@/components/ui/input/CustomInput'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'
import ArtistCard from '@/components/ui/ArtistCard'

interface ListType {
  id: string,
  name: string
}
const ChooseArtist = () => {
  const { theme } = useTheme()
  const [text, setText] = useState<string>()
  const [list, setList] = useState<ListType[] | null>([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' },
    { id: '6', name: 'Item 6' },
    { id: '7', name: 'Item 7' },
    { id: '8', name: 'Item 8' },
    { id: '9', name: 'Item 9' },
    { id: '10', name: 'Item 10' },
    { id: '11', name: 'Item 11' },
    { id: '12', name: 'Item 12' },
  ])

  const onChangeText = (txt: string) => {
    setText(txt)
  }

  const screenWidth = Dimensions.get('window').width;
  const itemSize = (screenWidth - (spacing.sp12) * (3 + 1)) / 3 - spacing.sp16;

  console.log(text)

  const renderItem = ({ item }: { item: ListType | null; }) => {
    return <ArtistCard name={item?.name} imageStyle={{ width: itemSize, height: itemSize, borderRadius: itemSize / 2 }} />
  }


  return (
    <GestureHandlerRootView style={{ flex: 1 }
    }>
      <SafeAreaView style={[styles.safeAreaView, { backgroundColor: theme.color.onPrimary }]}>
        <View style={[styles.container]}>
          <CustomHeader headerTitle='Choose at leas 3 artist' />
          <CustomInput leftIcon='search' placeholder='Search' value={text} onChangeText={onChangeText} />
          <FlatList data={list}
            renderItem={renderItem}
            numColumns={3}
            keyExtractor={item => item.toString()}
            columnWrapperStyle={styles.listRow}
          />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>

  )
}

export default ChooseArtist

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  container: {
    padding: spacing.sp16,
    flex: 1,
  },
  listRow: {
    justifyContent: 'space-between',
    paddingBottom: spacing.sp24
  },

})