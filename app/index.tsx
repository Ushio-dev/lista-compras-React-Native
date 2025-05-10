import { useFocusEffect, useRouter } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { useCallback, useState } from "react";
import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ItemCard from "./components/ItemCard";
import { Item } from "./types";

export default function Index() {
  const router = useRouter();
  const [items, setItems] = useState<Item[]>([])

  const database = useSQLiteContext();

  // Trae los datos desde sqlite
  const loadListas = async () => {
    const result = await database.getAllAsync<Item>("SELECT * FROM items");
    setItems(result);
  }

  // Nose exactamente que es lo que hace
  useFocusEffect(
    useCallback(() => {
      loadListas();
    }, [])
  );

  const click = () => {
    router.push("/AddListaModal");
  }

  // funcion para renderizar cada item de la lista
  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <View style={styles.item}>
      <ItemCard item={item}/>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={items} renderItem={renderItem}  keyExtractor={(item) => item.id.toString()}/>
      <TouchableOpacity style={styles.favButton} onPress={click}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  favButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#6200ee',
    width: 50,
    height: 50,
    borderRadius: 12, // más cuadrado que 28 (círculo perfecto)
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  fabIcon: {
    fontSize: 24,
    color: 'white',
  },
  item: {
    backgroundColor: '#eee',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
})