import React from 'react';
import { Text } from 'react-native';
import { Item } from '../types';

type props = {
    item: Item 
}

function ItemCard({item}: props) {
  return (
    <Text>{item.title}</Text>
  )
}

export default ItemCard