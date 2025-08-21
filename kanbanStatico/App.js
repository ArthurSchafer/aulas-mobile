import { ScrollView, View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View style={estilos.tela}>
        <View>
          <Text style={estilos.titulo}>Quadro de Tarefas</Text>
          <Text style={estilos.subtitulo}>Kanban Estático</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  areaSegura: {
    backgroundColor: "#fff",
    margin: 12
  },
  tela: {
    backgroundColor: "#fff"
  },
  titulo: {
    fontSize: 20,
    fontWeight: "700"
  },
  subtitulo: {
    color: "#475569"
  },
})
