import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function Categorias({ item }) {
    const router = useRouter();

    const handlePress = () => {
        router.push(`/productos/${item}`);
    };

    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
            <View style={styles.content}>
                <Text style={styles.title}>{item}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        width: '45%', // Cambiado a 100% para ocupar todo el ancho
        alignSelf: 'center',
    },
    content: {
        alignItems: 'center',
    },
    title: {
        fontSize: 12,
        color: '#34495e',
        textAlign: 'center',
    },
});