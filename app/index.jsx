import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useRouter } from 'expo-router';
import logo from "../assets/images/logoreactnative.png";
import Categorias from '@/components/Categorias';

const API = 'https://dummyjson.com/products/category-list';

export default function Index() {
  const currentColors = Colors.dark;
  const router = useRouter(); 

  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDatos = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text style={{ color: currentColors.text }}>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <View style={styles.header}>
        <Image source={logo} resizeMode='contain' style={styles.logo} />
      </View>
      <View style={styles.main}>
        <FlatList
          data={datos}
          renderItem={({ item }) => <Categorias item={item} />}
          keyExtractor={(item) => item.toString()} // Asegúrate de que sea una cadena
          numColumns={2} // Establece el número de columnas
          showsVerticalScrollIndicator={false} // Oculta el indicador de desplazamiento vertical
          contentContainerStyle={styles.flatListContent} // Aplica estilo al contenedor del FlatList
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Curso de React Native</Text>
        <Text style={styles.text}>API DummyJSON</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "between",
    alignItems: "center",
  },
  header: {
    padding: 30,
  },
  logo: {
    width: 400,
    height: 100,
  },
  main: {
    flex: 1, 
    width: '100%', 
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  centerContent: {
    justifyContent: 'center', // Centra el contenido principal verticalmente
  },
  footer: {
    width: '100%', // Asegúrate de que el footer ocupe el 100% del ancho
    padding: 10,

    alignItems: 'center', // Centra el texto en el footer
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: '#ecf0f1',
  },
  flatListContent: {
    paddingHorizontal: 10, // Espaciado horizontal para las tarjetas
  },
});