import React, { useState} from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList

}   from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.userName}>Hello Yemi</Text>
      <Text style={styles.welcomeMessage}>Search for nearby jobs</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>

          <TextInput 
            style={styles.searchInput}
            value=''
            onChange={() => {}}
            placeholder='What are you looking for?'
          />
          <TouchableOpacity style={styles.searchBtn}>
           <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
           />
          </TouchableOpacity>

        </View>

        <View style={styles.tabsContainer}>

        </View>

      </View>
    </View>
    
  )
}

export default Welcome