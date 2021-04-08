import React, { FC, useCallback, useState } from 'react'
import { View, StyleSheet } from 'react-native'

import { FilterItem } from '../../common/filter.item'

export const FilterContainer: FC = () => {
  const [selector, setSelector] = useState('all')

  return (
    <View style={styles.container}>
      <FilterItem 
        isSelected={selector === 'all'}
        onPress={useCallback(() => { 
          setSelector('all') 
        }, [])
      }
      >
        Premiers
      </FilterItem>
      <FilterItem 
        isSelected={selector === 'soon'}
        onPress={useCallback(() => { 
          setSelector('soon') 
        }, [])
      }
      >
        Soon
      </FilterItem>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 20
  }
})