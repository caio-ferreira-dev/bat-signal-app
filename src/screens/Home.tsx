import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { BatSignal } from '../components/BatSignal/BatSignal';

export default function screens() {
  return (
    <View style={styles.container}>
        <BatSignal />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
