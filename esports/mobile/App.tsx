import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface ButtonProps {
  title: string;
}

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Is Running</Text>

      <Button title='Enviar' />


      <StatusBar style='auto' backgroundColor='red' />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3c1d8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
