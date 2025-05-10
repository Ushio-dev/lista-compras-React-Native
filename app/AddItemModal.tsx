import { StyleSheet, Text, TextInput, View } from "react-native"

export default function AddItemModal() {
  return (
    <View style={styles.container}>
        <Text>Modal Screen</Text>
        <TextInput value="Hola" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8
    }
})