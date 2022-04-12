import { SafeAreaView, StatusBar, StyleSheet, FlatList } from 'react-native';
import NotaEditor from './src/componentes/NotaEditor';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Nota } from './src/componentes/Nota';
import { buscarNotas, criarTabela } from './src/services/Notas';

export default function App() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    criarTabela();
  }, []);

  const mostraNotas = async () => {
    const todasNotas = await buscarNotas();
    setNotas(todasNotas);
    console.log(todasNotas);
  };

  // asyncstorage
  // const mostraNotas = async () => {
  //   const todasChaves = await AsyncStorage.getAllKeys();
  //   const todasNotas = await AsyncStorage.multiGet(todasChaves);
  //   setNotas(todasNotas);
  //   console.log(todasNotas);
  // };
  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={notas}
        renderItem={(nota) => <Nota {...nota} />}
        keyExtractor={(nota) => nota.id}
      />
      <NotaEditor mostraNotas={mostraNotas()} />
      {/*asyncstorage <NotaEditor mostraNotas={mostraNotas} /> */}
      <NotaEditor />
      <StatusBar />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
