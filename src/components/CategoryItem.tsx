import { Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { CategoryType } from '../Types';
import { useNavigation } from '@react-navigation/native';


interface CategoryItemProps {
  category: CategoryType;
}

export default function CategoryItem({ category }: CategoryItemProps) {
      const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Meals',{categoryName:category.strCategory})} style={styles.container}>
        <Image source={{ uri: category.strCategoryThumb }} style={styles.image} />
      <Text style={styles.title}>{category.strCategory}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 10,
        marginVertical: 10, 
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomRightRadius:10,
        borderTopRightRadius:10,     
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    title: {
        fontSize: 18,
        marginLeft: 20,
 
    },
})