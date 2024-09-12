import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Catálogo de Productos DummyJSON</Text>
    </View>
  );
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="productos" 
        options={{
          headerShown: false,
          header: () => <CustomHeader />, // Usar el encabezado personalizado
          headerStyle: {
            backgroundColor: '#34495e', // Cambia el color de fondo del encabezado
          },
        }}
      />

    <Stack.Screen 
        name="[id]" 
        options={{
          headerShown: false, // Oculta la barra superior en esta pantalla
        }}
      />

    </Stack>
    
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#34495e', // Color de fondo del encabezado
    paddingVertical: 15, // Espaciado vertical
    alignItems: 'center', // Centra horizontalmente
    paddingTop: 50,
  },
  title: {
    color: '#fff', // Color del texto del título
    fontSize: 14,
    fontWeight: 'bold', // Texto en negrita
    textAlign: 'center', // Centra el texto
  },
});