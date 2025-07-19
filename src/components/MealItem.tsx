import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MealType } from '../Types';
import { useNavigation } from '@react-navigation/native';

interface MealItemProps {
  meal: MealType;
}
export default function MealItem({ meal }: MealItemProps) {
       const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Details', { mealId: meal.idMeal })}  >
      <Image
        source={{ uri: meal.strMealThumb }}
        style={styles.image}
      />
     <View style={styles.titleContainer}> <Text style={styles.title}>{meal.strMeal}</Text></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    titleContainer: {
     
        width: '100%',
    
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 5,
        borderRadius: 5,
        
       
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#fff',
        textAlign: 'right',
     
      
       
    },  
});
