import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Router from './Router';

export default function App() {
  return (
        <Router />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FD7F20',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
