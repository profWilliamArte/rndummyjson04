import { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Colors } from "@/constants/Colors";
import Cardprod from '../../components/CardProducto';
import { useLocalSearchParams, useRouter } from 'expo-router'; // Importa useRouter y useLocalSearchParams
import logo from '../../assets/images/logoreactnative.png';
const API='https://dummyjson.com/products/category/';
export default function Productos() {
    const { id } = useLocalSearchParams();
    let URI=API+id
    const currentColors = Colors.dark;
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter(); // Inicializa el router

    const getDatos = async () => {
        try {
            const response = await fetch(URI);
            const data = await response.json();
            setDatos(data.products);
      
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
            <View style={styles.logoContainer}>
                <Image style={styles.logo} resizeMode='contain' source={logo} />
            </View>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Text style={styles.backButtonText}>Regresar</Text>
            </TouchableOpacity>
            <Text style={styles.title}>  {id} ({datos.length}) Productos</Text>

            <FlatList
                data={datos}
                renderItem={({ item }) => <Cardprod item={item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} // Establece el número de columnas
                contentContainerStyle={styles.cardContainer}
                showsVerticalScrollIndicator={false} // Oculta el indicador de desplazamiento vertical
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        marginBottom: 30, // Espacio adicional debajo del logo
        alignItems: 'center', // Centra la imagen
    },
    logo: {
        height: 100,
        width: '100%', // Ajusta el ancho de la imagen
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#ecf0f1',
    },
    cardContainer: {
        justifyContent: 'center', // Centra los cards horizontalmente
    },
    backButton: {
        backgroundColor: '#2980b9',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        marginBottom: 20, // Espacio adicional debajo del botón
    },
    backButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});