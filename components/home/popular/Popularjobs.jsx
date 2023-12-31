import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants';
import styles from './popularjobs.style'

import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text
       style={styles.headerTitle}
      >
        Popular jobs
      </Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show all</Text>
      </TouchableOpacity>
      </View>
      <View></View>
    </View>
  )
}

export default Popularjobs