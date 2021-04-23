import React, { FC, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Heading } from '../../common/heading'

export const FilterContainer: FC = () => {
  const [selector, setSelector] = useState(true)

  return (
    <>
      <Heading value={selector ? 'Premiers' : 'Soon'}>
        <TouchableOpacity onPress={() => setSelector(prev => !prev)}>
          <Icon name={`chevron-right`} size={35} />
        </TouchableOpacity>
      </Heading>
    </>
  )
}
   // <View style={styles.container}>
    //   <FilterItem 
    //     isSelected={selector === 'all'}
    //     onPress={useCallback(() => { 
    //       setSelector('all') 
    //     }, [])
    //   }
    //   >
    //     Premiers
    //   </FilterItem>
    //   <FilterItem 
    //     isSelected={selector === 'soon'}
    //     onPress={useCallback(() => { 
    //       setSelector('soon') 
    //     }, [])
    //   }
    //   >
    //     Soon
    //   </FilterItem>
    // </View>