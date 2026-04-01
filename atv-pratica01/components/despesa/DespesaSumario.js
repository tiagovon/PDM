import { View, Text, StyleSheet } from 'react-native';

function DespesaSumario({ despesas, periodo }) {
  const somaDespesas = despesas.reduce((total, despesa) => {
    return total + despesa.valor;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={styles.soma}>R$ {somaDespesas.toFixed(2)}</Text>
    </View>
  );
}

export default DespesaSumario;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#d9d9d9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  periodo: {
    fontWeight: 'bold',
  },
  soma: {
    fontWeight: 'bold',
  },
});