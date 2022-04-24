import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import config from "./src/aws-exports";
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
const  App = () =>{
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app how do!</Text>
      <Text>Have a lovely day</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
