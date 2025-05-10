import { Stack } from "expo-router";
import { SQLiteDatabase, SQLiteProvider } from "expo-sqlite";

export default function RootLayout() {
  const createDb = async (db: SQLiteDatabase) => {
    await db.execAsync("CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT);");
  };

  return (
    <SQLiteProvider databaseName="mydb.db" onInit={createDb}>
      <Stack>
        <Stack.Screen name="index" options={{title: "Listas de Compras", headerTitleAlign: "center"}} />
        <Stack.Screen name="AddItemModal" options={{presentation: "modal", title: "Nueva Lista", headerTitleAlign: "center"}} />
      </Stack>
    </SQLiteProvider>
  );
}
