import { View, Text, StyleSheet } from "react-native";

const CustomHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#34495e', // Color de fondo del encabezado
    paddingVertical: 15, // Espaciado vertical
    alignItems: 'center', // Centra horizontalmente
    justifyContent: 'center', // Centra verticalmente
  },
  title: {
    color: '#fff', // Color del texto del título
    fontSize: 16,
    fontWeight: 'bold', // Texto en negrita
    textAlign: 'center', // Centra el texto
  },
});

export default CustomHeader;