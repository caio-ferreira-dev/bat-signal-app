import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black',
    paddingVertical: 5,
    textAlign: 'center',
    borderRadius: 10,
  },
  formContainer: {
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  signalContainer: {
    paddingTop: 150
  },
  labelContainer: {
    flex: 1,
    gap: 40,
  }
});